<template>
    <h1> {{ props.title }}</h1>
    <div class="container">
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

</script>