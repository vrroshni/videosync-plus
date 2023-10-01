<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <div class="lg:px-24 lg:py-24 md:py-16 md:px-44 px-4 py-14 items-center flex justify-center bg-white">
        <div class=" w-full xl:w-1/2 relative pb-12 lg:pb-0 items-center flex justify-center">
            <div class="relative">
                <div class="absolute">
                    <div class="">
                        <h1 class="my-2 text-gray-800 font-bold text-2xl">
                            Videos are Not uploaded!
                        </h1>
                        <p class="my-2 text-gray-800">Sorry about that! Please upload a video to show videos here .</p>
                        <button @click="router.push('/')"
                            class="sm:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take
                            me there!</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                </div>
            </div>
        </div>

    </div>
</template>