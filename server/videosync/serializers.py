from rest_framework import serializers
from .models import Video, Subtitle


class SubtitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtitle
        fields = '__all__'



class VideoSerializer(serializers.ModelSerializer):
    subtitles = SubtitleSerializer(many=True, read_only=True)

    class Meta:
        model = Video
        fields = '__all__'
        
class CreateVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('video_title','video_description','video_file','added_date')
