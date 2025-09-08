<template>
  <button
    data-testid="login-button" 
    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ label?: string }>()
</script>
