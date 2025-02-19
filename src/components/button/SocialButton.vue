<script setup>
const props = defineProps({
  icon: Object,
  text: String,

  isFilled: Boolean,
})
</script>

<template>
  <button class="flex items-center cursor-pointer text-stone-500 gap-1 group hover:text-white">
    <div class="relative">
      <component :is="props.icon" size="20" :weight="props.isFilled ? 'fill' : 'regular'" />
      <div
        class="w-7 h-7 left-1/2 top-1/2 -translate-1/2 absolute rounded-full group-hover:bg-white/20"
      ></div>
    </div>
    <p v-if="props.text">{{ props.text }}</p>
  </button>
</template>
