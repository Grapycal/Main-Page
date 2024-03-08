<template>
    <div class="card" :class="{reverse: props.reverse}">

        <!-- use the img prop -->
        <video v-if="isVideo" class="img" :src="props.img" alt="feature video" autoplay loop muted playsinline></video>
        <img v-else class="img" :src="props.img" alt="feature image">
        <div class="text">
            <h1>
                {{ props.title }}
            </h1>
            <p class="content">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "Title"
    },
    img: {
        type: String,
        default: "https://i.imgur.com/npw0hVR.png"
    },
    reverse: {
        type: Boolean,
        default: false
    }
})
const isVideo = props.img.endsWith(".mp4")
</script>

<style scoped>
.card {
    padding: 20px;
    width: 100%;
    max-width: 1188px;
    border-radius: 13px;
    border: solid 3px #5D2A7C;
    background-color: #27163C60;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    flex-basis: 100%;
}
/* if props.reverse, row-reverse */

.card:not(.reverse) {
    flex-direction: row;
    /* align-self: flex-start; */
    left: -10px;
}

.card.reverse {
    flex-direction: row-reverse;
    align-self: flex-end;
    right: -10px;
}


.text {
    padding: 20px;
    flex: 0 1 500px;
}

.content{
    font-size: 16px;
}

.img {
    /* needed for responsiveness */
    width: 0px; 
    max-width: 500px;
    
    border-radius: 13px;
    margin: 20px;
    height: 240px;
    flex: 1 1 300px;
    object-fit: cover;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>