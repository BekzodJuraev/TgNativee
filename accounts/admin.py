from django.contrib import admin
from .models import Profile
@admin.register(Profile)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','balance']