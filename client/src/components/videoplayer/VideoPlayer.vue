<script setup>
import { ref, onMounted, nextTick, reactive } from 'vue';
import Artplayer from 'artplayer';
import { useVideoStore } from '../../stores/video';
import { slider, loadingIcon, indicatorIcon } from '../../config/helpers';
import { watchedVideo } from '../../api/videoApi';
const videoStore = useVideoStore()

const { videoSrc, subtitleSrc, thumbnailSrc, id } = defineProps(['videoSrc', 'subtitleSrc', 'thumbnailSrc', 'id'])
console.log(subtitleSrc)
console.log(videoStore.srtFile)
const player = ref(null)
const hasSentApiCall = ref(false);
const isWatching = ref(false);

const options = reactive({
    // Artplayer options
    container: player.value,
    url: videoSrc || '',
    poster: thumbnailSrc || '',
    volume: 0.5,
    isLive: false,
    muted: true,
    autoplay: false,
    pip: true,
    autoSize: true,
    autoMini: true,
    screenshot: true,
    setting: true,
    loop: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    airplay: true,
    theme: '#23ade5',
    lang: navigator.language.toLowerCase(),
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    settings: [
        {
            width: 200,
            html: 'Subtitle',
            selector: [
                {
                    default: true,
                    html: 'English',
                    url: subtitleSrc || '',
                },

            ],
        },

    ],


    quality: [
        {
            default: true,
            html: 'auto',
            url: videoSrc || '',
        },
    ],


    subtitle: {
        url: subtitleSrc || '',
        type: 'srt',
        style: {
            color: '#000000',
            fontSize: '20px',
        },
        encoding: 'utf-8',
    },

    icons: {
        loading: `<img src=${loadingIcon}>`,
        state: `<img width="150" heigth="150" src=${slider}>`,
        indicator: `<img width="16" heigth="16" src=${indicatorIcon}>`,
    },
})

// Lifecycle hook: Initialize Artplayer
onMounted(() => {
    nextTick(() => {
        // Create a new instance of the Artplayer video player with provided options.
        const videoholder = new Artplayer({
            ...options,
            container: player.value
        })



         // Handle the 'video:seeked' event when the user seeks to a different position in the video.
        videoholder.on('video:seeked', () => {
            //for adding subtitles
            //// Update the chosen timestamp in the video store based on the current playback time.
            videoStore.chooseTimestamp(videoholder.currentTime)

        })


        videoholder.on('play', () => {
            
            isWatching.value = true;

        })


        // Handle the 'video:timeupdate' event, triggered as the video playback progresses.
        videoholder.on('video:timeupdate', async() => {
            if (!hasSentApiCall.value && id) {
                const tenPercent = videoholder.duration * 0.5;
                if (isWatching.value && videoholder.currentTime >= tenPercent) {

                    // If a certain percentage of the video has been watched and an API call hasn't been sent yet,
                    // make an API call to mark the video as watched.
                    await watchedVideo(id)


                    // Reset the 'isWatching' flag to prevent additional API calls.
                    isWatching.value = false;

                    // Set 'hasSentApiCall' to true to indicate that the API call has been sent.
                    hasSentApiCall.value = true
                }
            }
        });

    })
})

// Expose refs and options
defineExpose({
    player,
    options
})
</script>
<template>
      <!-- Artplayer container -->
    <div ref="player" style="width:32.5rem  ;height:22rem;"> </div>
</template>

<style scoped></style>