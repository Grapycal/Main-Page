<template>
    <a :href="props.link" class="text-white py-2 px-4 rounded-full flex items-center text-gray-400">
        
        <img v-if="props.icon" :src="props.icon" alt="icon" class="w-4 h-4 inline-block mr-2 fill-white">
        <slot></slot>
        {{ props.text }}
        
    </a>
</template>

<script setup lang="ts">
// props: text, link, icon
const props = defineProps({
    text: {
        type: String,
        default: "Button"
    },
    link: {
        type: String,
        default: "#"
    },
    icon: {
        type: String,
        default: ""
    }
})
</script>