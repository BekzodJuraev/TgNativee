from django.contrib import admin
from .models import Chanel,Add_userbot,Add_Sponsors,Feedback,FAQ,Confirmation_code
from accounts.models import Add_chanel
from django import forms
#

@admin.register(Confirmation_code)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['code','phone_hash']
    list_display_links = ['phone_hash']

@admin.register(FAQ)
class ChanelAdmin(admin.ModelAdmin):
    list_display = ['question','answers']

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

    def save_model(self, request, obj, form, change):
        # Access the confirmation_code field value from the form
        confirmation_code = form.cleaned_data.get('confirmation_code')

        # Do something with the confirmation_code, e.g., save it to the model
        obj.confirmation_code = confirmation_code

        # Call the original save_model method to save the model instance
        super().save_model(request, obj, form, change)

admin.site.register(Add_userbot, AddUserbotAdmin)

@admin.register(Add_Sponsors)
class Add_Sponsors(admin.ModelAdmin):
    list_display = ['name','created_at']

@admin.register(Feedback)
class Feedback(admin.ModelAdmin):
    list_display = ['name','created_at']

