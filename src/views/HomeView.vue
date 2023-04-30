<script setup lang="ts">
// import { useRouter } from 'vue-router';
// const router = useRouter()
// router.push("/messages")
import Welcome from "../components/Welcome.vue"
// const props = defineProps(["currentLayout"])
const emits = defineEmits(["update:currentLayout"])
emits("update:currentLayout", Welcome)
</script>

<template>
  <div>Hello from HomeView</div>
</template>