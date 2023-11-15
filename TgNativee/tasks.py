from celery import shared_task
from django.utils import timezone
from .celery import app
import logging
import telegram
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"
bot_telegram = telegram.Bot(token=BOT_TOKEN)
#a=bot_telegram.sendMessage('531080457', "Hello")
logger = logging.getLogger(__name__)
@shared_task()
def send_scheduled_ads():
    bot_telegram.sendMessage('531080457', "Good")






