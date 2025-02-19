<script setup>
import { RouterLink, useRoute } from 'vue-router'
import {
  PhArrowLeft,
  PhDotsThreeOutline,
  PhSuitcase,
  PhMapPin,
  PhCalendarDots,
} from '@phosphor-icons/vue'
import SideNav from '../components/SideNav.vue'
import DefaultPFP from '../assets/default-pfp.png'
import PostSection from '../components/section/PostSection.vue'

const route = useRoute()
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
      <div class="mx-6">
        <b class="text-lg font-semibold">{{ route.params.username }}</b>
        <p class="text-stone-500 text-sm">1,324 Posts</p>
      </div>
      <div class="grow"></div>
      <button
        class="py-1 px-4 bg-white border border-white hover:bg-white/20 text-yapperbg hover:text-white rounded-full font-semibold cursor-pointer"
      >
        Follow
      </button>
    </div>
    <div class="w-full border-b border-stone-700">
      <img src="" alt="Profile Banner" class="bg-amber-500 h-[250px] text-center" height="250px" />
      <div class="p-4">
        <div class="relative w-full h-14">
          <img
            :src="DefaultPFP"
            alt="Profile Picture"
            class="absolute bottom-0 left-0 w-48 rounded-full border-6 border-yapperbg"
          />
          <div class="absolute top-0 right-0 flex flex-row justify-end items-center gap-2">
            <button
              class="p-1.5 border border-white bg-white/20 hover:bg-white hover:text-yapperbg rounded-full cursor-pointer"
            >
              <PhDotsThreeOutline :size="20" weight="fill" />
            </button>
            <button
              class="py-1 px-4 bg-white border border-white hover:bg-white/20 text-yapperbg hover:text-white rounded-full font-semibold cursor-pointer"
            >
              Follow
            </button>
          </div>
        </div>
        <h1 class="text-3xl font-semibold">{{ route.params.username }}</h1>
        <p class="text-stone-500 mb-2">@{{ route.params.username }}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mi gravida dolor lacinia
          fermentum nec nec elit. Curabitur vel faucibus orci, nec interdum nibh.
        </p>
        <div class="flex flex-row gap-4 text-stone-500 mt-1.5">
          <span><PhSuitcase class="inline align-middle" /> Tester</span>
          <span><PhMapPin class="inline align-middle" /> Somewhere, No Where</span>
          <span><PhCalendarDots class="inline align-middle" /> Joined February 2025</span>
        </div>
        <div class="flex flex-row gap-4 text-stone-500 mt-1">
          <span><b class="text-white font-bold">123</b> Following</span>
          <span><b class="text-white font-bold">10,232</b> Followers</span>
        </div>
      </div>
    </div>
    <button
      class="w-full border-b border-stone-700 p-4 text-center text-yellow-500 hover:underline cursor-pointer hover:bg-white/10"
    >
      Load 100 new posts
    </button>
    <div class="w-full divide-y divide-stone-700 border-b border-stone-700">
      <PostSection v-for="index in 10" :key="index" class="w-full p-4" />
    </div>
    <p class="w-full p-4 text-center text-stone-500 italic">-- Nothing else to see here! --</p>
  </main>
</template>
