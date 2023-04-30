<script setup lang="ts">
const props = defineProps({
  id: {
    default: "",
    type: String,
  },
  message: {
    default: () => ({ author: "" }),
    type: Object
  }
})
</script>

<template>
  <h3>Author: </h3>
  <p>{{ props.message.author }}</p>
</template>