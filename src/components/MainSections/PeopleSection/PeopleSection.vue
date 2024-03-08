<template>
    <SubSection title=People>
        
        <PersonIntro v-for="person in props.people" :name="person.name" :role="person.role" :intro="person.intro" :github="person.github" :twitter="person.twitter" :linkedin="person.linkedin"></PersonIntro>
        

        <h2>All Contributors</h2>
        <a href="https://github.com/grapycal/grapycal/graphs/contributors" class="p-0">
            <img class="contributors" src="https://contrib.rocks/image?repo=grapycal/grapycal" />
        </a>
    </SubSection>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Person {
    name: string;
    role: string;
    intro: string;
    github: string;
    twitter: string;
    linkedin?: string; // Use ? if linkedin is optional
}

const props = defineProps({
    people: {
        type: Array as () => Person[],
        default: [
            {
                name: "Ping-Yi Chen (eri24816)",
                role: "backend dev, frontend dev, designer",
                intro: "I love deep learning.",
                github: "eri24816",
                twitter: "eri24816",
                linkedin: "eric-chen-789894239"
            },
            {
                name: "Ping-Yu Chen (greenslime1024)",
                role: "backend dev",
                github: "greenslime1024",
            },

            {
                name: "Ian Chang (secminhr)",
                role: "backend dev, extension dev",
                intro: "Keep things simple",
                github: "secminhr"
            },
            {
                name: "Yu-Heng Li (Patrickuuuu)",
                role: "backend dev, devops, sre",
                intro: "❤️K8s ",
                github: "taro0513",
                linkedin: "Patrickuuuu"
            },
            {
                name: "Cheng-Shian Yeh (yeh-sudo)",
                role: "backend dev",
                github: "yeh-sudo",
                linkedin: "yeh-profile"
            },
            {
                name:"Wei-Hsin Yeh (weihsinyeh)",
                role:"numpy extension, opencv extension",
                github:"weihsinyeh",
                linkedin:"wei-hsin-yeh-1b4000215",
                medium:"https://medium.com/@weihsinyeh168"
            },
        ]
    }
})
</script>

<style scoped>
    
    .contributors {
        height: 50px;
        margin: 10px;
    }
</style>