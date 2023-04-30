<script setup lang="ts">

</script>

<template>
  <div>
    <nav>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/">Home</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/about">About</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" :to="{ name: 'messageFeed' }">Messages</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/user/1">User 1</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/user/2">User 2</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/user/3">User 3</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/user/4">User 4</RouterLink>
      <RouterLink class="text-green-500 font-medium bg-gray-50 px-4" to="/user/5">User 5</RouterLink>
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <div>Vue Workshop</div>
    </footer>
  </div>
</template>