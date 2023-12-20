<template>
    <div class="person-intro">
        <h3>{{ props.name }}</h3>
        <p>{{ props.role }}</p>
    </div>
</template>

<script setup lang="ts">
// props: name, img, role, github, twitter, linkedin
import { defineProps } from 'vue'
const props = defineProps({
    name: {
        type: String,
        default: "Name"
    },
    img: {
        type: String,
        default: "https://i.imgur.com/npw0hVR.png"
    },
    role: {
        type: String,
        default: "Role"
    },
    github: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    }
})
</script>