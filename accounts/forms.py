from django import forms
from .models import Add_chanel,Cost_Format,Add_Reklama,Category_chanels,Profile_advertiser,Profile
from django.contrib.auth.models import User
from django.forms import formset_factory
from django.contrib.auth.forms import UserCreationForm
from django.forms.models import inlineformset_factory
from phonenumber_field.formfields import PhoneNumberField
import pytz


class BaseUpdateForm(forms.ModelForm):
    email = forms.EmailField(max_length=63, label="Логин",
                               widget=forms.TextInput(attrs={'class': 'form__input', 'placeholder': 'leonid.nsl@gmail.com'}))
    phone_number = PhoneNumberField(max_length=63, required=True, label="email",
                                    widget=forms.TextInput(attrs={'class': 'form__input', 'placeholder': '+380'}))

    photo = forms.ImageField(
        required=False,
        widget=forms.FileInput(attrs={'id': 'photoInput', 'style': 'display: none;'})
    )
    timezone = forms.ChoiceField(
        choices=[(tz, tz) for tz in pytz.all_timezones],
        widget=forms.Select(attrs={'placeholder': 'Часовой пояс', 'id': 'time', 'data-class-modif': 'custom-select'})
    )


    class Meta:
        fields = ['email', 'phone_number', 'photo','timezone']


class Update_Profile(BaseUpdateForm):
    class Meta(BaseUpdateForm.Meta):
        model=Profile

class Update_Reklama(BaseUpdateForm):
    class Meta(BaseUpdateForm.Meta):
        model=Profile_advertiser

class BasketForm(forms.ModelForm):

    text_ads=forms.CharField(max_length=63,label="Линк",widget=forms.Textarea(attrs={'class': 'item-cart-public__textarea', 'placeholder': 'Текст.....'}))
    name_ads = forms.CharField(max_length=63, label="Линк",widget=forms.TextInput(attrs={'class': 'auth-form__input', 'placeholder': 'Проект'}))
    comment=forms.CharField(max_length=63,label="Линк",widget=forms.Textarea(attrs={'class': 'item-cart-public__textarea'}))
    media = forms.ImageField(
        required=False,
        widget=forms.FileInput(attrs={'id': 'photoInput', 'style': 'display: none;'})
    )
    class Meta:
        model = Add_Reklama
        fields = ['name_ads', 'text_ads', 'media', 'comment']











class Add_ReklamaStatus(forms.ModelForm):
    status=forms.ChoiceField(
        choices=Add_Reklama.Status.choices,
        widget=forms.Select(attrs={'class': 'auth-form__input', 'placeholder': 'Статус'})
    )
    class Meta:
        model = Add_Reklama
        fields = ['status']


class AddChanelForm(forms.ModelForm):
    chanel_link=forms.CharField(max_length=63,label="Линк",widget=forms.TextInput(attrs={'class': 'auth-form__input', 'placeholder': 'Добавить ссылку'}))
    category = forms.ModelChoiceField(
        queryset=Category_chanels.objects.all(),  # Adjust this queryset based on your actual model
        label="Линк",
        empty_label="Категория",
        widget=forms.Select(attrs={'class': 'auth-form__input', 'placeholder': 'Категория'})
    )
    description = forms.CharField(
        max_length=63,
        label="Линк",
        widget=forms.Textarea(attrs={'class': 'auth-form__input', 'placeholder': 'Описание'})
    )
    class Meta:
        model = Add_chanel
        fields = [ 'chanel_link', 'category','description']

class CostFormatForm(forms.ModelForm):
    placement_format = forms.CharField(max_length=63, label="Линк", widget=forms.TextInput(
        attrs={'class': 'auth-form__input', 'placeholder': 'Формат'}))
    cost_per_format = forms.DecimalField(
        max_digits=10,
        decimal_places=2,
        label="Линк",
        widget=forms.NumberInput(attrs={'class': 'auth-form__input', 'placeholder': 'Цена'})
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
        widget=forms.RadioSelect(attrs={'class': 'checkbox__input checkbox__input_oval'}),
        choices=CHOICES,
        label=""
    )
    username = forms.CharField(max_length=63,label="Логин",widget=forms.TextInput(attrs={'class': 'auth-form__input', 'placeholder': 'Логин'}))

    password = forms.CharField(max_length=63, widget=forms.PasswordInput(attrs={'class': 'auth-form__input', 'placeholder': 'Пароль'}),label="Пароль")




class RegistrationForm(UserCreationForm):
    CHOICES = [
        ('admin', 'Я администратор'),
        ('reklama', 'Я рекламодатель'),
    ]
    order = forms.ChoiceField(
        widget=forms.RadioSelect(attrs={'class': 'checkbox__input checkbox__input_oval'}),
        choices=CHOICES,
        label=""
    )
    username = forms.CharField(max_length=63, label="Логин",
                               widget=forms.TextInput(attrs={'class': 'auth-form__input', 'placeholder': 'Имя'}))




    password1 = forms.CharField(max_length=63, widget=forms.PasswordInput(attrs={'class': 'auth-form__input', 'placeholder': 'Пароль'}),label="Пароль")

    email = forms.EmailField(max_length=63,required=True, label="email",
                               widget=forms.TextInput(attrs={'class': 'auth-form__input', 'placeholder': 'Ваш email'}))
    phone_number = PhoneNumberField(max_length=63,required=True, label="email",
                               widget=forms.TextInput(attrs={'class': 'auth-form__input', 'id':'phone','placeholder': '+380'}))

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
        fields = ['order','username', 'email', 'password1', 'phone_number']


    def save(self, commit=True):
        user = super().save(commit=False)
        user.order = self.cleaned_data.get('order')
        user.phone_number=self.cleaned_data.get('phone_number')

        if commit:
            user.save()
        return user



