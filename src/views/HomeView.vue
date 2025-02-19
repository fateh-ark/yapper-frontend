<script setup>
import SideNav from '../components/SideNav.vue'
import NewPostSection from '../components/section/NewPostSection.vue'
import PostSection from '../components/section/PostSection.vue'
import { ref } from 'vue'

const isForYou = ref('true')
</script>

<template>
  <SideNav />
  <main class="py-14 md:w-3xl sm-2xl w-full h-full min-h-screen border-x border-stone-700 mx-auto">
    <div
      class="fixed h-14 md:w-3xl sm-2xl w-full top-0 left-1/2 -translate-x-1/2 border-x border-b border-stone-700 flex flex-row text-lg font-semibold bg-yapperbg/50 backdrop-blur-sm z-20"
    >
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
    <NewPostSection class="w-full border-b border-stone-700 p-4" />
    <button
      class="w-full border-b border-stone-700 p-4 text-center text-yellow-500 hover:underline cursor-pointer hover:bg-white/10"
    >
      Load 100 new posts
    </button>
    <div class="w-full divide-y divide-stone-700 border-b border-stone-700">
      <PostSection v-for="index in 10" :key="index" class="w-full p-4" :isClickable="true" />
    </div>
    <p class="w-full p-4 text-center text-stone-500 italic">-- Nothing else to see here! --</p>
  </main>
</template>
