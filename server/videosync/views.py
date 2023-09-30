from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Video, Subtitle
from .serializers import VideoSerializer, SubtitleSerializer, CreateVideoSerializer
from .helpers import create_srt_from_json
from django.core.files.base import ContentFile
from django.db.models import Q
# Create your views here.


class VideosList(APIView):
    """
    List all videos, or upload a new video.
    """

    def get(self, request):
        try:
            videos = Video.objects.all()
            serializer = VideoSerializer(videos, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response("Somethimg went wrong", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        try:
            
            data = request.data
            if Video.objects.filter(video_title=data['video_title']).first():
                return Response('Video title already exists',status=status.HTTP_409_CONFLICT)
            serializer = VideoSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                
                # Extract and handle subtitle objects if they exist in the request
                if(data['sub_titles']):
                    srt_text=create_srt_from_json(data['sub_titles'])
                    print(srt_text)
                    srt_content = "".join(srt_text)
                    video_instance=Video.objects.get(video_title=data['video_title'])
                    video_instance.subtitle_file.save(f"{data['video_title']}.srt", ContentFile(srt_content.encode('utf-8')))
                return Response(status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response("Somethimg went wrong", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VideoDetails(APIView):
    """
    List  video,  update or delete  a  video.
    """

    def get(self, request, id):
        try:
            if video := Video.objects.get(id=id):
                serializer = VideoSerializer(video)
                return Response(serializer.data)
            else:
                return Response('This Video does not exists', status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response("Somethimg went wrong", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class SearchVideos(APIView):
    """
    List  video,  update or delete  a  video.
    """

    def get(self, request, search):
        try:
                videos=Video.objects.filter(Q(video_title__icontains=search) | Q(video_description__icontains=search) )
                serializer = VideoSerializer(videos,many=True)
                return Response(serializer.data)
        except Exception as e:
            print(e)
            return Response("Somethimg went wrong", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
