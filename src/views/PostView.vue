<script setup>
import { RouterLink } from 'vue-router'
import { PhArrowLeft } from '@phosphor-icons/vue'
import SideNav from '../components/SideNav.vue'
import PostSection from '../components/section/PostSection.vue'
import NewPostSection from '../components/section/NewPostSection.vue'
</script>

<template>
  <SideNav />
  <main class="py-14 md:w-3xl sm-2xl w-full h-full min-h-screen border-x border-stone-700 mx-auto">
    <div
      class="fixed px-4 h-14 md:w-3xl sm-2xl w-full top-0 left-1/2 -translate-x-1/2 border-x border-b border-stone-700 flex flex-row items-center bg-yapperbg/50 backdrop-blur-sm z-20"
    >
      <RouterLink to="/" class="group relative">
        <PhArrowLeft :size="20" weight="bold" />
        <div
          class="w-7 h-7 left-1/2 top-1/2 -translate-1/2 absolute rounded-full group-hover:bg-white/20"
        ></div>
      </RouterLink>
      <b class="text-xl font-semibold mx-6">Post</b>
      <div class="grow"></div>
      <button
        class="py-1 px-4 bg-white border border-white hover:bg-white/20 text-yapperbg hover:text-white rounded-full font-semibold cursor-pointer"
      >
        Reply
      </button>
    </div>
    <PostSection class="w-full p-4 border-b border-stone-700" />
    <NewPostSection class="w-full border-b border-stone-700 p-4" :isReply="true" />
    <button
      class="w-full border-b border-stone-700 p-4 text-center text-yellow-500 hover:underline cursor-pointer hover:bg-white/10"
    >
      Load 2 new replies
    </button>
    <div class="w-full divide-y divide-stone-700 border-b border-stone-700">
      <PostSection v-for="index in 5" :key="index" class="w-full p-4" :isClickable="true" />
    </div>
    <p class="w-full p-4 text-center text-stone-500 italic">-- Nothing else to see here! --</p>
  </main>
</template>
