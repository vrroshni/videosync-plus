<script setup>
import { useVideoStore } from '../../stores/video';
import ErrorMessage from '../ErrorMessage.vue';
const videoStore = useVideoStore()
import { ref } from 'vue';
const error = ref('')

const onChange = (e) => {
  error.value = ''
  if (!e.target.files[0]) {
    error.value = 'Video file is required';
    return;
  }

  const file = e.target.files[0]

  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedFileTypes = ['video/mp4', 'video/mpg', 'video/wmv', 'video/mov', 'video/avi', 'video/swf'];

  if (!allowedFileTypes.includes(file.type)) {
    error.value = 'Invalid file type. Please upload a mp4, mpg, mov,avi,swf';
    return
  }

  if (file.size > maxSize) {
    error.value = 'File size exceeds the 10MB limit. Please choose a smaller file.';
    return
  }

  const videoSrc = URL.createObjectURL(file);
  videoStore.$patch((state) => {
    state.newVideo.videoFile = file
    state.previewVideo=videoSrc
  })


}


</script>
<template>


  <label class="cursor-pointer py-3">
    <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
      <li id="empty" class="h-full w-full text-center flex flex-col justify-center items-center">
        <img class="mx-auto w-32"
          src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
          alt="no data" />
        <span class="text-small text-gray-500">No files selected</span>
      </li>
    </ul>
    <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center px-2 py-2 mt-4 bg-gray-300">
      <span>Upload a Video</span>
    </p>
    <input type="file" accept="video/*" class="hidden" @input="onChange" name="videoFile" />
  </label>
  <ErrorMessage v-show="error" :message="error" />
</template>