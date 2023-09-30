<script setup>
import { ref, computed } from 'vue';
import { useVideoStore } from '../../stores/video';
import SubtitleForm from '../subtitle/SubtitleForm.vue';
import InputVideo from './InputVideo.vue';
import VideoHolder from '../videoplayer/VideoHolder.vue';
import { useRouter } from 'vue-router';
import { toast } from '../../config/helpers';
import ProgressBar from '../elements/ProgressBar.vue';


const videoStore = useVideoStore();
const showSubtitle = ref(false);
const showButton = ref(true);
const router = useRouter();

// Function to show the subtitle form
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

// Function to hide the subtitle form
const hideForm = () => {
  showSubtitle.value = false;
  showButton.value = true;
};

// Computed property to check if all required fields are filled
const canUploadVideo = computed(() => {
  const { newVideo } = videoStore;
  return (
    newVideo.videoFile &&
    newVideo.videoDescription &&
    newVideo.videoThumbnail &&
    newVideo.videoTitle &&
    showButton.value
  );
});

// Function to upload the video
const uploadVideo = async () => {
  try {
    await videoStore.uploadNewVideo();
    router.push('/videos');
    toast.success('Video Uploaded Successfully');
  } catch (error) {
    toast.error(error?.response?.data, { position: "bottom-center" });
  }
};

</script>
<template>
  <div class="border-dashed border-2 border-gray-400  flex flex-col justify-center items-center">
    <InputVideo v-if="!videoStore.newVideo.videoFile" />
    <VideoHolder v-else />
    <ProgressBar v-if="videoStore.uploadProgress > 0" />
  </div>

  <div class="flex justify-end gap-3 mt-6"
    v-if="canUploadVideo">
    <button @click="showSubtitleForm"
      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-900">Add
      Subtitle
    </button>
    <button @click="uploadVideo"
      class="px-6 py-2 leading-5 text-white transition-colors ml-3 duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-900">Upload
      Video</button>
  </div>
  <div id="subtitleform">
    <SubtitleForm v-show="showSubtitle" @subtitleFinished="hideForm" />
  </div>
</template>
