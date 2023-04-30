<script setup lang="ts">
const props = defineProps({
  messages: {
    default: "",
    type: Array<string>
  }
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold">Message Feed</h2>
    <div v-for="(msg, idx) in props.messages" :key="idx">
      <RouterLink :to="`/message/${idx}`">
        {{ msg }}
      </RouterLink>
    </div>
  </div>
</template>