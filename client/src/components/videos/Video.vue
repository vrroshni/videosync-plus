<script setup>
import { formatDate } from '../../config/helpers/';
import { IMAGE_API_URL } from '../../config/axios/index';
import { useRouter } from 'vue-router';
const { video } = defineProps(['video'])
const router = useRouter()

</script>
<template>
  <div @click="router.push(`/videos/${video.id}`)"
    class="overflow-hidden w-3/4 md:w-1/3 bg-white hover:bg-gray-100 m-4 shadow-xl rounded-lg py-4 px-4  flex flex-col justify-center transform transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2 min-h-[20rem] ">
    <div class="h-26  w-full overflow-hidden video-link">
      <img :src="IMAGE_API_URL + video.video_thumbnail" alt="" class="thumbnail h-[166px] md:h-[266px] w-[673px]" />
    </div>
    <div class="text-sm text-gray-500 m-2">{{ formatDate(video.added_date) }}</div>
    <div class="font-bold text-lg text-black  md:m-2">{{ video.video_title?.length > 40 ? video.video_title.slice(0, 40) +
      '...more' : video.video_title }}</div>
    <div class="text-gray-500 m-1 md:m-2  text-sm"><router-link :to="`/videos/${video.id}`"> {{ video.video_description?.length >
      60 ?
      video.video_description.slice(0, 60) + '...more' : video.video_description }}</router-link></div>
    <div class="flex justify-start items-center">
      <div class="flex md:m-2 justify-center  items-center">
        <i class="fa-regular fa-eye m-1 text-gray-500"></i>
        <div class="text-gray-500 m-1 text-sm">{{ video.view_count }} views </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.video-link {
  position: relative;
}

.video-link .thumbnail { 
  object-fit: cover; 
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