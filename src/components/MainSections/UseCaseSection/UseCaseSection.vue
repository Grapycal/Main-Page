<template>
    <div class="card-container">
        <!-- use v for to generate cards -->
        <UseCaseCard v-for="usecase in usecases" :key="usecase.id" :img="usecase.img" :title="usecase.title">
            {{ usecase.content }}
        </UseCaseCard>
    </div>
</template>

<script setup lang="ts">
// props: title

const props = defineProps({
    title: {
        type: String,
        default: "Title"
    },
    usecases: {
        type: Array<
            {
                id: number,
                img: string,
                content: string,
                title: string
            }
        >,
        default: () => [
            {
                id: 1,
                img: "https://i.imgur.com/egHMKy5.png",
                content: "Deep Learning very good ouo",
                title: "Deep Learning"
            },
            {
                id: 2,
                title: "Fractal",
                img: "https://i.imgur.com/McUod9U.png",
                content: "",
            },
            {
                id: 3,
                img: "https://i.imgur.com/ZaKkvlb.png",
                title: "Image Processing",
            },
            {
                id: 3,
                img: "https://i.imgur.com/89zVRqf.png",
                title: "Physics Simulation",
            }
        ]
    }

})



</script>

<style scoped>
.card-container {
    overflow-x: scroll;
    display: flex;
    height: 250px;
    padding: 20px 20px;
    margin: auto;
    gap: 20px;
    justify-items: start;
}
</style>