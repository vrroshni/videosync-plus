<script setup>
import UploadVideo from '../components/videoupload/UploadVideo.vue';
import VideoForm from '../components/videoupload/VideoForm.vue';
</script>
<template>
    <div class="h-full w-screen sm:px-8 md:px-16 sm:py-8 z-0 mt-5 md:mt-0">
        <main class="container mx-auto max-w-screen-md h-full">
            <article aria-label="File Upload Modal" class="relative h-full flex flex-col bg-white shadow-xl rounded-md">
                <section class="h-full pt-3 pb-5  px-8 w-full flex flex-col">
                    <VideoForm />
                    <UploadVideo />
                </section>
            </article>
        </main>
    </div>
</template>

