<script setup>
import { useVideoStore } from '../../stores/video';

const videoStore = useVideoStore()
</script>
<template>

  <div class="flex items-center justify-center mt-4">
    <div class="flex-col items-center justify-center text-gray-800 text-center">
      <div class="flex items-center justify-center">
        <div class="h-9 w-[90%] flex items-center justify-center text-xl font-bold">
          Subtitles Preview
        </div>
      </div>

      <div class="flex flex-wrap  mx-3 w-[95%] h-auto  items-center justify-center gap-2 ">
        <div class="w-full bg-gray-200 rounded-lg px-3 py-1.5 flex flex-row items-center justify-between"
          v-for="(subtitle, index) in videoStore.newVideo.subtitles" :key="index">
          <div class="flex flex-col items-start justify-start">
            <div class="flex  items-start justify-start gap-2">
              <div
                class="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent flex items-center justify-center">
                {{ subtitle.startingTimestamp }}
                <span class="text-md  font-normal ml-2 text-black">
                  {{ "--->" }}
                </span>
              </div>
              <div
                class="text-lg font-bold bg-gradient-to-l from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                {{ subtitle.endingTimestamp }}
              </div>
            </div>
            <div class="text-base font-light text-gray-800 flex items-start justify-start capitalize">
              {{ subtitle.subtitle }}
            </div>
          </div>
          <button class="px-2 py-1 bg-black text-white rounded-lg shadow-md"
            @click="() => videoStore.deleteSubtitleById(subtitle.id)">Detete</button>
        </div>


      </div>
  </div>
</div></template>