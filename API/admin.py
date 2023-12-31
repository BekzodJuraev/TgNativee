from django.contrib import admin
from .models import Chanel,Add_userbot,Add_Sponsors,Feedback
from accounts.models import Add_chanel
from django import forms
# Register your models here.
@admin.register(Chanel)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['username','subscribers','chanel_link','views']

    list_display_links = ['chanel_link']

class AddUserbotAdminForm(forms.ModelForm):
    confirmation_code = forms.CharField(
        label="Entered Confirmation Code",
        required=False,
        widget=forms.TextInput(attrs={'placeholder': 'Enter confirmation code'}),
    )

    class Meta:
        model = Add_userbot
        fields = '__all__'



class AddUserbotAdmin(admin.ModelAdmin):
    form = AddUserbotAdminForm
    list_display = ('name', 'api_id', 'api_hash', 'phone_number')

admin.site.register(Add_userbot, AddUserbotAdmin)

@admin.register(Add_Sponsors)
class Add_Sponsors(admin.ModelAdmin):
    list_display = ['name','created_at']

@admin.register(Feedback)
class Feedback(admin.ModelAdmin):
    list_display = ['name','created_at']

