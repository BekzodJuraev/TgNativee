from django.db import models
from accounts.models import Add_chanel

class Chanel(models.Model):
    chanel_link=models.CharField(max_length=150)
    name=models.CharField(max_length=150,verbose_name="Называние канала")
    pictures=models.ImageField(verbose_name='Лого')
    subscribers=models.IntegerField()
    views=models.IntegerField()
    created_at=models.DateTimeField(auto_now_add=True)
    add_chanel =models.ForeignKey(Add_chanel, on_delete=models.CASCADE)
    username=models.CharField(max_length=150)




    def __str__(self):
        return self.name

    class Meta:
        verbose_name="Канал"
        verbose_name_plural="Канал"
        ordering=['-subscribers']




class Add_userbot(models.Model):
    name=models.CharField(max_length=100)
    api_id=models.IntegerField()
    api_hash=models.CharField(max_length=100)
    session=models.TextField()
    created=models.DateTimeField(auto_now_add=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    confirmation_code = models.CharField(max_length=6, blank=True, null=True)

    def __str__(self):
        return self.name

class Add_Sponsors(models.Model):
    name = models.CharField(max_length=150, verbose_name="Название спонсора")
    pictures = models.ImageField(verbose_name='Лого')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Feedback(models.Model):
    name = models.CharField(max_length=150, verbose_name="Клиент")
    company_name = models.CharField(max_length=150, verbose_name="Название")
    feedback=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.company_name




