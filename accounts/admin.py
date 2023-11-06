from django.contrib import admin
from .models import Profile,Profile_advertiser
@admin.register(Profile)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']
@admin.register(Profile_advertiser)
class ChanelAdvertiser(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']
