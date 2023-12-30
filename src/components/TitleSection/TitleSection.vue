<template>
    <div class="bg-img-container" ref="bgImg">
    <div class="bg-img-underlay"></div>
        <img class="bg-img" src="https://i.imgur.com/lTle1Kb.png" alt="background image">
    </div>

    <div class="content">
        <!-- two column -->
        <div class="left">
            <ResponsiveXPos :x=20>
                <div class="a">
                    A visual programming language based on Python 
                </div>
            </ResponsiveXPos>
            <ResponsiveXPos :x=40 class="title-container">
                <img src="@/assets/icon.png" class="icon" alt="icon">
                <div class="b">
                    <div class="bar1"></div>
                    Grapycal
                </div>
            </ResponsiveXPos>
            <ResponsiveXPos :x=70>
                <div class="c">
                    Interactivity counts
                    <div class="bar2"></div>
                </div>
            </ResponsiveXPos>
            <div class="flex flex-column w-full justify-center mt-16 gap-4 flex-wrap">
                <!-- two buttons , one for download, one for go to github -->
                <!-- use tailwind -->
                <TitleSectionButton class="bg-purple-button  border-2 border-purple-button-border " text="Download" link="#get-started"></TitleSectionButton>

                <TitleSectionButton class="bg-gray-900 border-2 border-gray-700" text="Visit GitHub repository" link="https://github.com/grapycal/grapycal" ><div class="fa fa-2x fa-github"> &nbsp;</div></TitleSectionButton>
                <TitleSectionButton class="bg-gray-900 border-2 border-gray-700" text="Join Discord" link="https://discord.com/invite/adNQcS42CT" icon="https://www.svgrepo.com/show/353655/discord-icon.svg"></TitleSectionButton>
            </div>
                
        </div>
        <div class="right">
            <div class="intro-video-container">
                
                <iframe class="intro-video" src="https://www.youtube.com/embed/Dj_KtQUV9jo?si=OivIT33t53nah6tV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//let bg-img scroll 80% slower than the page

// export default {
//     name: 'TitleSection',
//     components: {
//         ResponsiveXPos
//     },
//     mounted() {
//         window.addEventListener('scroll', this.handleScroll)
//     },
//     beforeDestroy() {
//         window.removeEventListener('scroll', this.handleScroll)
//     },
//     methods: {
//         handleScroll() {
//             this.$refs.bgImg.style.top = `${window.scrollY * 0.8}px`
//             this.$refs.bgImg.style.opacity = `${1 - window.scrollY / 1500}`
//         }
//     }
// }

// this is the ts version of the above code
import { onMounted, onBeforeUnmount, ref } from 'vue'
const bgImg: any = ref(null)
const handleScroll = () => {
    // prevent 'bgImg.value' is possibly 'null'
    
    bgImg.value.style.top = `${window.scrollY * 0.8}px`
    // bgImg.value.style.opacity = `${1 - window.scrollY / 1000}`
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>


<style scoped>

.bg-img-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

.bg-img-underlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: #090E16;
    z-index: -1;
}
    

.bg-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0.0) 100%);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    opacity: 0.8;
}

.content {
    height: 100vh;
    min-height: 850px;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 50px 50px;
    display: flex;
    flex-direction: row;
    /* enable wrap */
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
}
.left {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
}
.right {
    flex-grow: 0.5;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro-video-container {
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    min-width: 250px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}

.intro-video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
.a{
    font-family: 'poppins', sans-serif;
    font-size: 24px;
    height: 50px;
    color: var(--mauve-7);
}
.b{
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 100px;
    color: var(--mauve-5);
    /* text ouline */
    text-shadow: 0 0 10px #000000;

}
.c{
    position: relative;
    font-family: 'poppins', sans-serif;
    font-size: 32px;
    color: var(--mauve-7);
}

.icon {
    width: 100px;
    height: 100px;
}
/* take care of narrow screen */
@media only screen and (max-width: 600px) {
    .content {
        padding: 50px 20px;
    }
    .intro-video-container {
        padding-top: 56.25%;
    }
    .a{
        font-size: 18px;
    }
    .b{
        font-size: 50px;
    }
    .c{
        font-size: 24px;
    }
    .icon {
        width: 70px;
        height: 70px;
    }
}

.bar1 {
    position: absolute;
    width: 3.3em;
    height: 0.04em;
    background-color: #06C206;
    bottom:0.35em;
    left: -10px;
    z-index: -1;
}

.bar2 {
    position: absolute;
    width: 7em;
    height: 4px;
    background-color: #075607;
    bottom:-0.3em;
    left: 70px;
}

.title-container {
    gap: 20px;
}

</style>