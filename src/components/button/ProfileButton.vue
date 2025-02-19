<script setup>
import { RouterLink } from 'vue-router'
import DefaultPFP from '../../assets/default-pfp.png'

const props = defineProps({
  size: {
    type: String,
    default: '40px',
  },
  img: {
    type: String,
    default: DefaultPFP,
  },
  username: {
    type: String,
    default: 'jhondoe',
  },
})
</script>

<template>
  <RouterLink :to="`/@${props.username}`">
    <img
      :src="props.img"
      alt="pfp"
      :class="`w-[${props.size}] h-[${props.size}] aspect-square bg-stone-500 rounded-full`"
      :width="props.size"
    />
  </RouterLink>
</template>
