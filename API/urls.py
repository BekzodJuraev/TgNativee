from django.urls import path
from .views import ChanelAPI



urlpatterns=[
   path('', ChanelAPI.as_view())
]