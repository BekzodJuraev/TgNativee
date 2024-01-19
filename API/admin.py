from django.contrib import admin
from .models import Chanel,Add_userbot,Add_Sponsors,Feedback,FAQ,Add_telegrambot
from accounts.models import Add_chanel
from django import forms
#


@admin.register(Add_telegrambot)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['token','created_at']
@admin.register(FAQ)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['question','answers']

@admin.register(Chanel)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','subscribers','chanel_link','views']

    list_display_links = ['chanel_link']




class AddUserbotAdmin(admin.ModelAdmin):
    list_display = ('name', 'api_id', 'api_hash', 'phone_number','is_active')



admin.site.register(Add_userbot, AddUserbotAdmin)

@admin.register(Add_Sponsors)
class Add_Sponsors(admin.ModelAdmin):
    list_display = ['name','created_at']

@admin.register(Feedback)
class Feedback(admin.ModelAdmin):
    list_display = ['name','created_at']

