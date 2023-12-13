from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.http import HttpResponse
import telegram
from .bot import BOT_TOKEN
from django.utils import timezone
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.db.models import Sum
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from .forms import LoginForm,RegistrationForm,AddChanelForm,CostFormatFormSet,BasketForm,Add_ReklamaStatus,Update_Profile,Update_Reklama,Search
from API.models import Chanel,Feedback,Add_Sponsors
from .models import Profile, Profile_advertiser, Add_chanel, Add_Reklama, Category_chanels, Cost_Format
from django.contrib.auth import logout
from django.views.generic import ListView, CreateView, UpdateView, DeleteView,TemplateView,DetailView





class BalancePage(LoginRequiredMixin,TemplateView):
    template_name = 'withdrawal-funds.html'


class UpdateReklama(LoginRequiredMixin,UpdateView):
    template_name = "update_reklama.html"
    model = Profile_advertiser
    form_class = Update_Reklama


    def get_context_data(self, *, object_list=None, **kwargs):
        context=super().get_context_data(**kwargs)
        context['user']=Profile_advertiser.objects.get(username=self.request.user)
        return context

    def get_success_url(self):
        return self.request.path

class UpdateTelegram(LoginRequiredMixin,UpdateView):
    template_name = "update_telegram.html"
    model = Profile
    form_class = Update_Profile


    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['user'] = Profile.objects.get(username=self.request.user)
        return context

    def get_success_url(self):
        return self.request.path

class Zayavka_Page(LoginRequiredMixin,TemplateView):
    template_name = 'zayavki.html'

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
        if not Profile.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            logout(request)
            return redirect('login')
        return super().dispatch(request, *args, **kwargs)


class Reklama_Page(LoginRequiredMixin,TemplateView):
    template_name = 'reklama_cabinet.html'

    def dispatch(self, request, *args, **kwargs):
        if not Profile_advertiser.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            logout(request)
            return redirect('login')
        return super().dispatch(request, *args, **kwargs)

def logout_view(request):
    logout(request)
    return redirect('main')

class Cabinet_telegramPage(LoginRequiredMixin,TemplateView):
    template_name = 'telegram_cabinet.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context=super().get_context_data(**kwargs)
        context['chanel'] = Chanel.objects.filter(username=self.request.user)
        context['count'] = Chanel.objects.filter(username=self.request.user).count()
        return context





    def dispatch(self, request, *args, **kwargs):
        if not Profile.objects.filter(username=request.user).exists():
            # Redirect the user to a different page or return an error message
            # if they don't have a profile.
            logout(request)
            return redirect('login')
        return super().dispatch(request, *args, **kwargs)







class Page_List(DetailView):
    template_name = 'page.html'
    model = Chanel
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        channel_name = self.object.name  # Assuming 'name' is the field in Chanel model

        # Retrieve all comments related to the channel
        comments = Add_Reklama.objects.filter(chanel__name=channel_name).exclude(comment__isnull=True)

        context['user']=self.request.user.id
        context['chanel']=channel_name
        context['category'] = comments
        return context




class CategoryChanelPage(ListView):
    template_name = 'category.html'
    model = Chanel
    paginate_by = 6

    def get_queryset(self):
        search_query = self.request.GET.get('chanel_link')

        if search_query:
            return Chanel.objects.filter(chanel_link__icontains=search_query)
        else:
            return Chanel.objects.all()




    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['lists'] = Chanel.objects.all().count()
        context['count'] = Chanel.objects.select_related('add_chanel').prefetch_related('add_chanel__cost_formats')
        context['category']=Category_chanels.objects.all()


        return context


class ListChanelPage(TemplateView):
    template_name = 'listchanel.html'

class ContactPage(TemplateView):
    template_name = 'contact.html'

class FaqPage(TemplateView):
    template_name = 'faq.html'

class AboutPage(TemplateView):
    template_name = 'about.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['sponsors']=Add_Sponsors.objects.all().order_by('-id')[:4]
        context['lists'] = Chanel.objects.all().count()
        context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        return context


class MainPage(TemplateView):
    template_name = 'index.html'
    def get_context_data(self, *, object_list=None, **kwargs):
        context=super().get_context_data(**kwargs)
        context['feedback']=Feedback.objects.all().order_by('-id')[:3]
        context['count'] = Chanel.objects.select_related('add_chanel').prefetch_related('add_chanel__cost_formats')
        context['lists'] = Chanel.objects.all().count()
        context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        return context


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
            form.add_error(None, 'Логин или пароль неверны')






    context = {
        'form': form,
    }


    return render(request, "login_.html", context)

class CreateAds(LoginRequiredMixin,UpdateView):
    template_name = 'create_ads.html'
    form_class = BasketForm
    model = Add_Reklama
    success_url=reverse_lazy('login_reklama')
    login_url = reverse_lazy('login')





class CreateChanel(LoginRequiredMixin,CreateView):
    template_name='Add_chanel.html'
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

class Updatestatus(LoginRequiredMixin,UpdateView):
    model = Add_Reklama
    form_class = Add_ReklamaStatus
    template_name = 'updated_status.html'
    success_url = reverse_lazy('logging')
    login_url = reverse_lazy('login')

    def form_valid(self, form):
        response = super().form_valid(form)
        return response


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

        try:
            chanel_instances = Chanel.objects.filter(username=self.request.user)
            context['order']=Add_Reklama.objects.filter(chanel__in=chanel_instances)
            #Now you can use chanel_instance in your queries or operations.
        except Chanel.DoesNotExist:
            print("Netu")
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
        try:
            chanel_instance = Profile_advertiser.objects.get(username=self.request.user)
            context['order']=Add_Reklama.objects.filter(user_order=chanel_instance)
            # Now you can use chanel_instance in your queries or operations.
        except Chanel.DoesNotExist:
            print("Netu")
        #context['lists']=Chanel.objects.all().count()
        #context['count']=Chanel.objects.all()
        #context['subscribers'] = Chanel.objects.aggregate(total=Sum('subscribers'))['total']
        #context['total_views'] = Chanel.objects.aggregate(total=Sum('views'))['total']
        context['user']=Profile_advertiser.objects.get(username=self.request.user)
        return context



def register_page(request):
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
        format=request.POST.get('format')
        order_data = request.POST.get('order_data')


        chanel=Chanel.objects.get(name=chanel_name)
        user_order_name=Profile_advertiser.objects.get(username=user_order)
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

        # You can return additional data in the response if needed
        data = {'message': 'Ad created successfully.'}
        return JsonResponse(data)

    # If it's not a POST request, return an error message
    data = {'error': 'Invalid request method.'}
    return JsonResponse(data, status=400)

