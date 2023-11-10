from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.http import HttpResponse
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.db.models import Sum
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from .forms import LoginForm,RegistrationForm,AddChanelForm,CostFormatFormSet
from API.models import Chanel
from .models import Profile,Profile_advertiser,Add_chanel

from django.views.generic import ListView, CreateView, UpdateView, DeleteView,TemplateView


def login_page(request):
    next = request.GET.get('next')
    form = LoginForm(request.POST or None)
    #logout(request)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        order=form.cleaned_data.get('order')

        user = authenticate(username=username, password=password)

        if user is not None:
            if order=="reklama":
                login(request, user)
                if next:
                    return redirect(next)
                return redirect('login_reklama')
            elif order=="admin":
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



class CreateChanel(LoginRequiredMixin,CreateView):
    template_name='create.html'
    form_class=AddChanelForm
    success_url = reverse_lazy('logging')
    login_url = reverse_lazy('login')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.POST:
            context['cost_format_formset'] = CostFormatFormSet(self.request.POST, prefix='cost_formats')
        else:
            context['cost_format_formset'] = CostFormatFormSet(prefix='cost_formats')
        return context

    def dispatch(self, request, *args, **kwargs):
        if not Profile.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            return HttpResponse("You do not have access to this page.")
        return super().dispatch(request, *args, **kwargs)





    def form_valid(self, form):
        context = self.get_context_data()
        cost_format_formset = context['cost_format_formset']
        profile = Profile.objects.get(username=self.request.user)
        form.instance.username_id = profile.id
        if cost_format_formset.is_valid():
            self.object = form.save()
            cost_format_formset.instance = self.object
            cost_format_formset.save()
            return super().form_valid(form)
        else:

            return self.form_invalid(form)


class AviatorView(LoginRequiredMixin,ListView):
    model = Chanel
    template_name = 'aviator.html'
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context=super().get_context_data(**kwargs)
         # Get all related CostFormat objects
        # chanel_objects = Chanel.objects.select_related('add_chanel')
        #print(chanel_objects)
        #add_chanel_objects = Add_chanel.objects.prefetch_related('cost_formats')
        #print(add_chanel_objects)

        context['reklama'] = Chanel.objects.all().filter(username=self.request.user)
        context['lists']=Chanel.objects.all().count()
        context['count']= Chanel.objects.select_related('add_chanel').prefetch_related('add_chanel__cost_formats')
        context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        context['user'] = Profile.objects.get(username=self.request.user)
        return context
class ProfileView(LoginRequiredMixin,ListView):
    model = Chanel
    template_name = 'Profile_reklama.html'
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context=super().get_context_data(**kwargs)
        context['lists']=Chanel.objects.all().count()
        context['count']=Chanel.objects.all()
        context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        context['user']=Profile_advertiser.objects.get(username=self.request.user)
        return context



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
            print(form)

            form.save()
            return JsonResponse({'success': "good"})
        else:
            print(form)

            return JsonResponse({'success': False, 'errors': form.errors})
    return JsonResponse({'success': False})