from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
class LoginForm(forms.Form):
    username = forms.CharField(max_length=63,label="Логин")
    password = forms.CharField(max_length=63, widget=forms.PasswordInput,label="Пароль")



class RegistrationForm(UserCreationForm):
    username = forms.CharField(max_length=63, label='Придумайте логин')
    password1 = forms.CharField(max_length=63, widget=forms.PasswordInput, label='Придумайте пароль')
    password2 = forms.CharField(max_length=63, widget=forms.PasswordInput, label='Повторите Пароль')
    email = forms.EmailField(label='Ввидите E-mail ',required=True )

    class Meta:
        model=User
        fields = ['username', 'email', 'password1', 'password2']




