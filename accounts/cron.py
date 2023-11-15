from django_cron import CronJobBase, Schedule
from django.utils import timezone
from .models import Add_Reklama
from .bot import BOT_TOKEN
import telegram
import logging

logger = logging.getLogger(__name__)
bot_telegram = telegram.Bot(token=BOT_TOKEN)

class SendTelegramMessageCronJob(CronJobBase):
    run_every = 1
    schedule = Schedule(run_every_mins=run_every)
    # Specify the time(s) you want to run the cron job


    code = 'accounts.cron.SendTelegramMessageCronJob'  # Unique identifier for the cron job

    def do(self):
        logger.info("Executing SendTelegramMessageCronJob")
        for instance in Add_Reklama.objects.filter(status=Add_Reklama.Status.PUBLISHED):
            print('hello')
            # Send the message to Telegram
            bot_telegram.sendMessage('@lsbnvVm9TmhjZDNi', "Good")