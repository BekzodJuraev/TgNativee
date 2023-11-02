from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    username=models.CharField(max_length=150)
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150)
    email=models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    currency=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)
    photo=models.ImageField()


    def __str__(self):
        return self.username




