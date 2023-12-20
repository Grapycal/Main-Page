<template>
    <div class="card" :class="{reverse: props.reverse}">

        <!-- use the img prop -->
        <img class="img" :src="props.img" alt="feature image">
        <div class="text">
            <h1>
                <slot name="title"></slot>
            </h1>
            <p class="content">
                <slot name="content"></slot>
            </p>
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
    flex: 1 1 500px;
}

h1{
    font-size: 40px;
}

.content{
    font-size: 20px;
}

.img {
    /* needed for responsiveness */
    width: 0px; 
    
    border-radius: 13px;
    margin: 20px;
    height: 200px;
    flex: 1 0.1 30%;
    object-fit: cover;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>