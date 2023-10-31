from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from .forms import LoginForm,RegistrationForm
from API.models import Chanel

from django.views.generic import ListView, CreateView, UpdateView, DeleteView,TemplateView
def login_page(request):
    next = request.GET.get('next')
    form = LoginForm(request.POST or None)
    #logout(request)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            if next:
                return redirect(next)
            return redirect('logging')
        else:
            return redirect('login')






    context = {
        'form': form,
    }


    return render(request, "login.html", context)




class AviatorView(LoginRequiredMixin,ListView):
    model = Chanel
    template_name = 'aviator.html'
    login_url = reverse_lazy('login')



def register_page(request):

    form = RegistrationForm()
    context = {
        'form': form
    }
    return render(request, 'register.html', context)


def create(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)

        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    return JsonResponse({'success': False})