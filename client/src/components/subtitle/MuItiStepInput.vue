<script setup>
import { ref, computed, onMounted } from 'vue'
import ErrorMessage from '../../components/ErrorMessage.vue';
import { useVideoStore } from '../../stores/video';
const { step } = defineProps(['step'])
const emit = defineEmits(['formValueChange'])
const error = ref('')
const valueinput = ref('')
const videoStore = useVideoStore()




const onChange = (e) => {

    const { name, value } = e.target;
    error.value = ''

    videoStore.$patch((state) => {
        state.newSubtitle.subtitle = value;
        if (name === 'subtitle' && value.length < 5) {
            error.value = 'Subtitle  must be at least 5 characters long.';
            return
        }
    });

}

onMounted(() => error.value = '')
</script>
<template>
    <p @click="valueinput = 'hello'">Hello</p>
    <label :for="step.name" class="capitalize">{{ step.name }}</label>
    <input :id="step.name" type="text"
        :value="step.name !== 'subtitle' ? videoStore.timeStamp : videoStore.newSubtitle.subtitle" @input="onChange"
        :name="step.name" :disabled="step.name === `subtitle` ? false : true"
        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        :placeholder="step.name === `subtitle` ? `Add ${step.name}` : `Choose ${step.name}`">
    <ErrorMessage v-show="error" :message="error" />
</template>


