from django import forms
from .models import Add_chanel,Cost_Format,Add_Reklama,Category_chanels,Profile_advertiser,Profile
from django.contrib.auth.models import User
from django.forms import formset_factory
from django.contrib.auth.forms import UserCreationForm
from django.forms.models import inlineformset_factory
from phonenumber_field.formfields import PhoneNumberField


class BaseUpdateForm(forms.ModelForm):
    email = forms.EmailField(max_length=63, label="Логин",
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'leonid.nsl@gmail.com'}))
    phone_number = PhoneNumberField(max_length=63, required=True, label="email",
                                    widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': '+380'}))

    photo = forms.ImageField(
        required=False,
        widget=forms.FileInput(attrs={'id': 'photoInput', 'style': 'display: none;'})
    )


    class Meta:
        fields = ['email', 'phone_number', 'photo']


class Update_Profile(BaseUpdateForm):
    class Meta(BaseUpdateForm.Meta):
        model=Profile

class Update_Reklama(BaseUpdateForm):
    class Meta(BaseUpdateForm.Meta):
        model=Profile_advertiser

class BasketForm(forms.ModelForm):
    class Meta:
        model = Add_Reklama
        fields = ['name_ads', 'text_ads', 'media', 'comment']











class Add_ReklamaStatus(forms.ModelForm):
    class Meta:
        model = Add_Reklama
        fields = ['chanel', 'text_ads', 'media', 'name_ads', 'comment', 'order_data','status']


class AddChanelForm(forms.ModelForm):
    chanel_link=forms.CharField(max_length=63,label="Линк",widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Добавить ссылку'}))
    category = forms.ModelChoiceField(
        queryset=Category_chanels.objects.all(),  # Adjust this queryset based on your actual model
        label="Линк",
        widget=forms.Select(attrs={'class': 'form-control', 'placeholder': 'Добавить канал'})
    )
    description = forms.CharField(
        max_length=63,
        label="Линк",
        widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Описание'})
    )
    class Meta:
        model = Add_chanel
        fields = [ 'chanel_link', 'category','description']

class CostFormatForm(forms.ModelForm):
    placement_format = forms.CharField(max_length=63, label="Линк", widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Формат'}))
    cost_per_format = forms.DecimalField(
        max_digits=10,
        decimal_places=2,
        label="Линк",
        widget=forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'Цена'})
    )
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
        widget=forms.RadioSelect(attrs={'class': 'form-check-input'}),
        choices=CHOICES,
        label=""
    )
    username = forms.CharField(max_length=63,label="Логин",widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Логин'}))

    password = forms.CharField(max_length=63, widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Пароль'}),label="Пароль")




class RegistrationForm(UserCreationForm):
    CHOICES = [
        ('admin', 'Я администратор'),
        ('reklama', 'Я рекламодатель'),
    ]
    order = forms.ChoiceField(
        widget=forms.RadioSelect(attrs={'class': 'form-check-input'}),
        choices=CHOICES,
        label=""
    )
    username = forms.CharField(max_length=63, label="Логин",
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Имя'}))
    last_name = forms.CharField(max_length=63, label="Логин",
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Фамилия'}))



    password1 = forms.CharField(max_length=63, widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Пароль'}),label="Пароль")

    email = forms.EmailField(max_length=63,required=True, label="email",
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ваш email'}))
    phone_number = PhoneNumberField(max_length=63,required=True, label="email",
                               widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': '+380'}))

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['password2'].required = False

    def clean_password2(self):
        # Bypass password confirmation check
        return self.cleaned_data.get('password1')



    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("This email address is already registered. Please use a different one.")
        return email

    class Meta:
        model=User
        fields = ['order','last_name','username', 'email', 'password1', 'phone_number']


    def save(self, commit=True):
        user = super().save(commit=False)
        user.order = self.cleaned_data.get('order')
        if commit:
            user.save()
        return user



