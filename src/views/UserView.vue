<script setup lang="ts">
import { useRoute } from 'vue-router';

// import { useRoute } from 'vue-router';
// const route = useRoute()

// import users from "../assets/users"
// import { ref } from 'vue';
// const name = ref("")
// const age = ref("")

// const props = defineProps(["id"])
const route = useRoute()
// name.value = users[props.id - 1].name
// age.value = users[props.id - 1].age
</script>

<template>
  <div>
    <!-- <h1>About a user: {{ props.id }}</h1>
    <h2>Name: {{ name }}</h2>
    <p>Age: {{ age }}</p> -->

    <h1>About a user: {{ route.params.id }}</h1>
    <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" :to="`/user/${route.params.id}/info`">
      Info
    </RouterLink>
    <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" :to="`/user/${route.params.id}/extra`">
      Extra
    </RouterLink>

    <RouterView />
  </div>
</template>