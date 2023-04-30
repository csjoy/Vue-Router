<script setup lang="ts">
import { shallowRef } from 'vue';
import { RouterView } from 'vue-router';
import Default from './layouts/Default.vue';
const layout = shallowRef(Default)
</script>

<template>
  <component :is="layout">
    <RouterView :currentLayout="layout" @update:currentLayout="(newLayout: any) => layout = newLayout" />
  </component>
</template>
