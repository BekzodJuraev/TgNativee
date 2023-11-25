from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import Permission
from django.contrib.auth.models import AbstractUser, UserManager, Permission
from phonenumber_field.modelfields import PhoneNumberField
class Profile(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE)
    phone_number = PhoneNumberField()
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150)
    email=models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    currency=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)
    photo=models.ImageField()




    def __str__(self):
        return self.username.username
class Profile_advertiser(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE)
    phone_number = PhoneNumberField()
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150)
    email=models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    currency=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)
    photo=models.ImageField()


    def __str__(self):
        return self.username.username


class Add_chanel(models.Model):
    username = models.ForeignKey(Profile, on_delete=models.CASCADE)
    category=models.ForeignKey('Category_chanels',on_delete=models.CASCADE)

    chanel_link = models.CharField(max_length=150)
    description=models.TextField()






    def __str__(self):
        return self.username.username.username




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
    order_data=models.DateTimeField(null=True)
    status = models.CharField(max_length=2, choices=Status.choices,
                              default=Status.DRAFT)


    def __str__(self):
        return self.name_ads






class Category_chanels(models.Model):
    name=models.CharField(max_length=150)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

