<template>
    <img class="bg-img" src="https://i.imgur.com/D3PBtFb.png" alt="background image">
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
        </div>
        <div class="right">
            <div class="intro-video-container">
                
                <iframe class="intro-video" src="https://www.youtube.com/embed/Dj_KtQUV9jo?si=OivIT33t53nah6tV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>




.bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
}
.content {
    height: 100vh;
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
    min-width: 300px;
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

}
.c{
    position: relative;
    font-family: 'poppins', sans-serif;
    font-size: 36px;
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