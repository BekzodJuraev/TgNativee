from celery import Celery
from django.utils import timezone
from accounts.models import Add_Reklama

import logging

logger = logging.getLogger(__name__)
import telegram
from celery import shared_task
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"
bot_telegram = telegram.Bot(token=BOT_TOKEN)
Bekzod = "531080457"
@shared_task
def send_notification():
    try:
        # Ваш код задачи
        print("Celery task in progress...")

        # Вставьте здесь код для отправки сообщения в Telegram
        bot_telegram.sendMessage(chat_id=Bekzod, text="hello world")
        print("Message sent successfully!")

    except Exception as e:
        print(f"An error occurred: {e}")
        raise