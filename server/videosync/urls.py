from django.urls import path
from .views import VideosList,VideoDetails,SearchVideos

urlpatterns = [
    path('',VideosList.as_view() ,name='videos'),
    path('video/<str:id>/', VideoDetails.as_view(),name='video'),
    path('search/<str:search>/', SearchVideos.as_view(),name='video_search'),
    

]