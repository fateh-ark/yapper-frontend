<script setup>
import { RouterLink } from 'vue-router'
import ProfileButton from '../button/ProfileButton.vue'
import SocialButton from '../button/SocialButton.vue'
import { PhShare, PhHeart, PhChatText, PhEye, PhDotsThreeOutline } from '@phosphor-icons/vue'

const props = defineProps({
  username: {
    type: String,
    default: 'jhondoe',
  },
  displayName: {
    type: String,
    default: 'John Doe',
  },
  pfpImage: String,
  textContent: String,
  isClickable: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <component
    :is="props.isClickable ? 'RouterLink' : 'div'"
    to="/post/1"
    class="flex flex-row gap-3"
    :class="{ 'hover:bg-white/10': props.isClickable }"
  >
    <ProfileButton class="shrink-0" />
    <div class="grow">
      <div class="flex flex-row gap-2 items-center mb-1">
        <RouterLink :to="`/@${props.username}`" class="font-semibold hover:underline">{{
          props.displayName
        }}</RouterLink>
        <p class="text-stone-500">@{{ props.username }}</p>
        <div class="w-1 h-1 bg-stone-500 rounded-full"></div>
        <p class="text-stone-500 hover:underline">10h</p>
        <div class="grow"></div>
        <SocialButton :icon="PhDotsThreeOutline" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur neque velit, et
        dictum leo aliquet nec. Nam porta a quam ut finibus. Maecenas interdum fermentum sapien, non
        sodales ante eleifend nec. Phasellus eget elit massa. Phasellus faucibus molestie felis, eu
        pellentesque nisi egestas eu.
      </p>
      <div class="flex justify-between mt-1.5">
        <SocialButton :icon="PhHeart" text="1.2K" color="red-500" />
        <SocialButton :icon="PhChatText" text="843" color="amber-500" />
        <SocialButton :icon="PhEye" text="11.3K" />
        <SocialButton :icon="PhShare" />
      </div>
    </div>
  </component>
</template>
