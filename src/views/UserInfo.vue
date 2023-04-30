<script setup lang="ts">
import { onBeforeRouteUpdate } from "vue-router";
import users from "../assets/users"
import { ref } from "vue";

const props = defineProps(["id"])
const name = ref("")
const age = ref("")
name.value = users[props.id - 1].name
age.value = users[props.id - 1].age

onBeforeRouteUpdate((to, from, next) => {
  name.value = users[props.id - 1].name
  age.value = users[props.id - 1].age
  console.log(to, from)
  next()
})
</script>

<template>
  <h1>About a user: {{ props.id }}</h1>
  <h2>Name: {{ name }}</h2>
  <p>Age: {{ age }}</p>
</template>