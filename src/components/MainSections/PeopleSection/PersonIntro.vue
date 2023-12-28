<template>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="person-intro mb-4">
        <div class="flex flex-row gap-4 mb-2">
        <h3 class="text-2xl font-bold text-gray-300">{{ props.name }}</h3>
            <div class="flex flex-row gap-1">
                <a v-if="props.github" :href="'https://github.com/'+props.github" target="_blank" rel="noopener noreferrer" class="fa fa-brands fa-github  flex content-center justify-center"> </a>
                <a v-if="props.twitter" :href="'https://x.com/'+props.twitter" target="_blank" rel="noopener noreferrer" class="fa fa-brands fa-twitter  flex content-center justify-center"></a>
                <a v-if="props.linkedin" :href="'https://www.linkedin.com/in/'+props.linkedin" target="_blank" rel="noopener noreferrer" class="fa fa-brands fa-linkedin  flex content-center justify-center"></a>
            </div>
        </div>
        <p>{{ props.role }}</p>
        <p>{{ props.intro }}</p>
        
        
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
    intro: {
        type: String,
        default: ""
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

<style scoped>
.fa{
    font-size: 1.7rem;
}
</style>