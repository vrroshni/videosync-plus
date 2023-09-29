<script setup>
import { useVideoStore } from '../../stores/video';
import { ref } from 'vue';
import ErrorMessage from '../ErrorMessage.vue';

const videoStore = useVideoStore()
const error = ref({
    videoTitle: '',
    videoDescription: '',
    videoThumbnail: '',
})


const onChange = (e) => {
    const { name, value } = e.target;

    // Clear previous validation error for the field
    error.value[name] = '';

    // Perform validation here (e.g., check minimum character requirement)
    if (name === 'videoTitle' && value.length < 5) {
        error.value[name] = 'Video Title must be at least 5 characters long.';
        videoStore.newVideo.videoTitle = ""
        return;
    }

    if (name === 'videoDescription' && value.length < 10) {
        error.value[name] = 'Video Description must be at least 10 characters long.';
        videoStore.newVideo.videoDescription = ""
        return;
    }


    // Validate the video thumbnail
    if (name === 'videoThumbnail') {
        const file = e.target.files[0]; // Get the selected file
        if (!file) {
            error.value[name] = 'Please select a video thumbnail file.';
            e.target.value = ""
            return;
        } else {


            const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif']; // Define allowed file types
            if (!allowedFileTypes.includes(file.type)) {
                error.value[name] = 'Unsupported file type. Please upload a valid image (JPEG, PNG, GIF).';
                e.target.value = ""
                return;
            }
        }
        videoStore.$patch((state) => {
            state.newVideo.videoThumbnail = e.target.files[0];
            console.log(state.newVideo.videoThumbnail,"uploaded time")
            
        });


        return
    }


    // Update the store only if there are no validation errors
    videoStore.$patch((state) => {
        state.newVideo[name] = value;
    });

}


</script>
<template>
    <div class="border-none border-2 border-gray-400  flex flex-col justify-center items-center text-gray-500 gap-2">
        <h1 class="text-2xl font-bold text-purple-900  capitalize ">Video settings</h1>
        <p>Add a new video and add appropriate subtitle as per you needs</p>
        <div class="w-full">
            <label for="username">Video Title</label>
            <input id="username" type="text" name="videoTitle" @input="onChange"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="video title.....">

            <!-- Display validation error message if it exists -->
            <ErrorMessage v-show="error.videoTitle" :message="error.videoTitle" />

        </div>
        <div class="w-full ">
            <label for="message" class="">Video description</label>
            <textarea id="message" rows="2" name="videoDescription" @input="onChange"
                class="block px-4 py-2 w-full mt-2  text-gray-700 bg-gray-50 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                placeholder="Leave a comment..."></textarea>

            <!-- Display validation error message if it exists -->
            <ErrorMessage v-show="error.videoDescription" :message="error.videoDescription" />
        </div>
        <div class="w-full pb-3">

            <label for="file_input">Upload file</label>
            <input name="videoThumbnail" @input="onChange" accept="image/*"
                class="block px-4 py-2 w-full mt-2  text-gray-700 bg-gray-50 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                aria-describedby="file_input_help" id="file_input" type="file">
            <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                800x400px).</p>
            <ErrorMessage v-show="error.videoThumbnail" :message="error.videoThumbnail" />


            <!-- Display validation error message if it exists -->
        </div>
    </div>
</template>