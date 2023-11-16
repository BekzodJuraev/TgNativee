from .models import Profile,Profile_advertiser,Add_chanel,Add_Reklama
from API.models import Chanel
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.utils import timezone
import telegram
from django.contrib.auth.models import User
from .bot import BOT_TOKEN,bot_telegram

timezone_from_settings = timezone.get_current_timezone()

# Use the timezone
current_time = timezone.now()
current_time_in_timezone = current_time.astimezone(timezone_from_settings)

Bekzod = "531080457"
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

        bot_telegram.sendMessage(chat_id=Bekzod, text=instance.chanel_link)
        Chanel.objects.create(username=instance.username,add_chanel=instance,chanel_link=instance.chanel_link,subscribers=0,views=0,)

@receiver(post_save, sender=Add_Reklama)
def send_telegram_message(sender, instance, **kwargs):

    if instance.status == Add_Reklama.Status.PUBLISHED and instance.order_data <= timezone.now():

        bot_telegram.sendMessage(chat_id=Bekzod, text=f'time:{instance.order_data}')

        #SendTelegramMessageCronJob().do()
