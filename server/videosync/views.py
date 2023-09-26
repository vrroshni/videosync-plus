from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Video, Subtitle
from .serializers import VideoSerializer,SubtitleSerializer

# Create your views here.
class VideosList(APIView):
    """
    List all videos, or upload a new video.
    """
    pass

