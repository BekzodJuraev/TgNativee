from django.contrib import admin
from .models import Chanel,Add_userbot
from accounts.models import Add_chanel
# Register your models here.
@admin.register(Chanel)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','subscribers','chanel_link','views']

    list_display_links = ['chanel_link']
@admin.register(Add_userbot)
class Add_Userbot(admin.ModelAdmin):
    list_display = ['name','api_id','api_hash',]

