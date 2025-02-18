<script setup>
import PostCard from '../components/card/PostCard.vue'
import { ref } from 'vue'

const isForYou = ref('true')
</script>

<template>
  <main class="md:w-3xl sm-2xl w-full h-full min-h-screen border-x border-stone-700 mx-auto">
    <div class="sticky w-full border-b border-stone-700 flex flex-row text-lg font-semibold">
      <button
        class="grow px-2 pt-3 hover:bg-white/10 cursor-pointer"
        :class="{ 'text-stone-500 pb-3': !isForYou }"
      >
        Yaps for you
        <div v-if="isForYou" class="h-1 w-1/2 mx-auto mt-2 bg-yellow-500 rounded-full"></div>
      </button>
      <button
        class="grow px-2 pt-3 hover:bg-white/10 cursor-pointer"
        :class="{ 'text-stone-500 pb-3': isForYou }"
      >
        Followed Yappers
        <div v-if="!isForYou" class="h-1 w-1/2 mx-auto mt-2 bg-yellow-500 rounded-full"></div>
      </button>
    </div>
    <PostCard class="w-full border-b border-stone-700 p-4" />
  </main>
</template>
