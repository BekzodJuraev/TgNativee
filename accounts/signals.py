from .models import Profile,Profile_advertiser,Add_chanel
from API.models import Chanel
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver

import telegram
from django.contrib.auth.models import User
BOT_TOKEN="6782469164:AAG9NWxQZ2mPx5I9U7E3QX3HgbhU5MYr6Z4"

bot_telegram = telegram.Bot(token=BOT_TOKEN)
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

