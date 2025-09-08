<template>
  <RouterView />
</template>

<script setup lang="ts">
localStorage.setItem('user', JSON.stringify({ email: 'noniaves@gmail.com', password: '123456' }))
</script>
