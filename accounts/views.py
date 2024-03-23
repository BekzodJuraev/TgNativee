from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.core.cache import cache

from django.http import HttpResponse
from django.contrib import messages
from django.contrib.messages.views import SuccessMessageMixin
from django.utils import timezone
from django.contrib.auth.mixins import PermissionRequiredMixin
from datetime import date
from django.db.models import Sum
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from .forms import LoginForm, RegistrationForm, AddChanelForm, CostFormatFormSet, BasketForm, Add_ReklamaStatus, Update_Profile, Update_Reklama,GoogleForm,FormFAQ
from API.models import Chanel, Feedback, Add_Sponsors,FAQ
from .models import Profile, Profile_advertiser, Add_chanel, Add_Reklama, Category_chanels, Cost_Format,Like,Message,Faq_Question
from django.contrib.auth import logout
from django.views.generic import View,ListView, CreateView, UpdateView, DeleteView, TemplateView, DetailView,FormView
from .models import Message




class Google(LoginRequiredMixin,FormView):
    template_name = 'login_google.html'
    form_class = GoogleForm
    success_url = reverse_lazy('main')





    def dispatch(self, request, *args, **kwargs):
        # Your logic to determine the user type
        if hasattr(request.user, 'profile_advertisers'):
            redirect_url = reverse_lazy("login_reklama")
            return redirect(redirect_url)
        elif hasattr(request.user, 'profile'):
            redirect_url = reverse_lazy("logging")
            return redirect(redirect_url)

        # Set the LOGIN_REDIRECT_URL in the session


        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        if form.cleaned_data['order']=='admin':
            Profile.objects.create(
                username=self.request.user,
                first_name=self.request.user.first_name,
                last_name=self.request.user.last_name,
                email=self.request.user.email
            )
        elif form.cleaned_data['order']=='reklama':
            Profile_advertiser.objects.create(
                username=self.request.user,
                first_name=self.request.user.first_name,
                last_name=self.request.user.last_name,
                email=self.request.user.email
            )


        return super().form_valid(form)



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
        order_data = self.request.GET.get('order_data')
        current_time = timezone.now()
        if order_data == 'order_data':
            context['chanel'] = Add_Reklama.objects.filter(user_order__username=self.request.user,order_data__gt=current_time).order_by(
                'order_data')
        else:
            context['chanel'] = Add_Reklama.objects.filter(user_order__username=self.request.user,order_data__gt=current_time)
        context['count'] = Add_Reklama.objects.filter(user_order__username=self.request.user).count()
        context['aprove_owner'] = Add_Reklama.objects.filter(user_order__username=self.request.user, aprove=False,status="WT").count()
        context['aprove_admin'] = Add_Reklama.objects.filter(user_order__username=self.request.user, order_data__gt=current_time, aprove=True,
                                                             status="DN").count()


        context['complete'] = Add_Reklama.objects.filter(user_order__username=self.request.user, aprove=True,
                                                          status="DN", order_data__lt=current_time)

        context['completed'] = Add_Reklama.objects.filter(user_order__username=self.request.user, aprove=True,
                                                             status="DN",order_data__lt=current_time).count()

        context['complete_chanel']=Add_Reklama.objects.filter(user_order__username=self.request.user, aprove=True,
                                                             status="DN",order_data__lt=current_time)

        return context


def logout_view(request):
    logout(request)
    return redirect('main')


class Cabinet_telegramPage(LoginRequiredMixin, TemplateView):
    template_name = 'telegram_cabinet.html'
    login_url = reverse_lazy('login')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        order_data=self.request.GET.get('order_data')

        context['chanel'] = Chanel.objects.filter(username=self.request.user).exclude(pictures="")
        context['number'] = Chanel.objects.filter(username=self.request.user).count()
        try:
            if order_data == 'order_data':
                context['order'] = Add_Reklama.objects.filter(chanel__username=self.request.user, aprove=True).order_by(
                    'order_data')
            else:
                context['order'] = Add_Reklama.objects.filter(chanel__username=self.request.user, aprove=True)
            context['count'] = Add_Reklama.objects.filter(chanel__username=self.request.user).count()
            context['aprove_owner']=Add_Reklama.objects.filter(chanel__username=self.request.user,aprove=False).count()
            context['aprove_admin']=Add_Reklama.objects.filter(chanel__username=self.request.user,aprove=True,status="DN").count()


            context['form']=Add_ReklamaStatus
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


    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        channel_name = self.object.name  # Assuming 'name' is the field in Chanel model
        comments = Add_Reklama.objects.filter(chanel__name=channel_name).exclude(comment__isnull=True)
        er=(self.object.subscribers/self.object.views)*10
        er_daily=(self.object.daily_subscribers/self.object.views)*10


        views=cache.get('views',[])
        daily=cache.get('daily',[])
        today=cache.get('today',date(1960, 1, 1))





        if today.month != date.today().month:
            views.clear()
            daily.clear()

        # Check if today's date is different from the stored date
        if today != date.today():
            timeout_seconds = 30 * 24 * 60 * 60
            today = date.today()
            cache.set('today', today, timeout=timeout_seconds)
            daily.append(today.strftime("%Y-%m-%d"))
            views.append(self.object.views)
            cache.set('views', views, timeout=timeout_seconds)
            cache.set('daily', daily, timeout=timeout_seconds)

        # Check if the month of today's date is different from the stored date's month


        context['dates']=daily
        context['views']=views

        context['er']=round(er,1)
        context['er_daily']=round(er_daily,1)

        context['day']=self.object.daily_subscribers
        context['week'] = self.object.weekly_subscribers
        context['month'] = self.object.weekly_monthy

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
        description=self.request.GET.get('search-desc')
        queryset = Chanel.objects.exclude(pictures='')


        if search_query:
            queryset = queryset.filter(chanel_link__icontains=search_query)

        if select_category:
            queryset = queryset.filter(add_chanel__category__name=select_category)

        if chanel_name:
            queryset = queryset.filter(name__icontains=chanel_name)

        if description:
            queryset=queryset.filter(add_chanel__description__icontains=description)

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
        like = Like.objects.filter(username=self.request.user).select_related('chanel_name').prefetch_related('chanel_name__add_chanel__cost_formats')
        context['object_list']=like
        context['count']=like.count()
        return context










class ContactPage(TemplateView):
    template_name = 'contact.html'


class FaqPage(SuccessMessageMixin, CreateView):
    model = Faq_Question
    form_class = FormFAQ
    template_name = 'faq.html'

    success_message = "Успешно отправлено"

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['items'] = FAQ.objects.all()
        return context

    def get_success_url(self):
        return reverse_lazy('faq') + '#form'







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
        context['count'] = Chanel.objects.exclude(pictures='').select_related('add_chanel').prefetch_related('add_chanel__cost_formats')
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

    def dispatch(self, request, *args, **kwargs):
        # Get the instance of Add_Reklama
        instance = self.get_object()

        # Check if the current user is the owner of the ad
        if request.user != instance.user_order.username:
            # If not, you can redirect to a 403 Forbidden page or handle it as you wish
            return self.handle_no_permission()

        return super().dispatch(request, *args, **kwargs)

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
        initial_values = ['1/24', '2/48', '3/72', 'Без удаления']  # List of initial values
        if self.request.POST:
            context['cost_format_formset'] = CostFormatFormSet(
                self.request.POST,
                prefix='cost_formats',
                initial=[{'placement_format': value} for value in initial_values]
            )
        else:
            context['cost_format_formset'] = CostFormatFormSet(
                prefix='cost_formats',
                initial=[{'placement_format': value} for value in initial_values]
            )
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
    success_url = reverse_lazy('logging')
    login_url = reverse_lazy('login')

    def form_valid(self, form):
        return super().form_valid(form)

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

class Chat(LoginRequiredMixin,View):
    login_url = reverse_lazy('login')


    def post(self, request, *args, **kwargs):
        user = self.request.user
        get_receiver=request.POST.get('get_receiver')
        get_content=request.POST.get('get_content')
        get_message=request.POST.get('get_message')






        try:
            user_receiver = User.objects.get(username=get_receiver)
        except User.DoesNotExist:
            return JsonResponse({'message': 'Not sending - Receiver user does not exist'})

        try:
            if not get_content:
                raise ValueError('Content cannot be empty')
            add_reklama_instance = Add_Reklama.objects.get(id=get_message)
            message = Message.objects.create(sender=user, receiver=user_receiver, content=get_content,message=add_reklama_instance)
            return JsonResponse({'message': get_content})
        except ValueError as ve:
            print(ve)
            return JsonResponse({'message': 'Not sending - Error: {}'.format(str(ve))})
        except Exception as e:
            print(e)
            return JsonResponse({'message': 'Not sending - Error: {}'.format(str(e))})

    def get(self, request, *args, **kwargs):
        user = self.request.user
        message_id = request.GET.get('message_id', None)
        if message_id:
            messages_content = Message.objects.filter(sender=user, message_id=message_id).values_list('content',
                                                                                                      flat=True)
            return JsonResponse({'messages_content': list(messages_content)})
        else:
            return JsonResponse({'error': 'No message_id provided'})











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

