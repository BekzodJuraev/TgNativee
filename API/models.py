from django.db import models
from accounts.models import Add_chanel

class Chanel(models.Model):
    chanel_link=models.CharField(max_length=150)
    name=models.CharField(max_length=150,verbose_name="Називание канала")
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
        ordering=['created_at']




