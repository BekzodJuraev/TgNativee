from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.http import HttpResponse
import telegram
from django.db.models import Count

from .bot import BOT_TOKEN
from django.utils import timezone
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.db.models import Sum
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from .forms import LoginForm, RegistrationForm, AddChanelForm, CostFormatFormSet, BasketForm, Add_ReklamaStatus, \
    Update_Profile, Update_Reklama
from API.models import Chanel, Feedback, Add_Sponsors,FAQ
from .models import Profile, Profile_advertiser, Add_chanel, Add_Reklama, Category_chanels, Cost_Format,Like
from django.contrib.auth import logout
from django.views.generic import View,ListView, CreateView, UpdateView, DeleteView, TemplateView, DetailView


class BalancePage(LoginRequiredMixin, TemplateView):
    template_name = 'withdrawal-funds.html'
    login_url = reverse_lazy('login')


class UpdateReklama(LoginRequiredMixin, UpdateView):
    template_name = "update_reklama.html"
    model = Profile_advertiser
    form_class = Update_Reklama
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = Profile_advertiser.objects.get(username=self.request.user)
        return context

    def get_success_url(self):
        return self.request.path


class UpdateTelegram(LoginRequiredMixin, UpdateView):
    template_name = "update_telegram.html"
    model = Profile
    form_class = Update_Profile
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = Profile.objects.get(username=self.request.user)
        return context

    def get_success_url(self):
        return self.request.path


class Zayavka_Page(LoginRequiredMixin, TemplateView):
    template_name = 'zayavki.html'
    login_url = reverse_lazy('login')


    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)

        try:
            chanel_instances = Chanel.objects.filter(username=self.request.user)
            context['order'] = Add_Reklama.objects.filter(chanel__in=chanel_instances)
            context['count'] = Add_Reklama.objects.filter(chanel__in=chanel_instances).count()
            # Now you can use chanel_instance in your queries or operations.
        except Chanel.DoesNotExist:
            pass

        return context

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            # Redirect the user to the login page if they are not authenticated.
            return redirect(self.login_url)

        if not Profile.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            logout(request)
            return redirect(self.login_url)

        return super().dispatch(request, *args, **kwargs)


class Reklama_Page(LoginRequiredMixin, TemplateView):
    template_name = 'reklama_cabinet.html'
    login_url = reverse_lazy('login')

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            # Redirect the user to the login page if they are not authenticated.
            return redirect(self.login_url)


        if not Profile_advertiser.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            logout(request)
            return redirect('login')
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['chanel'] = Add_Reklama.objects.filter(user_order__username=self.request.user)
        context['count'] = Add_Reklama.objects.filter(user_order__username=self.request.user).count()
        return context


def logout_view(request):
    logout(request)
    return redirect('main')


class Cabinet_telegramPage(LoginRequiredMixin, TemplateView):
    template_name = 'telegram_cabinet.html'
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['chanel'] = Chanel.objects.filter(username=self.request.user)
        context['count'] = Chanel.objects.filter(username=self.request.user).count()
        try:
            chanel_instances = Chanel.objects.filter(username=self.request.user)
            context['order'] = Add_Reklama.objects.filter(chanel__in=chanel_instances)
            context['count'] = Add_Reklama.objects.filter(chanel__in=chanel_instances).count()
            # Now you can use chanel_instance in your queries or operations.
        except Chanel.DoesNotExist:
            pass

        return context

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            # Redirect the user to the login page if they are not authenticated.
            return redirect(self.login_url)

        if not Profile.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            logout(request)
            return redirect(self.login_url)

        return super().dispatch(request, *args, **kwargs)


class Page_List(DetailView):
    template_name = 'page.html'
    model = Chanel
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        channel_name = self.object.name  # Assuming 'name' is the field in Chanel model

        # Retrieve all comments related to the channel
        comments = Add_Reklama.objects.filter(chanel__name=channel_name).exclude(comment__isnull=True)

        context['user'] = self.request.user.id
        context['chanel'] = channel_name
        context['category'] = comments
        return context


class CategoryChanelPage(ListView):
    template_name = 'category.html'
    model = Chanel
    paginate_by = 6
    login_url = reverse_lazy('login')

    def get_queryset(self):
        search_query = self.request.GET.get('chanel_link')
        select_category = self.request.GET.get('selected_category')
        chanel_name = self.request.GET.get('chanel_name')
        views_from=self.request.GET.get('views_from')
        views_to=self.request.GET.get('views_to')
        subscribers_from=self.request.GET.get('subscribers_from')
        subscribers_to=self.request.GET.get('subscribers_to')
        cost_from=self.request.GET.get('cost_from')
        cost_to = self.request.GET.get('cost_to')
        queryset = Chanel.objects.all()


        if search_query:
            queryset = queryset.filter(chanel_link__icontains=search_query)

        if select_category:
            queryset = queryset.filter(add_chanel__category__name=select_category)

        if chanel_name:
            queryset = queryset.filter(name__icontains=chanel_name)

            # If no search parameters are provided, return all objects

        if views_from and views_to :
            queryset=queryset.filter(views__range=[views_from, views_to])

        if subscribers_from and subscribers_to :
            queryset=queryset.filter(subscribers__range=[subscribers_from, subscribers_to])

        if cost_from and cost_to :
            queryset = queryset.filter(add_chanel__cost_formats__cost_per_format__range=[cost_from, cost_to])




        return queryset

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['lists'] = self.get_queryset().count()
        context['count'] = Chanel.objects.select_related('add_chanel').prefetch_related('add_chanel__cost_formats')
        context['category'] = Category_chanels.objects.all()

        return context


class ListChanelPage(LoginRequiredMixin,TemplateView):
    template_name = 'listchanel.html'
    login_url = reverse_lazy('login')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        like=Like.objects.filter(username=self.request.user)
        context['count'] = like.count()
        context['last_update']=like.last()
        return context










class ContactPage(TemplateView):
    template_name = 'contact.html'


class FaqPage(ListView):
    model = FAQ
    context_object_name = 'items'
    template_name = 'faq.html'



class AboutPage(TemplateView):
    template_name = 'about.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['sponsors'] = Add_Sponsors.objects.all().order_by('-id')[:4]
        context['lists'] = Chanel.objects.all().count()
        context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        return context


class MainPage(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['feedback'] = Feedback.objects.all().order_by('-id')[:3]
        context['count'] = Chanel.objects.select_related('add_chanel').prefetch_related('add_chanel__cost_formats')
        context['lists'] = Chanel.objects.all().count()
        context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        return context


def login_page(request):
    next = request.GET.get('next')
    form = LoginForm(request.POST or None)
    logout(request)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        order = form.cleaned_data.get('order')

        user = authenticate(username=username, password=password)

        if user is not None:
            if order == "reklama":
                login(request, user)
                if next:
                    return redirect(next)
                return redirect('login_reklama')
            elif order == "admin":

                login(request, user)
                if next:
                    return redirect(next)
                return redirect('logging')

        else:
            form.add_error(None, 'Логин или пароль неверны')

    context = {
        'form': form
    }

    return render(request, "login_.html", context)


class CreateAds(LoginRequiredMixin, UpdateView):
    template_name = 'create_ads.html'
    form_class = BasketForm
    model = Add_Reklama
    success_url = reverse_lazy('login_reklama')
    login_url = reverse_lazy('login')
    context_object_name = "item"

class DeleteAds(LoginRequiredMixin,DeleteView):
    model = Add_Reklama
    login_url = reverse_lazy('login')
    success_url = reverse_lazy('login_reklama')
    context_object_name = "item"



    def delete(self, request, *args, **kwargs):
        # Delete the object
        self.object = self.get_object()
        self.object.delete()
        data = {'message': 'Item deleted successfully', 'redirect_url': self.success_url}
        return JsonResponse(data)




            # If it's a regular HTTP request, perform the default behavior (302 redirect)






class CreateChanel(LoginRequiredMixin, CreateView):
    template_name = 'Add_chanel.html'
    form_class = AddChanelForm
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

class Updatestatus(LoginRequiredMixin,UpdateView):
    model = Add_Reklama
    form_class = Add_ReklamaStatus
    template_name = 'updated_status.html'
    success_url = reverse_lazy('zayavka')
    login_url = reverse_lazy('login')

    def form_valid(self, form):
        response = super().form_valid(form)
        return response

class LikeToggleView(LoginRequiredMixin, View):
    login_url = reverse_lazy('login')  # Replace with your actual login URL

    def post(self, request, *args, **kwargs):
        chanel_name = request.POST.get('chanel_id')
        user = self.request.user
        # Check if the user already likes the channel
        like, created = Like.objects.get_or_create(username=user, chanel_name_id=chanel_name)

        if not created:
            # If the like already exists, delete it (unlike)
            like.delete()
            return JsonResponse({'liked': False})

        liked = True
        return JsonResponse({'liked': liked})


    def get(self, request, *args, **kwargs):
        user = self.request.user
        # Retrieve the liked channels for the user
        chanel_liked = Like.objects.filter(username=user).values_list('chanel_name_id', flat=True)
        # Return the list of liked channel IDs as a JsonResponse
        return JsonResponse({'liked_channels': list(chanel_liked)})








def register_page(request):
    logout(request)
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')

    else:
        form = RegistrationForm()

    context = {
        'form': form
    }

    return render(request, 'register_.html', context)


def ads_view(request):
    if request.method == 'POST':
        chanel_name = request.POST.get('chanel')
        user_order = request.POST.get('user_order')
        format = request.POST.get('format')
        order_data = request.POST.get('order_data')

        chanel = Chanel.objects.get(name=chanel_name)
        user_order_name = Profile_advertiser.objects.get(username=user_order)
        format_instance = Cost_Format.objects.get(id=format)

        # Assuming you have a Cost_Format model

        # Assuming you have a Chanel model

        # Assuming you have an Add_Reklama model
        reklama = Add_Reklama.objects.create(
            chanel=chanel,
            user_order=user_order_name,
            format=format_instance,
            order_data=order_data,
            # Add other fields as needed
        )

        success_url = reverse_lazy('updateads', kwargs={'pk': reklama.id})

        # You can return additional data in the response if needed
        data = {'redirect_url': success_url}
        return JsonResponse(data)
    # If it's not a POST request, return an error message
    data = {'error': 'Invalid request method.'}
    return JsonResponse(data, status=400)



def update_online_status(request):
    if request.method == 'POST':
        action = request.POST.get('action')

        if action == 'logout':
            if hasattr(request.user, 'profile') and request.user.profile:
                request.user.profile.is_online = False
                request.user.profile.save()

            if hasattr(request.user, 'profile_advertisers') and request.user.profile_advertisers:
                request.user.profile_advertisers.is_online = False
                request.user.profile_advertisers.save()

            # Update the user's online status to False


            return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'error'})