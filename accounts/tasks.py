from celery import Celery
from django.utils import timezone
from .models import Add_Reklama
from pyrogram import Client
from pyrogram import filters
import logging
from django.db import transaction
import telegram
import os
logger = logging.getLogger(__name__)
from API.models import Add_userbot
from celery import shared_task
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"
bot_telegram = telegram.Bot(token=BOT_TOKEN)
import requests

@shared_task
def send_telegram_message(ad_id):
    ad = Add_Reklama.objects.get(pk=ad_id)
    # Ваш код для выполнения, когда статус - PUBLISHED и order_data соответствует текущему времени
    bot_telegram.sendMessage('@lsbnvVm9TmhjZDNi', ad.name_ads)


@shared_task
@transaction.atomic
def process_user_bot(name, api_id, api_hash, phone):
    with Client(name, api_id=api_id, api_hash=api_hash, phone_number=phone) as client:
        try:

            # Export the session string
            session_data = client.export_session_string()

            # Update the Add_userbot instance
            userbot = Add_userbot.objects.select_for_update().get(name=name)
            userbot.session = session_data
            userbot.save()

        except Exception as e:
            print(f"Authentication failed: {str(e)}")



@shared_task
def add_chanel(chanel_link):
    userbots = Add_userbot.objects.all()

    for userbot in userbots:
        session_data = userbot.session
        name = userbot.name
        api_id = userbot.api_id
        api_hash = userbot.api_hash
        phone = userbot.phone_number

        with Client(name, api_id=api_id, api_hash=api_hash, phone_number=phone,session_string=session_data) as client:
            channel_link = chanel_link
            channel_username = channel_link.split('/')[-1]
            chat = client.get_chat("@" + channel_username)
            total_view = client.get_chat_history("@" + channel_username, limit=5)
            send_view = 0
            for views in total_view:
                if views.views:
                    send_view += views.views

            payload = {
                'name': chat.title,
                'subscribers': str(chat.members_count),
                'chanel_link': channel_link,
                'views': str(send_view),
            }

            if chat.photo is not None:
                file_path = client.download_media(chat.photo.big_file_id, file_name="channel_photo.jpg")
                files = {'pictures': open(file_path, 'rb')}

                # Add the payload as form fields
                for key, value in payload.items():
                    files[key] = (None, str(value))

                response = requests.post('https://e09c-94-141-68-116.ngrok-free.app/api/', files=files)

                with open(file_path, "rb") as photo:
                    client.send_photo("@lsbnvVm9TmhjZDNi", photo)


            if response.status_code == 200:
                break

            # Do something with the response if needed

























