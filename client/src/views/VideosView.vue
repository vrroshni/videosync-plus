<script setup>
import VideosViewSkeleton from '../components/skeletons/VideosViewSkeleton.vue';
import SearchVideos from '../components/videos/SearchVideos.vue';
import Videos from '../components/videos/Videos.vue';

import { useVideoStore } from '../stores/video';
import { onMounted } from 'vue';

const videoStore = useVideoStore()
onMounted(() => {
    videoStore.$reset()

})



</script>
<template>
    <SearchVideos />
    <div class="h-full w-screen sm:px-8 md:px-10 sm:py-8">
        <main class="container mx-auto rounded-sm shadow-md h-full bg-transparent pt-5">
            <Suspense>
                <Videos />
                <template #fallback>
                    <VideosViewSkeleton />
                </template>
            </Suspense>
        </main>
    </div>
</template>