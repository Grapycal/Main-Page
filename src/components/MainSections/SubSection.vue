<template>
    <h1 :id="titleId">{{ props.title }}</h1>
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