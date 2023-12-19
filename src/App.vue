<script setup lang="ts">
</script>

<template>
  <header>
    
  </header>
  <TitleSection />

  <div class="main-container">
    <main>
      <div style="position: relative;">
        <FeatureSection />
        <div class="bg-img">
          <img src="https://i.imgur.com/npw0hVR.png" alt="bg" />
          <div class="bg-overlay"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.bg-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
}

.bg-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}

.bg-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-container{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

main{
  /* max-width: 1600px; */
  margin: 0 auto;
  flex-grow: 1;
  height: 100%;
}

</style>
