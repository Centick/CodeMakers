<template>
    <div class="section video-modal__section">
        <div class="cross" @click="close()">&#215;</div>
        <iframe class="video-modal__video" :src="current_video.src" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script setup lang="ts">
    // Define Props
    const props = defineProps({
        "current_video": {
            type: Object,
            required: true
        }
    });

    // Define Emits
    const emits = defineEmits(['close']);

    // Close Function
    const close = (): void => {
        emits('close');
    };
</script>

<style scoped>
    .video-modal__section{
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-auto-flow: row;
        justify-items: center;
        align-content: center;
        padding: 50px;
        z-index: 5;
        top: 0;
        left: 0;
    }
    .video-modal__section::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: -1;
    }
    .video-modal__video{
        width: 100%;
        max-width: 1280px;
        //padding: 0 50px;
        //aspect-ratio: 16 / 9;
        height: 70vh;
    }
    .cross{
        position: absolute;
        font-size: 54px;
        color: var(--colorWhite);
        top: 75px;
        right: 10%;
        cursor: pointer;
        transition: color .2s ease;
    }
    .cross:hover{
        color: var(--colorBlue);
    }
</style>