from django.db import models

class Chanel(models.Model):
    name=models.CharField(max_length=150,verbose_name="Називание канала")
    pictures=models.ImageField(verbose_name='Лого')
    subscribers=models.IntegerField()
    created_at=models.DateTimeField(auto_now_add=True)




    def __str__(self):
        return self.name

    class Meta:
        verbose_name="Канал"
        verbose_name_plural="Канал"
        ordering=['created_at']




