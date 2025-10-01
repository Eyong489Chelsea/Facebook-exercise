<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center"
    data-testid="welcome"
  >
    <h1 class="text-4xl font-bold text-blue-600 mb-4">
      {{ $t('tagline') }}
    </h1>

    <div class="p-4 bg-white rounded-2xl shadow w-80 text-center">
      <p class="text-gray-600">
        {{ $t('welcomeMessage') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
})
</script>
