from .models import Profile,Profile_advertiser,Add_chanel,Add_Reklama
from API.models import Chanel,Add_userbot
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.utils import timezone
import telegram
import asyncio
from django.contrib.auth.models import User
from .bot import BOT_TOKEN,bot_telegram,Client, message_handler, update,run_userbot
from .tasks import send_telegram_message
timezone_from_settings = timezone.get_current_timezone()
from datetime import timedelta

# Use the timezone
Bekzod = "531080457"

@receiver(post_save,sender=User)
def create_profile_for_user(sender,instance,created,*args,**kwargs):
    if created:
        order = instance.order
        if order == 'admin':
            Profile.objects.create(username=instance,first_name=instance.username,last_name=instance.last_name)
        elif order == 'reklama':
            Profile_advertiser.objects.create(username=instance,first_name=instance.username,last_name=instance.last_name)
@receiver(post_save,sender=Add_chanel)
def create_chanel(sender,instance,created,*args,**kwargs):
    if created:
        bot_telegram.sendMessage(chat_id=Bekzod, text=instance.chanel_link)

        Chanel.objects.create(username=instance.username,add_chanel=instance,chanel_link=instance.chanel_link,subscribers=0,views=0,)

@receiver(post_save, sender=Add_Reklama)
def execute_code_on_published(sender, instance, created, **kwargs):
    if not created and instance.status == Add_Reklama.Status.PUBLISHED:
        send_telegram_message.apply_async(args=[instance.id], eta=instance.order_data)

@receiver(post_save, sender=Add_userbot)
def handle_new_userbot(sender, instance, **kwargs):
    pass



