<script setup>
import { useVideoStore } from '../stores/video';
import PreviewSubtitle from './PreviewSubtitle.vue';

const videoStore = useVideoStore()


</script>
<template>
    <div class="w-full h-full  ">
        <video controls :src="videoStore.previewVideo"></video>
        <h1 class="text-center font-semibold text-gray-600 mt-2 text-lg">Preview Of the video</h1>
        <p class="text-center text-md text-gray-500">Use this Preview for choosing the timestamp for subtitle </p>
        <PreviewSubtitle v-show="videoStore.newVideo.subtitles.length > 0" />
        <p @click="videoStore.chooseTimestamp('00:00:00.123')">Here clickkk</p>
        <p @click="videoStore.chooseTimestamp('00:00:05.000')">Here clickkk</p>


        <p @click="videoStore.chooseTimestamp('00:04:04.123')">2 clickkk</p>
        <p @click="videoStore.chooseTimestamp('00:40:25.000')">2 clickkk</p>
    </div>
</template>

