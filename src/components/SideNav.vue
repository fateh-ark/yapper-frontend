<script setup>
import { RouterLink } from 'vue-router'
import {
  PhDotsThreeOutline,
  PhHouse,
  PhMagnifyingGlass,
  PhBell,
  PhUser,
  PhGear,
} from '@phosphor-icons/vue'
import ProfileButton from './button/ProfileButton.vue'
import YapperSquareLogo from '../assets/yapper-s-logo.png'
</script>

<template>
  <nav class="fixed inset-y-0 left-0 ml-12 flex flex-col justify-center items-start gap-4">
    <RouterLink to="/">
      <img :src="YapperSquareLogo" alt="logo" :width="40" class="ml-3" />
    </RouterLink>
    <div class="group flex flex-col gap-1">
      <RouterLink class="py-2 px-3 hover:bg-white/10 rounded-full flex flex-row items-center group">
        <PhHouse :size="32" />
        <p class="mx-4 text-xl group-hover:visible invisible">Home</p>
      </RouterLink>
      <RouterLink class="py-2 px-3 hover:bg-white/10 rounded-full flex flex-row items-center group">
        <PhMagnifyingGlass :size="32" />
        <p class="mx-4 text-xl group-hover:visible invisible">Explore</p>
      </RouterLink>
      <RouterLink class="py-2 px-3 hover:bg-white/10 rounded-full flex flex-row items-center group">
        <PhBell :size="32" />
        <p class="mx-4 text-xl group-hover:visible invisible">Notification</p>
      </RouterLink>
      <RouterLink class="py-2 px-3 hover:bg-white/10 rounded-full flex flex-row items-center group">
        <PhUser :size="32" />
        <p class="mx-4 text-xl group-hover:visible invisible">Profile</p>
      </RouterLink>
      <RouterLink class="py-2 px-3 hover:bg-white/10 rounded-full flex flex-row items-center group">
        <PhGear :size="32" />
        <p class="mx-4 text-xl group-hover:visible invisible">Settings</p>
      </RouterLink>
    </div>
    <button class="py-2 px-3 hover:bg-white/10 rounded-full flex flex-row items-center group">
      <ProfileButton />
      <div class="mx-2 group-hover:visible invisible">
        <b>John Doe</b>
        <p class="text-stone-500">@johndoe</p>
      </div>
      <PhDotsThreeOutline :size="20" weight="fill" class="mx-4 group-hover:visible invisible" />
    </button>
  </nav>
</template>
