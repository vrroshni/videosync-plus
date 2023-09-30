<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {searchVideos} from '../../api/videoApi';

const searchQuery = ref("");
const queryTimeout = ref(null);
const videoSearchResults = ref(null);
const searchError = ref(null);
const router = useRouter()

const getSearchResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value !== "") {
            try {
                const data = await searchVideos(searchQuery.value)
                videoSearchResults.value = data
            } catch {
                searchError.value = true;
            }

            return;
        }
        videoSearchResults.value = null;
    }, 300);
};
</script>
<template>
    <main class="container text-gray-700 flex items-center justify-center">
        <div class="pt-4 mb-8 relative w-3/4 md:w-1/2 ">
            <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Search for a city or state"
                class="py-2 px-1 w-full bg-transparent border-b focus:border-gray focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]" />
            <ul class="absolute bg-purple-200  w-full shadow-md py-2 px-1 top-[66px]"
                v-if="videoSearchResults">
                <p class="py-2" v-if="searchError">
                    Sorry, something went wrong, please try again.
                </p>
                <p class="py-2" v-if="!searchError && videoSearchResults.length === 0">
                    No results match your query, try a different term.
                </p>
                <template v-else>
                    <li v-for="videoresult in videoSearchResults" :key="videoresult.id" class="py-2 cursor-pointer" @click="router.push(`/videos/${videoresult.id}`)">
                        {{ videoresult.video_title }}
                    </li>
                </template>
            </ul>
        </div>
    </main>
</template>



<style lang="scss" scoped></style>