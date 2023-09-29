<script setup>
import { formatDate } from '../../config/helpers/';
import { IMAGE_API_URL } from '../../config/axios/index';
import { useRouter } from 'vue-router';
const { video } = defineProps(['video'])
const router = useRouter()

</script>
<template>
    <div @click="router.push(`/videos/${video.id}`)"
        class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-xl rounded-lg py-4 px-4  flex flex-col justify-centertransform transition duration-300 ease-in-out cursor-pointer hover:-translate-y-2">
        <div class="h-26 w-full overflow-hidden video-link">
            <img :src="IMAGE_API_URL + video.video_thumbnail" alt="" class="thumbnail" />
        </div>
        <div class="text-sm text-gray-500 m-2">{{ formatDate(video.added_date) }}</div>
        <div class="font-bold text-lg text-black m-2">{{ video.video_title }}</div>
        <div class="text-gray-500 m-2 text-sm"><router-link :to="`/videos/${video.id}`"> {{ video.video_description?.length > 20 ?
            video.video_description.slice(0, 31) + '...more' : video.video_description }}</router-link></div>
        <!-- <div class="flex justify-between">
            <div class="flex m-2">
                <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">896</div>
                <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                <div class="text-gray-500 m-1 mb-4 text-sm">5648</div>
            </div>
            <div class="m-2">
                <ion-icon name="share-social-outline"
                    class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "></ion-icon>
            </div>
        </div> -->
    </div>
</template>