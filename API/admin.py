from django.contrib import admin
from .models import Chanel
from accounts.models import Add_chanel
# Register your models here.
@admin.register(Chanel)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['name','subscribers','chanel_link','views']
    raw_id_fields = ['chanel']
    list_display_links = ['chanel_link']
