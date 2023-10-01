<script setup>
import { useVideoStore } from '../../stores/video';
const videoStore = useVideoStore();
</script>


<!-- This component displays a list of subtitles for a video. It shows the starting and ending timestamps, as well as the subtitle text. -->
<!-- If there are subtitles, it provides a button to download the SRT file. -->
<!-- Subtitles can be deleted individually by clicking on the trash icon. -->

<template>
  <div class="flex items-center justify-center w-full  p-4">
    <div class="flex-col items-center justify-center text-gray-800 text-center w-full  mb-4">
      <div class="flex items-center flex-col justify-center text-xl font-bold pb-4 gap-2">
        {{ videoStore.newVideo.subtitles.length > 0 ? "Added Subtitles" : "No Subtitles Added" }}
        <div v-if="videoStore.newVideo.subtitles.length > 0" class="flex items-center justify-end text-white font-normal text-sm md:text-lg">
          <button @click="videoStore.syncWithVideo" class="bg-black px-2 py-1 rounded-lg shadow-md">SRT File</button>
        </div>
      </div>

      <div class="flex flex-col w-full h-auto items-center justify-center gap-2 mb-3" v-show="videoStore.newVideo.subtitles.length > 0">
        <div class="w-full bg-gray-200 rounded-lg px-3 py-1.5 flex flex-row items-center justify-between" v-for="(subtitle, index) in videoStore.newVideo.subtitles" :key="index">
          <div class="flex flex-col items-start justify-start">
            <div class="flex items-start justify-start gap-2">
              <div class="text-xs md:text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center">
                {{ subtitle.startingTimestamp }}
                <span class="text-xs md:text-md font-normal ml-2 text-black">{{ "--->" }}</span>
              </div>
              <div class="text-xs md:text-lg font-bold bg-gradient-to-l from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                {{ subtitle.endingTimestamp }}
              </div>
            </div>
            <div class="text-sm md:text-base font-light text-gray-800 flex items-start justify-start capitalize">
              {{ subtitle.subtitle }}
            </div>
          </div>
          <i class="fa-solid fa-trash  text-xs md:text-xl text-black hover:text-gray-700 cursor-pointer" @click="() => videoStore.deleteSubtitleById(subtitle.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

