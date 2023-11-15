from pyrogram import Client
import aiohttp
import asyncio
import nest_asyncio
import requests
from pyrogram.enums import ChatAction,ParseMode
from pyrogram.handlers import MessageHandler
from pyrogram.types import Message
from API.models import Add_userbot
import os
import telegram
from channels.db import database_sync_to_async


from pyrogram import filters


#client=Client('me_client', api_id, api_hash)
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"
bot_telegram = telegram.Bot(token=BOT_TOKEN)
#channel_link = "@juicewrld_rus"
#client.join_chat(channel_link)
clients = {}  # Dictionary to store multiple Pyrogram clients

# Function to initialize clients for each user account

@database_sync_to_async
def get_userbots():
    return list(Add_userbot.objects.all())

async def initialize_clients():
    userbots = await get_userbots()

    for userbot in userbots:
        client = Client(
            userbot.name,
            userbot.api_id,
            userbot.api_hash
        )
        clients[userbot.id] = client
async def message_handler(client):
    @client.on_message(filters.chat('@Tgnative_bot') & filters.text)
    async def all_message(client, message: Message):
        if message.from_user.id or client.get_me().id:
            channel_link = message.text
            channel_username = channel_link.split('/')[-1]
            chat = await client.get_chat("@" + channel_username)
            total_view = client.get_chat_history("@" + channel_username, limit=5)
            send_view = 0
            async for views in total_view:
                if views.views:
                    send_view += views.views
            payload = {
                'name': chat.title,
                'subscribers': str(chat.members_count),
                'chanel_link': channel_link,
                'views': str(send_view),

            }

            if chat.photo is not None:
                file_path = await client.download_media(chat.photo.big_file_id, file_name="channel_photo.jpg")
                form_data = aiohttp.FormData()

                # Add the file to the FormData object
                form_data.add_field('pictures', open(file_path, 'rb'))

                # Add the payload as form fields
                for key, value in payload.items():
                    form_data.add_field(key, value)

                async with aiohttp.ClientSession() as session:

                    async with session.post('https://1095-217-30-171-58.ngrok-free.app/api/',
                                            data=form_data) as resp:
                        await resp.text()
                    with open(file_path, "rb") as photo:
                        await client.send_photo("@lsbnvVm9TmhjZDNi", photo)


            else:
                async with aiohttp.ClientSession() as session:
                    async with session.post('https://1095-217-30-171-58.ngrok-free.app/api/', data=payload) as resp:
                        await resp.text()

            await client.send_message('@lsbnvVm9TmhjZDNi', payload)






async def update(client):
    session=aiohttp.ClientSession()
    while True:
        print("Enter")
        async with session.get('https://1095-217-30-171-58.ngrok-free.app/api/') as resp:
            data = await resp.json()
            #print(data)
            for i in data:
                channel_link = i['chanel_link']
                channel_username = channel_link.split('/')[-1]
                chat = await client.get_chat("@" + channel_username)
                total_view =  client.get_chat_history("@" + channel_username, limit=5)
                send_view = 0
                async for views in total_view:
                    if views.views:
                        send_view += views.views
                payload = {
                    'name': chat.title,
                    'subscribers': chat.members_count,
                    'chanel_link': channel_link,
                    'views': send_view
                }

                await session.post('https://1095-217-30-171-58.ngrok-free.app/api/', data=payload)
                print(payload)
            await asyncio.sleep(60)




async def run_userbots():
   # adding_userbots=[add_userbot(userbot) for userbot in Add_userbot.objects.all()]
    tasks = [client.start() for client in clients.values()]
    # Run the update task for each client concurrently
    update_tasks = [asyncio.create_task(message_handler(client)) for client in clients.values()]
    message_handler_tasks = [asyncio.create_task(update(client)) for client in clients.values()]

    # Wait for all clients to start and update tasks to run
    await asyncio.gather(*tasks, *update_tasks,*message_handler_tasks)







async def run_userbot():
    await initialize_clients()
    # Start all clients and wait for them to start
    await run_userbots()







