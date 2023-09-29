<script setup>
import { useVideoStore } from '../../stores/video';
import { onMounted } from 'vue';
import Video from './Video.vue';
const videoStore = useVideoStore()
onMounted(() => videoStore.getallVideos())
</script>

<template>
 
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row  justify-center items-center">
          <Video v-for="video in videoStore.allVideos" :key="video.id" :video="video"/>
        </div>
      </div>
    
</template>
<style scoped>
.video-link {
  position: relative;
}


.video-link .thumbnail {
  width: 100%;
  object-fit: contain;
  object-position: center;
}

.video-link::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("//cyara.com/wp-content/uploads/resources/play-button.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 20%;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, .4));
}

.video-link:hover::after {
  background-size: 22%;
  -webkit-transition: background-size .2s ease-in-out;
  -moz-transition: background-size .2s ease-in-out;
  -o-transition: background-size .2s ease-in-out;
  transition: background-size .2s ease-in-out;
}
</style>