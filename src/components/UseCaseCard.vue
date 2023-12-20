<template>
    <div class="card">

        <!-- use the img prop -->
        <img class="img" :src="props.img" alt="feature image">
        <div class="text">
            <p class="content">
                <slot></slot>
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
    }
})
</script>

<style scoped>
.card {
    padding: 10px;
    flex: 0 0 250px;
    border-radius: 13px;
    border: solid 3px #5D2A7C;
    background-color: #27163C60;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0px;
}



.text {
    flex: 0 1;
    align-self: center;
}

h1{
    font-size: 34px;
}

.content{
    font-size: 16px;
}

.img {
    flex: 1 1 500px;
    min-height: 0px;
    border-radius: 13px;
    height: 160px;
    object-fit: cover;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>