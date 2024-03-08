<template>
    <div class="card" v-on:click="openDialog">

        <!-- use the img prop -->
        <img class="img" :src="props.img" alt="feature image">
        <div class="text">

            <p class="content">
                {{ title }}
            </p>

        </div>
    </div>
    <DialogRoot v-model:open="data.opened">
        
        <DialogPortal>
              <DialogOverlay class="DialogOverlay" />
              <DialogContent
                class="DialogContent"
              >
                <DialogTitle class="DialogTitle">
                  {{ props.title  }}
                </DialogTitle>
                <DialogDescription class="DialogDescription">
                </DialogDescription>
                <img class="img" :src="props.img" alt="feature image">
                <slot></slot>
                <div :style="{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }">
                  <DialogClose as-child>
                    <button
                      class="Button green"
                    >
                      OK
                    </button>
                  </DialogClose>
                </div>
                <DialogClose
                  class="IconButton"
                  aria-label="Close"
                >
                  <Icon icon="lucide:x" />
                </DialogClose>
              </DialogContent>
            </DialogPortal>
    </DialogRoot>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'

const props = defineProps({
    img: {
        type: String,
        default: "https://i.imgur.com/npw0hVR.png",
    },
    title: {
        type: String,
        default: "Title"
    }
})

const data = reactive({
    opened: false
})

const openDialog = () => {
    data.opened = true
}
</script>

<style scoped>
.card {
    padding: 10px;
    flex: 0 0 250px;
    border-radius: 13px;
    background-color: var(--mauve-12);
    border: solid 1px var(--mauve-11);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0px;
}


.text {
    flex: 0 1;
    align-self: center;
}

h1{
    font-size: 34px;
}

.content{
    font-size: 16px;
}

.img {
    flex: 1 1 500px;
    min-height: 0px;
    border-radius: 3px;
    height: 500px;
    object-fit: cover;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}



button,
fieldset,
input {
  all: unset;
}

.DialogOverlay {
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  border-radius: 6px;
  background-color: var(--mauve-12);
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 800px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  margin: 0;
  font-weight: 500;
  font-size: 17px;
}

.DialogDescription {
  margin: 10px 0 20px;
  font-size: 15px;
  line-height: 1.5;
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
}
.Button.grass {
  box-shadow: 0 2px 10px var(--black-a7);
}
.Button.grass:hover {
  background-color: var(--mauve-3);
}
.Button.grass:focus {
  box-shadow: 0 0 0 2px black;
}
.Button.green {
  background-color: var(--green-4);
  color: var(--green-11);
}
.Button.green:hover {
  background-color: var(--green-5);
}
.Button.green:focus {
  box-shadow: 0 0 0 2px var(--green-7);
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--grass-11);
  position: absolute;
  top: 10px;
  right: 10px;
}
.IconButton:hover {
  background-color: var(--grass-4);
}
.IconButton:focus {
  box-shadow: 0 0 0 2px var(--grass-7);
}

.Fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.Label {
  font-size: 15px;
  color: var(--grass-11);
  width: 90px;
  text-align: right;
}

.Input {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: var(--grass-11);
  box-shadow: 0 0 0 1px var(--grass-7);
  height: 35px;
}
.Input:focus {
  box-shadow: 0 0 0 2px var(--grass-8);
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>