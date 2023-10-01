<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {searchVideos} from '../../api/videoApi';

const searchQuery = ref("");
const queryTimeout = ref(null);
const videoSearchResults = ref(null);
const searchError = ref(null);
const router = useRouter()

// Function to fetch search results
const getSearchResults = () => {
    
// The setTimeout function is used to introduce a brief delay
//  before sending the API request for search results, 
// improving user experience by reducing the number of unnecessary requests 
// during user input. 

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
    }, 600);
};
</script>
<template>
    <main class="container text-gray-900 flex items-center justify-center">
        <div class="pt-8 mb-8 relative w-3/4 md:w-1/2 ">
            <input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="Search for a video by title or description"
                class="py-2 px-1 w-full bg-transparent border-b  border-gray-500 focus:outline-none text-gray-900 placeholder:text-gray-600 placeholder:text-base focus:shadow-[0px_1px_0_0_#004E71]" />
            <ul class="absolute bg-purple-100 z-20 w-full shadow-md py-2 px-2 top-[75px]"
                v-if="videoSearchResults">
                <p class="py-2  text-red-500" v-if="searchError">
                    Sorry, something went wrong, please try again.
                </p>
                <p class="py-2 text-red-500" v-if="!searchError && videoSearchResults.length === 0">
                    No results match your search, Give a different try.
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



