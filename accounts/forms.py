from django import forms
from .models import Add_chanel
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
class ChaneladdForm(forms.ModelForm):
    class Meta:
        model=Add_chanel
        fields=['chanel_link']





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



