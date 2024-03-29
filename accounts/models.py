from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import Permission
from django.contrib.auth.models import AbstractUser, UserManager, Permission
from phonenumber_field.modelfields import PhoneNumberField
import pytz





class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    content = models.TextField()
    message=models.ForeignKey("Add_Reklama",on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender.username} to {self.receiver.username}: {self.content}"


class Profile(models.Model):
    username=models.OneToOneField(User,on_delete=models.CASCADE,related_name='profile')
    phone_number = PhoneNumberField()
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150)
    email=models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    currency=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)
    photo=models.ImageField()
    is_online = models.BooleanField(default=False)
    last_visited = models.DateTimeField(auto_now=True)
    timezone = models.CharField(max_length=63, choices=[(tz, tz) for tz in pytz.all_timezones], default='UTC')

    def save(self, *args, **kwargs):
        # Update the associated User's email before saving
        self.username.email = self.email
        self.username.save()
        super().save(*args, **kwargs)




    def __str__(self):
        return self.username.username
class Profile_advertiser(models.Model):
    username=models.OneToOneField(User,on_delete=models.CASCADE,related_name='profile_advertisers')
    phone_number = PhoneNumberField()
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150)
    email=models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    currency=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)
    photo=models.ImageField()
    is_online = models.BooleanField(default=False)
    last_visited = models.DateTimeField(auto_now=True)
    timezone = models.CharField(max_length=63, choices=[(tz, tz) for tz in pytz.all_timezones], default='UTC')


    def __str__(self):
        return self.username.username

    def save(self, *args, **kwargs):
        # Update the associated User's email before saving
        self.username.email = self.email
        self.username.save()
        super().save(*args, **kwargs)


class Add_chanel(models.Model):
    username = models.ForeignKey(Profile, on_delete=models.CASCADE,related_name='profile')
    category=models.ForeignKey('Category_chanels',on_delete=models.CASCADE)

    chanel_link = models.CharField(max_length=150)
    description=models.TextField()






    def __str__(self):
        return self.username.username.username

class Faq_Question(models.Model):
    question=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question


class Cost_Format(models.Model):
    add_chanel=models.ForeignKey(Add_chanel,on_delete=models.CASCADE,related_name='cost_formats')
    placement_format = models.CharField(max_length=100)
    cost_per_format = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.placement_format},{self.cost_per_format}'




class Add_Reklama(models.Model):
    from API.models import Chanel
    class Status(models.TextChoices):
        DRAFT = 'WT', 'Waiting'
        PUBLISHED = "DN", "Done"
    chanel=models.ForeignKey(Chanel,on_delete=models.CASCADE)
    format=models.ForeignKey(Cost_Format,on_delete=models.CASCADE)
    user_order=models.ForeignKey(Profile_advertiser,on_delete=models.CASCADE,null=True)
    text_ads=models.TextField(null=True)
    media=models.ImageField(null=True,blank=True)
    name_ads = models.CharField(max_length=150,null=True)
    comment=models.TextField(null=True)
    commented=models.TextField(null=True,blank=True)
    order_data=models.DateTimeField(null=True,blank=True)
    aprove = models.BooleanField(default=False)
    status = models.CharField(max_length=2, choices=Status.choices,
                              default=Status.DRAFT)


    def __str__(self):
        return self.chanel.name






class Category_chanels(models.Model):
    name=models.CharField(max_length=150)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Like(models.Model):
    from API.models import Chanel
    username=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    chanel_name=models.ForeignKey(Chanel,on_delete=models.CASCADE,null=True)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username.username



