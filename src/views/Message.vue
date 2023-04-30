<script setup lang="ts">
const props = defineProps({
  id: Number,
  content: {
    default: "",
    type: String
  }
})
</script>

<template>
  <div>
    <p>{{ props.content }} </p>
  </div>
</template>