<template>
    <h1 :id="titleId" class="text-4xl font-bold mb-5 mt-10 text-gray-300
    ">{{ props.title }}</h1>
    <div class="cont">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
// props: title

const props = defineProps({
    title: {
        type: String,
        default: "Title"
    }
})

const titleId = props.title.toLowerCase().replace(" ", "-")

</script>