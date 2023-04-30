<script setup lang="ts">
const props = defineProps({
  id: {
    default: "",
    type: String
  },
  message: {
    default: () => ({ sent: "" }),
    type: Object
  }
})
</script>

<template>
  <h3>Message info: </h3>
  <p>{{ props.message.sent }}</p>
</template> 