<script setup>

import { useVideoStore } from '../../stores/video';
import PreviewSubtitle from '../subtitle/PreviewSubtitle.vue';
import VideoPlayer from '../videoplayer/VideoPlayer.vue';
const videoStore = useVideoStore()

</script>
<template>
    <!-- Video Preview Section -->
    <div class="min-w-fit min-h-fit flex flex-col items-center justify-center  ">
        <h1 class="text-center font-semibold text-gray-600 mt-2 text-lg">Preview Of the video</h1>
        <p class="text-center text-md text-gray-500 mb-2">Use this Preview for choosing the timestamp for subtitle </p>
        <!-- Video Player Component -->
        <div class="h-36 md:h-72">
            <VideoPlayer :videoSrc="videoStore.previewVideo" :thumbnailSrc="videoStore.previewThumbnail" />
        </div>
        <!-- Subtitle Preview Component -->
        <div class="w-72 md:w-full">
            <PreviewSubtitle />
        </div>
    </div>
</template>

