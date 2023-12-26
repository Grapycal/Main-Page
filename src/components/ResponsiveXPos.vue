<template>
    <div class="cont">
        <div class="left"></div>
        <slot class="slot"></slot>
        <div class="right"></div>
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    x: {
        type: Number,
        default: 50
    },
})

</script>

<style scoped>
.cont{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.left {
    flex-grow: v-bind(x);
    flex-shrink: 1;
}
.right {
    flex-grow: v-bind(100 - x);
    flex-shrink: 1;
}
.slot {
    flex-grow: 1;
    flex-shrink: 0;
}
</style>