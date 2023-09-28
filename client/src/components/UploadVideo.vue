<script setup>
import { ref, computed } from 'vue';
import { useVideoStore } from '../stores/video';
import SubtitleForm from '../components/SubtitleForm.vue';
import InputVideo from '../components/InputVideo.vue';
import VideoHolder from '../components/VideoHolder.vue';
import { useRouter } from 'vue-router';



const videoStore = useVideoStore()
const showSubtitle = ref(false)
const showButton = ref(true)
const router = useRouter()

const showSubtitleForm = () => {
  showSubtitle.value = true;
  showButton.value = false;

  
  // Use a timeout to ensure that the DOM elements are updated before scrolling
  setTimeout(() => {
    const el = document.getElementById('subtitleform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, 0);
};



const uploadVideo = async () => {
    try {
        await videoStore.uploadNewVideo()
        router.push('/videos')
        
    } catch (error) {


    }
}

</script>
<template>
  <div class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
    <InputVideo v-if="!videoStore.newVideo.videoFile" />
    <VideoHolder v-else />
  </div>

  <div class="flex justify-end gap-3 mt-6"
    v-if="videoStore.newVideo.videoFile && videoStore.newVideo.videoDescription && videoStore.newVideo.videoTitle && showButton">
    <button @click="showSubtitleForm"
      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-900">Add
      Subtitle
    </button>
    <button @click="uploadVideo"
      class="px-6 py-2 leading-5 text-white transition-colors ml-3 duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-900">Upload
      Video</button>
  </div>
<div id="subtitleform">
  <SubtitleForm v-show="showSubtitle" />
</div>
</template>
