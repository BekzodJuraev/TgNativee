from pyrogram import Client
import aiohttp
import asyncio
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

                    async with session.post('https://7495-94-141-68-116.ngrok-free.app/api/',
                                            data=form_data) as resp:
                        await resp.text()
                    with open(file_path, "rb") as photo:
                        await client.send_photo("@lsbnvVm9TmhjZDNi", photo)


            else:
                async with aiohttp.ClientSession() as session:
                    async with session.post('https://7495-94-141-68-116.ngrok-free.app/api/', data=payload) as resp:
                        await resp.text()

            await client.send_message('@lsbnvVm9TmhjZDNi', payload)








async def update(client):
    session=aiohttp.ClientSession()
    while True:
        print("Enter")
        async with session.get('https://f6c3-94-141-68-116.ngrok-free.app/api/') as resp:
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

                await session.post('https://f6c3-94-141-68-116.ngrok-free.app/api/', data=payload)
                print(payload)
            await asyncio.sleep(60)



@database_sync_to_async
def get_userbots():
    return list(Add_userbot.objects.all())

async def initialize_clients():
    userbots = await get_userbots()

    for userbot in userbots:
        # Retrieve the session data from the model
        session_data = userbot.session

        client = Client(
            userbot.name,
            api_id=userbot.api_id,
            api_hash=userbot.api_hash,
            phone_number=userbot.phone_number,
            session_string=session_data
        )

        # Set the session data for the client


        clients[userbot.id] = client

async def run_userbots():
    if not clients.values():
        return

    tasks = [client.start() for client in clients.values()]

    # Wait for all clients to start
    await asyncio.gather(*tasks)

    # Run update tasks concurrently
    update_tasks = [asyncio.create_task(message_handler(client)) for client in clients.values()]
    message_handler_tasks = [asyncio.create_task(update(client)) for client in clients.values()]
    #message_handler_tasks_new = [asyncio.create_task(update_new(client)) for client in clients.values()]

    # Wait for all update tasks to run
    await asyncio.gather(*update_tasks, *message_handler_tasks)




    # Run the update task for each client concurrently


#celery -A TgNativee worker -l info --pool=solo

#celery -A your_project worker -l info -c 4 -n worker3@%h

#celery -A your_project flower --port=5555


#STATIC_ROOT = '/var/www/html/static/'
#sudo systemctl reload gunicorn
#sudo service nginx reload
async def run_userbot():
    await initialize_clients()
    await run_userbots()
















