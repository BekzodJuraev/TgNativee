from .models import Profile,Profile_advertiser,Add_chanel,Add_Reklama
from API.models import Chanel
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.utils import timezone
import telegram
from django.contrib.auth.models import User
from .bot import BOT_TOKEN,bot_telegram
from .tasks import send_telegram_message
timezone_from_settings = timezone.get_current_timezone()
from datetime import timedelta

# Use the timezone


@receiver(post_save,sender=User)
def create_profile_for_user(sender,instance,created,*args,**kwargs):
    if created:
        order = instance.order
        if order == 'admin':
            Profile.objects.create(username=instance)
        elif order == 'reklama':
            Profile_advertiser.objects.create(username=instance)
@receiver(post_save,sender=Add_chanel)
def create_chanel(sender,instance,created,*args,**kwargs):
    if created:

        Chanel.objects.create(username=instance.username,add_chanel=instance,chanel_link=instance.chanel_link,subscribers=0,views=0,)

@receiver(post_save, sender=Add_Reklama)
def execute_code_on_published(sender, instance, created, **kwargs):
    if not created and instance.status == Add_Reklama.Status.PUBLISHED:
        send_telegram_message.apply_async(args=[instance.id], eta=instance.order_data)