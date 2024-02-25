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


clients = {}  # Dictionary to store multiple Pyrogram clients






async def update(client):
    session=aiohttp.ClientSession()
    while True:
        print("Enter")
        await waiting()
        async with session.get('https://ab9e-94-141-68-116.ngrok-free.app/api/') as resp:
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

                await session.post('https://ab9e-94-141-68-116.ngrok-free.app/api/', data=payload)
                print(payload)
            await asyncio.sleep(60)







@database_sync_to_async
def get_userbots():
    return list(Add_userbot.objects.filter(is_active=True))

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
        print('userbot_added')

async def remove_inactive_clients():
    while True:
        print('hi')
        active_userbot_ids = [userbot.id for userbot in await get_userbots()]

        # Remove clients that are no longer in the database
        for client_id in list(clients.keys()):
            if client_id not in active_userbot_ids:
                del clients[client_id]
                print(f"Client with ID {client_id} removed.")

        await asyncio.sleep(10)


async def waiting():
    while not clients:  # Check if clients is empty
        print('Waiting for clients...')
        await asyncio.sleep(60)
        await initialize_clients()

async def run_userbots():
    await waiting()

    tasks = [client.start() for client in clients.values()]

    # Wait for all clients to start
    await asyncio.gather(*tasks)

    # Run update tasks concurrently

    message_handler_tasks = [asyncio.create_task(update(client)) for client in clients.values()]
    asyncio.create_task(remove_inactive_clients())
    #message_handler_tasks_new = [asyncio.create_task(update_new(client)) for client in clients.values()]

    # Wait for all update tasks to run
    await asyncio.gather(*message_handler_tasks)




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
















