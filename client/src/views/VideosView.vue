<script setup>
import VideosViewSkeleton from '../components/skeletons/VideosViewSkeleton.vue';
import SearchVideos from '../components/videos/SearchVideos.vue';
import Videos from '../components/videos/Videos.vue';

import { useVideoStore } from '../stores/video';
import { onMounted } from 'vue';

const videoStore = useVideoStore()
// Reset the videoStore on component mount to ensure a clean state.
onMounted(() =>videoStore.$reset())



</script>
<template>
    <!-- Render the SearchVideos component for searching videos -->
    <SearchVideos />
    <div class="h-full w-screen sm:px-8 md:px-10 sm:py-8">
        <main class="container mx-auto rounded-lg shadow-md min-h-full bg-transparent pt-5">
            <Suspense>
                <Videos />
                <template #fallback>
                      <!-- Display a skeleton UI while waiting for data -->
                    <VideosViewSkeleton />
                </template>
            </Suspense>
        </main>
    </div>
</template>