from django.db import models
import uuid
from django.utils import timezone

# Create your models here.
class Video(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    video_title = models.CharField(max_length=255)
    video_description = models.TextField()
    video_file = models.FileField(upload_to='videos/')
    video_thumbnail = models.ImageField(upload_to='videosthumbnails/',blank=True, null=True)
    subtitle_file = models.FileField(upload_to='subtitles/', blank=True, null=True)
    added_date = models.DateTimeField(default=timezone.now)
     
 
    def __str__(self):
        return self.video_title
    
class Subtitle(models.Model):
    video = models.ForeignKey('Video', on_delete=models.CASCADE)
    start_timestamp = models.CharField(max_length=12)  # Format: 00:02:25.173
    end_timestamp = models.CharField(max_length=12)    # Format: 00:02:25.173
    subtitle_text = models.TextField()

    def __str__(self):
        return f"Subtitle for {self.video.video_title}"       