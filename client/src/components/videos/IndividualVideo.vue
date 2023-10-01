<template>
    <div class="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full " v-if="video">
        <div class="flex flex-col text-black  md:items-start items-center justify-between space-y-3 px-8">
            <div class="text-3xl font-bold  ">{{ video.video_title }}</div>
            <div class="text-lg text-gray-600  ">{{ video.video_description }}</div>
            <div class="text-base">posted at {{ formatDate(video.added_date) }}</div>
        </div>
        <div class="flex space-x-2 md:space-x-6 md:m-4">
            <VideoPlayer :videoSrc="IMAGE_API_URL + video?.video_file"
                :subtitleSrc="video?.subtitle_file && IMAGE_API_URL + video?.subtitle_file"
                :thumbnailSrc="IMAGE_API_URL + video?.video_thumbnail" :id="video?.id" />
        </div>
    </div>

    <h1 class="text-5xl font-bold" v-else>
        This Video does not exist!
    </h1>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getVideo } from '../../api/videoApi';
import { ref } from 'vue';
import { toast, formatDate } from '../../config/helpers';
import { IMAGE_API_URL } from '../../config/axios';
import VideoPlayer from '../videoplayer/VideoPlayer.vue';


const route = useRoute()
const video = ref('')
const id = route.params.id

const getVideoInfo = async () => {
    try {
        video.value = await getVideo(id)
    } catch (error) {
        toast.error("This video does not exist!")
    }
}
await new Promise((res) => setTimeout(res, 1000))
await getVideoInfo()

</script>

