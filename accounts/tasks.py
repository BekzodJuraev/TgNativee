from celery import Celery
from django.utils import timezone
from .models import Add_Reklama
from pyrogram import Client
from pyrogram import filters
import logging
import telegram
import os
logger = logging.getLogger(__name__)
from API.models import Add_userbot
from celery import shared_task
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"
bot_telegram = telegram.Bot(token=BOT_TOKEN)

@shared_task
def send_telegram_message(ad_id):
    ad = Add_Reklama.objects.get(pk=ad_id)
    # Ваш код для выполнения, когда статус - PUBLISHED и order_data соответствует текущему времени
    bot_telegram.sendMessage('@lsbnvVm9TmhjZDNi', ad.name_ads)



@shared_task
def process_user_bot(name, api_id, api_hash, phone):
    client = Client(name, api_id=api_id, api_hash=api_hash, phone_number=phone)

    client.start()

    session_data = client.export_session_string()

    userbot = Add_userbot.objects.get(name=name)
    userbot.session = session_data
    userbot.save()















