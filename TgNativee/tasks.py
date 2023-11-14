from celery import shared_task
from django.utils import timezone
from .celery import app
import logging
import telegram
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"
bot_telegram = telegram.Bot(token=BOT_TOKEN)

logger = logging.getLogger(__name__)
@app.task
def send_scheduled_ads():
    try:
        now = timezone.now()
        logger.info("Task executed at: %s", now)

        bot_telegram.sendMessage('@lsbnvVm9TmhjZDNi', "Hello")
        logger.info("Message sent successfully.")
    except Exception as e:
        logger.error(f"Error in send_scheduled_ads: {e}")
