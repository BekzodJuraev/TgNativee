from .models import Profile
from django.db.models.signals import post_save,pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User
@receiver(post_save,sender=User)
def create_profile_for_user(sender,instance,created,*args,**kwargs):
    if created:
        profile=Profile.objects.create(username=instance)
        print("Created account")
    else:
        print("Not Created")