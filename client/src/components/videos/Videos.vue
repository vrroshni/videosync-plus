<script setup>
import Video from './Video.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useVideoStore } from '../../stores/video';
import NoVideos from './NoVideos.vue';
const videoStore = useVideoStore()
const router = useRouter()
await new Promise((res) => setTimeout(res, 1000))
await videoStore.getallVideos()


</script>

<template>
  <div class="flex justify-center" v-if="videoStore.allVideos.length > 0">
    <div class="flex flex-col md:flex-row flex-wrap  justify-center items-center">
      <Video v-for="video in videoStore.allVideos" :key="video.id" :video="video" />
    </div>
  </div>
  <NoVideos v-else />
</template>
