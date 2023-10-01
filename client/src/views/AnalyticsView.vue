<template>
    <div class="h-[70%] w-[70%] sm:px-8 md:px-10 sm:py-8">
        <main class="container mx-auto rounded-sm shadow-md  bg-transparent pt-5">

            <div class="chartgrid  md:p-16 h-96" v-if="videoStore.allVideos?.some(video => video.view_count > 0)">
                <Bar v-if="loaded" :options="chartOptions" :data="chartData" />
            </div>

            <div class="flex justify-center items-center h-full py-20" v-else>
                <h1 class="font-bold text-sm md:text-xl lg:text-2xl">No View Analytics Detected📈 </h1>
            </div>

        </main>
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { useVideoStore } from '../stores/video';
import { getRandomColor } from '../config/helpers';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const loaded = ref(false)
const chartData = ref(null)
const chartOptions = {
    responsive: true, // not necessary, default is `true`,
    maintainAspectRatio: false, // default is `true`, default `aspectRatio` is 2
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: '',
                drawBorder: false
            }
        },
        x: {
            grid: {
                display: false,
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}



const videoStore = useVideoStore()


onMounted(async () => {
    try {

        await videoStore.getallVideos()

        chartData.value = {
            labels: videoStore.allVideos?.map(video => video.video_title.slice(0, 20)),
            datasets: [
                {
                    label: 'View Count',
                    backgroundColor: videoStore.allVideos?.map(item => getRandomColor()),
                    data: videoStore.allVideos?.map(video => video.view_count),
                    borderWidth: 1,
                    borderColor: "#000000"
                }
            ]
        }
        loaded.value = true
    } catch (e) {
        console.error(e)
    }
})
</script>

<style  scoped>
.chartgrid {

    display: grid;
    gap: 1em;
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "a h"
        "a c"
        "a f";
    /* not necessary, but just to be explicit */
    margin: 1em;
}
</style>