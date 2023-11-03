from pyrogram import Client
import aiohttp
import asyncio
import nest_asyncio
import requests
from pyrogram.enums import ChatAction,ParseMode
from pyrogram.handlers import MessageHandler
from pyrogram.types import Message

api_id = '#'
api_hash = '#'
from pyrogram import filters
import time
client=Client('me_client', api_id, api_hash)
#client.start()
#channel_link = "@juicewrld_rus"
#client.join_chat(channel_link)
@client.on_message(filters.chat('@lsbnvVm9TmhjZDNi') & filters.text)
async def all_message(client,message:Message):
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
            'subscribers': chat.members_count,
            'chanel_link': channel_link,
            'views': send_view
        }

        if chat.photo is not None:
            file_path = await client.download_media(chat.photo.big_file_id, file_name="channel_photo.jpg")
            async with aiohttp.ClientSession() as session:
                async with session.post('https://9f65-217-30-171-58.ngrok-free.app/api/', data=payload) as resp:
                    await resp.text()
            with open(file_path, "rb") as photo:
                await client.send_photo("@lsbnvVm9TmhjZDNi", photo)
        else:
            async with aiohttp.ClientSession() as session:
                async with session.post('https://9f65-217-30-171-58.ngrok-free.app/api/', data=payload) as resp:
                    await resp.text()

        await client.send_message('@lsbnvVm9TmhjZDNi', payload)


async def update(client):
    session=aiohttp.ClientSession()
    while True:
        print("Enter")
        async with session.get('https://2860-217-30-171-58.ngrok-free.app/api/') as resp:
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

                await session.post('https://2860-217-30-171-58.ngrok-free.app/api/', data=payload)
                print(payload)
            await asyncio.sleep(3)
















client.start()

# Run the functions concurrently
loop = asyncio.get_event_loop()
loop.create_task(update(client))

loop.run_forever()
