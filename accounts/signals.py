from .models import Profile,Profile_advertiser,Add_chanel
from API.models import Chanel
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver

from .bot import client,run_userbot
from django.contrib.auth.models import User

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
        client.send_message('@lsbnvVm9TmhjZDNi', "Hello guys")
        Chanel.objects.create(username=instance.username,add_chanel=instance,chanel_link=instance.chanel_link,subscribers=0,views=0,)

