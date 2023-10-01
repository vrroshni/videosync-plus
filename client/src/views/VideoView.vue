<script setup>


import VideoSkeleton from '../components/skeletons/VideoSkeleton.vue';
import IndividualVideo from '../components/videos/IndividualVideo.vue';


</script>
<template>
    <div class="flex justify-center bg-white mt-16 p-8 ">
        <div class="flex justify-center w-full">
            <Suspense>
                <IndividualVideo  />
                <template #fallback>
                    <VideoSkeleton />
                </template>
            </Suspense>

        </div>
    </div>
</template>