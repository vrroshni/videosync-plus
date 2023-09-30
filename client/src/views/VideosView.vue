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
    <SearchVideos v-if="videoStore.allVideos.length > 0" />
    <div class="h-screen w-screen sm:px-8 md:px-10 sm:py-8">
        <main class="container mx-auto rounded-sm shadow-md h-full bg-white pt-5">
            <Suspense>
                <Videos />
                <template #fallback>
                    <!-- <VideosViewSkeletonVue /> -->
                    <VideosViewSkeleton />
                </template>
            </Suspense>
        </main>
    </div>
</template>