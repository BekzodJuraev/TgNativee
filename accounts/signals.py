from .models import Profile,Profile_advertiser
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User
@receiver(post_save,sender=User)
def create_profile_for_user(sender,instance,created,*args,**kwargs):
    if created:
        order = instance.order
        if order == 'admin':
            Profile.objects.create(username=instance)
        elif order == 'reklama':
            Profile_advertiser.objects.create(username=instance)