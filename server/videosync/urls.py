from django.urls import path
from .views import VideosList

urlpatterns = [
    path('',VideosList.as_view() ,name='videos'),
]