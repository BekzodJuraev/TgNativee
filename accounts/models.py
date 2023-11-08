from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE)
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
    chanel_link = models.CharField(max_length=150)

    def __str__(self):
        return self.username.username.username











