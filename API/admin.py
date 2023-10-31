from django.contrib import admin
from .models import Chanel
# Register your models here.
@admin.register(Chanel)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['name','subscribers']
