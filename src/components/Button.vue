<template>
  <button
    data-testid="login-button"
    class="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded transition"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ label?: string }>()
</script>
