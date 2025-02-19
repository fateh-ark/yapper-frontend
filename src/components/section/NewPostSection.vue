<script setup>
import { ref, computed } from 'vue'
import ProfileButton from '../button/ProfileButton.vue'
import { PhPaperPlaneRight } from '@phosphor-icons/vue'
import { CircleProgressBar } from 'circle-progress.vue'

const props = defineProps({
  maxCharacters: {
    type: Number,
    default: 250,
  },
  isReply: Boolean,
})

const content = ref('')
const charCount = computed(() => {
  return content.value.length
})
</script>

<template>
  <div class="flex flex-row gap-3">
    <ProfileButton class="shrink-0" />
    <div class="grow">
      <textarea
        id="content"
        :rows="props.isReply ? 2 : 3"
        v-model="content"
        :placeholder="props.isReply ? 'Reply to this Yap' : 'What do you want to Yap about?'"
        class="w-full text-xl outline-none resize-none field-sizing-content peer"
      ></textarea>
      <p v-if="props.isReply" class="text-stone-500 invisible peer-focus:visible">
        Replying to <span class="text-yellow-500">@Someone</span>
      </p>
      <hr class="border-stone-700 my-3" />
      <div class="w-full flex flex-row gap-3 items-center">
        <p
          class="grow text-right"
          :class="[charCount <= props.maxCharacters ? 'text-stone-500 ' : 'text-red-500 font-bold']"
        >
          {{ charCount }}/{{ props.maxCharacters }}
        </p>
        <CircleProgressBar
          :value="charCount"
          :max="props.maxCharacters"
          :size="26"
          strokeWidth="15px"
          :rounded="true"
          colorFilled="#fb2c36"
          colorUnfilled="#f0b100"
          colorBack="#44403b"
          :startAngle="0"
        />
        <div class="h-6 w-px border-l border-stone-500"></div>
        <button
          class="bg-white hover:bg-amber-100 cursor-pointer text-black rounded-full font-semibold px-4 py-1 flex flex-row gap-1 items-center"
        >
          <PhPaperPlaneRight weight="fill" />
          {{ props.isReply ? 'Reply' : 'Post' }}
        </button>
      </div>
    </div>
  </div>
</template>
