<script setup>
import MuItiStepInput from '../components/MuItiStepInput.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVideoStore } from '../stores/video';
import ErrorMessage from './ErrorMessage.vue';
import { steps } from '../config/helpers';


const videoStore = useVideoStore()
const currentStep = ref(0)
const error = ref(0)
const router = useRouter()


const handleSubtitle = () => {
    const { subtitle } = videoStore.newSubtitle;
    if (!subtitle) {
        error.value = "Enter the Subtitle"
        return false

    }

    currentStep.value = 0
    videoStore.addSubtitleData(steps[currentStep.value].name)
    return true
}

const addNewSubtitle = () => {
    if (!handleSubtitle())
        return
}


const areTimestampsFilled = () => {
    error.value = ''
    const { startingTimestamp, endingTimestamp } = videoStore.newSubtitle;
    if (videoStore.active === "starting timestamp" && !startingTimestamp) {
        error.value = "choose Starting timestamp from video preview"
        return true

    }
    if (videoStore.active === "ending timestamp" && !endingTimestamp) {
        error.value = "choose Ending timestamp from video preview"
        return true

    }
};


const nextStep = () => {

    if (areTimestampsFilled())
        return

    currentStep.value += 1
    videoStore.reset(steps[currentStep.value].name)
}

onMounted(() => {
    videoStore.reset(steps[currentStep.value].name)
    videoStore.newSubtitle = {}
})


const uploadVideo = async () => {
    try {
        if (!handleSubtitle())
        return
        await videoStore.uploadNewVideo()
        router.push('/videos')

    } catch (error) {


    }
}

</script>


<template>
    <div>
        <div
            class="border-none border-2 border-gray-400 py-4 flex flex-col justify-center items-center text-gray-500 gap-2">
            <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500  sm:text-base">
                <li v-for="(step, index) in steps"
                    :class="` ${index <= currentStep && 'text-purple-600 '} flex md:w-full items-center  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `">
                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" v-if="index === currentStep" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="mr-2">{{ index + 1 }}</span>
                        {{ step.stepsTitle }}
                    </span>
                </li>
            </ol>
        </div>
        <div class="w-full">
            <MuItiStepInput :step="steps[currentStep]" />
            <ErrorMessage v-show="error" :message="error" />
            <div class="flex justify-end gap-3 mt-6">
                <button v-if="currentStep < steps.length - 1" @click="nextStep"
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-900">Next</button>
                <button v-if="currentStep === steps.length - 1" @click="addNewSubtitle"
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900">Add
                    a New Subtitle</button>
                <button v-if="currentStep === steps.length - 1" @click="uploadVideo"
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-900">Upload
                    Video</button>
            </div>
        </div>
    </div>
</template>