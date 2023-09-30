<script setup>
import { ref, onMounted, nextTick, reactive } from 'vue';
import Artplayer from 'artplayer';
import { useVideoStore } from '../../stores/video';
import { slider, loadingIcon, indicatorIcon } from '../../config/helpers';
const videoStore = useVideoStore()

const { videoSrc, subtitleSrc, thumbnailSrc } = defineProps(['videoSrc', 'subtitleSrc', 'thumbnailSrc'])

const player = ref(null)

const options = reactive({
    container: player.value,
    url: videoSrc || '',
    poster:  thumbnailSrc || '',
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


onMounted(() => {
    nextTick(() => {
        const videoholder = new Artplayer({
            ...options,
            container: player.value
        })

        videoholder.on('video:seeked', () => {
            console.log(videoholder.currentTime)
            videoStore.chooseTimestamp(videoholder.currentTime)

        })
    })
})


defineExpose({
    player,
    options
})
</script>
<template>
    <div ref="player" style="width:32.5rem  ;height:22rem;"> </div>
</template>

<style scoped></style>