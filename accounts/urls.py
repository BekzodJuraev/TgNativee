from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
urlpatterns=[
     path('', views.MainPage.as_view(), name='main'),
     path('about/', views.AboutPage.as_view(),name='about'),
     path('contact/', views.ContactPage.as_view(), name='contact'),
     path('list-chanel/',views.ListChanelPage.as_view(),name='list-chanel'),
     path('category-list/',views.CategoryChanelPage.as_view(),name='category-list'),
     path('page/<int:pk>', views.Page_List.as_view(),name='page'),
     path('faq/',views.FaqPage.as_view(),name='faq'),
     path('login/', views.login_page, name='login'),
     path('post/',views.CreateChanel.as_view(),name='create'),
     path('logging/', views.Cabinet_telegramPage.as_view(), name='logging'),
     path('login_advitiser/', views.Reklama_Page.as_view(),name='login_reklama'),
     path('logout/',views.logout_view,name='logout'),
     path('register/', views.register_page, name='register'),
     #path('tgnative/',views.AviatorView.as_view(),name="logging"),
     #path('reklama/',views.ProfileView.as_view(),name="login_reklama"),
     path('<int:pk>/reklama',views.UpdateReklama.as_view(),name='cabinet_reklama'),
     path('<int:pk>/telegram',views.UpdateTelegram.as_view(),name='cabinet_telegram'),
     path('balance/',views.BalancePage.as_view(),name='balance'),
     path('createads/',views.ads_view,name='createads'),
     path('deleteads/<int:pk>',views.DeleteAds.as_view(),name='deleteads'),
     path('like-toggle/', views.LikeToggleView.as_view(), name='like_toggle'),
     path('message/',views.Chat.as_view(),name='message'),

     path('update_online_status/', views.update_online_status, name='update_online_status'),

     path('reklama/create/<int:pk>',views.CreateAds.as_view(),name="updateads"),
     path('<int:pk>/update',views.Updatestatus.as_view(),name='update'),
     path('password-reset/', auth_views.PasswordResetView.as_view(),name='password_reset'),
     path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
     path('password-reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
     path('password-reset/complete/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),

]