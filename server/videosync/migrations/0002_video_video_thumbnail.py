# Generated by Django 4.1.7 on 2023-09-28 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videosync', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='video_thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to='videosthumbnails/'),
        ),
    ]