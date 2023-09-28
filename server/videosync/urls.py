from django.urls import path
from .views import VideosList,VideoDetails

urlpatterns = [
    path('',VideosList.as_view() ,name='videos'),
    path('video/<str:id>/', VideoDetails.as_view(),name='video'),

]