<script setup>
import { ref, onMounted, nextTick, reactive } from 'vue';
import Artplayer from 'artplayer';
import { useVideoStore } from '../../stores/video';

const videoStore = useVideoStore()

const { videoSrc, subtitleSrc, thumbnailSrc } = defineProps(['videoSrc', 'subtitleSrc', 'thumbnailSrc'])

const player = ref(null)

const options = reactive({
    container: player.value,
    url: videoSrc || '',
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
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
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
            tooltip: 'Bilingual',
            // icon: '<img width="22" heigth="22" src="/src/assets/img/subtitle.svg">',
            selector: [
                {
                    html: 'Display',
                    tooltip: 'Show',
                    switch: true,
                    onSwitch: function (item) {
                        item.tooltip = item.switch ? 'Hide' : 'Show';
                        art.subtitle.show = !item.switch;
                        return !item.switch;
                    },
                },
                {
                    default: true,
                    html: 'English',
                    url: subtitleSrc || '',
                },

            ],
            onSelect: function (item) {
                art.subtitle.switch(item.url, {
                    name: item.html,
                });
                return item.html;
            },
        },
        {
            html: 'Slider',
            icon: '<img width="22" heigth="22" src="/src/assets/img/state.svg">',
            tooltip: '5x',
            range: [5, 1, 10, 0.1],
            onRange: function (item) {
                return item.range + 'x';
            },
        },
    ],
    contextmenu: [
        {
            html: 'Custom menu',
            click: function (contextmenu) {
                console.info('You clicked on the custom menu');
                contextmenu.show = false;
            },
        },
    ],

    quality: [
        {
            default: true,
            html: 'Normal',
            url: videoSrc || '',
        },
    ],

    thumbnails: {
        url: thumbnailSrc || '',
        number: 60,
        column: 10,
    },

    subtitle: {
        url: subtitleSrc || '',
        type: 'srt',
        style: {
            color: '#000000',
            fontSize: '20px',
            fontWeight: "100"
        },
        encoding: 'utf-8',
    },
   
    controls: [
        {
            position: 'right',
            html: 'Control',
            index: 1,
            tooltip: 'Control Tooltip',
            style: {
                marginRight: '20px',
            },
            click: function () {
                console.info('You clicked on the custom control');
            },
        },
    ],
    icons: {
        loading: '<img src="/src/assets/img/ploading.gif">',
        state: '<img width="150" heigth="150" src="/src/assets/img/state.svg">',
        indicator: '<img width="16" heigth="16" src="/src/assets/img/indicator.svg">',
    },
})


onMounted(() => {
    nextTick(() => {
        const videoholder = new Artplayer({
            ...options,
            container: player.value
        })

        videoholder.on('video:seeked', () => {
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