from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class VideosList(APIView):
    """
    List all videos, or upload a new video.
    """
    def get(self, request):
        
        return Response("hellooooo getttt")

    def post(self, request):

        return Response("hello postt")
