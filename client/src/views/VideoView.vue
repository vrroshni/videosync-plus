<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getVideo } from '../api/videoApi';
import { toast ,formatDate} from '../config/helpers';
import VideoPlayer from '../components/videoplayer/VideoPlayer.vue';
const route = useRoute()
const video = ref('')
const id = route.params.id

const getVideoInfo = async () => {
    try {
        video.value =await getVideo(id)
        console.log(video.value)
    } catch (error) {
        toast.error("This video does not exist!")
    }
}

onMounted(() => getVideoInfo())

</script>
<template>
    <div class="flex justify-center bg-gray-200 p-8" >
        <div class="flex flex-col justify-center">
            <div class="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full " v-if="video">
                <div class="flex flex-col text-black  md:items-start items-center justify-between space-y-3 px-8">
                    <div class="text-3xl font-bold ">{{ video.video_title }}</div>
                    <div class="text-lg text-gray-600  ">{{video.video_description }}</div>
                    <div class="text-base">posted at {{ formatDate(video.added_date) }}</div>
                </div>
                <div class="flex space-x-2 md:space-x-6 md:m-4">
                    <VideoPlayer :video="video" />
                </div>
            </div>
          <h1 class="text-5xl font-bold" v-else >
            This Video does not exist!
          </h1>
        </div>
    </div>
</template>