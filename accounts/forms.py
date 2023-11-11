from django import forms
from .models import Add_chanel,Cost_Format,Add_Reklama
from django.contrib.auth.models import User
from django.forms import formset_factory
from django.contrib.auth.forms import UserCreationForm
from django.forms.models import inlineformset_factory
class Add_ReklamaForm(forms.ModelForm):
    matching_formats = forms.ModelChoiceField(

        queryset=Cost_Format.objects.filter(add_chanel=26),  # You may want to filter this queryset based on your specific needs
        label='Matching Formats',
        required=False,
    )
    class Meta:
        model=Add_Reklama
        fields=['chanel','matching_formats','text_ads','media','name_ads','comment','order_data']





    def save(self, commit=True):
        # Get the selected matching format
        selected_format = self.cleaned_data.get('matching_formats')

        # Create an Add_Reklama instance without saving it yet
        instance = super().save(commit=False)

        # Set the format field to the selected matching format
        instance.format = selected_format

        if commit:
            instance.save()

        return instance
class Add_ReklamaStatus(forms.ModelForm):
    class Meta:
        model = Add_Reklama
        fields = ['chanel', 'text_ads', 'media', 'name_ads', 'comment', 'order_data','status']


class AddChanelForm(forms.ModelForm):
    class Meta:
        model = Add_chanel
        fields = [ 'chanel_link', 'description']

class CostFormatForm(forms.ModelForm):
    class Meta:
        model = Cost_Format
        fields = ['placement_format', 'cost_per_format']



CostFormatFormSet = inlineformset_factory(Add_chanel, Cost_Format, form=CostFormatForm, extra=2, can_delete=False,validate_max=True)


class LoginForm(forms.Form):
    CHOICES = [
        ('admin', 'Я администратор'),
        ('reklama', 'Я рекламодатель'),
    ]
    order = forms.ChoiceField(
        widget=forms.RadioSelect,
        choices=CHOICES,
        label=""
    )
    username = forms.CharField(max_length=63,label="Логин")
    password = forms.CharField(max_length=63, widget=forms.PasswordInput,label="Пароль")



class RegistrationForm(UserCreationForm):
    CHOICES = [
        ('admin', 'Я администратор'),
        ('reklama', 'Я рекламодатель'),
    ]
    order = forms.ChoiceField(
        widget=forms.RadioSelect,
        choices=CHOICES,
        label=""
    )
    username = forms.CharField(max_length=63, label='Придумайте логин')
    password1 = forms.CharField(max_length=63, widget=forms.PasswordInput, label='Придумайте пароль')
    password2 = forms.CharField(max_length=63, widget=forms.PasswordInput, label='Повторите Пароль')
    email = forms.EmailField(label='Ввидите E-mail ',required=True )


    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("This email address is already registered. Please use a different one.")
        return email

    class Meta:
        model=User
        fields = ['order','username', 'email', 'password1', 'password2']
        error_messages = {
            'password_mismatch': "The two password fields didn't match.",
        }

    def save(self, commit=True):
        user = super().save(commit=False)
        user.order = self.cleaned_data.get('order')
        if commit:
            user.save()
        return user



