from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
urlpatterns=[
     path('', views.login_page, name='login'),
     path('post/',views.CreateChanel.as_view(),name='post'),
     path('create', views.create, name='create'),
     path('register/', views.register_page, name='register'),

     path('tgnative/',views.AviatorView.as_view(),name="logging"),
     path('reklama/',views.ProfileView.as_view(),name="login_reklama"),
     path('reklama/create/',views.CreateAds.as_view(),name="ads"),
     path('<int:pk>/update',views.Updatestatus.as_view(),name='update'),
     path('password-reset/', auth_views.PasswordResetView.as_view(),name='password_reset'),
     path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
     path('password-reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
     path('password-reset/complete/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),

]