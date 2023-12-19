from .models import Profile,Profile_advertiser,Add_chanel,Add_Reklama
from API.models import Chanel,Add_userbot
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.utils import timezone
from celery import shared_task
import telegram
import asyncio
from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.contrib.auth.models import User
from .bot import BOT_TOKEN,bot_telegram,Client, message_handler, update,run_userbot
from .tasks import send_telegram_message,process_user_bot,add_chanel
timezone_from_settings = timezone.get_current_timezone()
from datetime import timedelta

# Use the timezone
@receiver(user_logged_in)
def user_logged_in_handler(sender, request, user, **kwargs):
    if hasattr(user, 'profile'):
        user.profile.is_online = True
        user.profile.last_visited = timezone.now()
        user.profile.save()

    if hasattr(user, 'profile_advertisers'):
        user.profile_advertisers.is_online = True
        user.profile_advertisers.last_visited = timezone.now()
        user.profile_advertisers.save()

@receiver(user_logged_out)
def user_logged_out_handler(sender, request, user, **kwargs):
    if hasattr(user, 'profile'):
        user.profile.is_online = False
        user.profile.save()

    if hasattr(user, 'profile_advertisers'):
        user.profile_advertisers.is_online = False
        user.profile_advertisers.save()

@receiver(post_save,sender=User)
def create_profile_for_user(sender,instance,created,*args,**kwargs):
    if created:
        order = getattr(instance, 'order', 'reklama')  # Get 'order' attribute or default to 'reklama'

        if order == 'admin':
            Profile.objects.create(username=instance, first_name=instance.username, last_name=instance.last_name,email=instance.email,phone_number=instance.phone_number)
        elif order == 'reklama':
            Profile_advertiser.objects.create(username=instance, first_name=instance.username, last_name=instance.last_name,email=instance.email,phone_number=instance.phone_number)
@receiver(post_save,sender=Add_chanel)
def create_chanel(sender,instance,created,*args,**kwargs):
    if created:


        add_chanel.delay(instance.chanel_link)

        #bot_telegram.sendMessage(chat_id=Bekzod, text=instance.chanel_link)

        Chanel.objects.create(username=instance.username,add_chanel=instance,chanel_link=instance.chanel_link,subscribers=0,views=0,)

@receiver(post_save, sender=Add_Reklama)
def execute_code_on_published(sender, instance, created, **kwargs):
    if not created and instance.status == Add_Reklama.Status.PUBLISHED:
        send_telegram_message.apply_async(args=[instance.id], eta=instance.order_data)

@receiver(post_save, sender=Add_userbot)
def handle_new_userbot(sender, instance,created, **kwargs):
    if created:
        # Ensure that the instance is saved with the provided phone number


        # Schedule the Celery task after the instance is saved
        process_user_bot.delay(
            name=instance.name,
            api_id=instance.api_id,
            api_hash=instance.api_hash,
            phone=instance.phone_number
        )

    #process_user_bot.delay(name=instance.name,api_id=instance.api_id,api_hash=instance.api_hash,phone=instance.phone_number)
   # client = Client(name=instance.name,api_id=instance.api_id,api_hash=instance.api_hash,phone_number=instance.phone_number)













