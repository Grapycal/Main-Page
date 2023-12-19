<template>
    <div class="card" :class="{reverse: props.reverse}">

        <!-- use the img prop -->
        <img class="img" :src="props.img" alt="feature image">
        <div class="text">
            <h1>
                <slot name="title"></slot>
            </h1>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    img: {
        type: String,
        default: "https://i.imgur.com/npw0hVR.png"
    },
    reverse: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.card {
    padding: 30px;
    height: 277px;
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
}
/* if props.reverse, row-reverse */

.card:not(.reverse) {
    flex-direction: row;
    align-self: flex-start;
    left: -10px;
}

.card.reverse {
    flex-direction: row-reverse;
    align-self: flex-end;
    right: -10px;
}


.text {
    padding: 20px;
    flex-grow: 1;
    flex-shrink: 1
}
.img {
    border-radius: 13px;
    margin: 20px;
    width:40%;
    flex-shrink: 0;
    height:100%;
    object-fit: cover;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>