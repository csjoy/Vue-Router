<script setup lang="ts">
// import { ref } from 'vue';
// import { onBeforeRouteLeave, useRoute } from 'vue-router';

// import { useRouter } from 'vue-router';
// const router = useRouter()
// router.go(-2)

// const route = useRoute()
// const { user } = route.query

// const user = ref("")
const props = defineProps({
  // user: String
  age: Number
})

import Default from '../layouts/Default.vue';
// const props = defineProps(["currentLayout"])
const emits = defineEmits(["update:currentLayout"])
emits("update:currentLayout", Default)

// if (!route.params || !route.params.user) {
//   user.value = "Joy"
// }
// onBeforeRouteLeave((to, from, next) => {
//   const ans = window.confirm(
//     "You are about to leave the About page. Are you sure?"
//   )
//   console.log(to, from)
//   next(!!ans)
// })
</script>

<template>
  <!-- <div>About {{ props.user }}</div> -->
  <h1>Age: {{ props.age }}</h1>
</template>