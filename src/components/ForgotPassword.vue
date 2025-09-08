<template>
  <div class="bg-white p-4 rounded shadow-md w-full max-w-sm h-full mx-auto">
    <h2 class="text-xl font-bold mb-4 text-center text-black">Reset Your Password</h2>
    <input
      v-model="email"
      type="email"
      placeholder="Enter your email"
      class="w-full px-4 py-2 mb-4 border border-gray-300 rounded text-black"
    />
    <button @click="handleReset" class="w-full bg-blue-600 text-white font-bold py-2 rounded">
      Send Reset Link
    </button>
    <p v-if="status" class="mt-4 text-sm text-green-600 text-center">{{ status }}</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const email = ref('')
    const status = ref('')

    const handleReset = () => {
      if (!email.value) {
        status.value = 'Please enter your email.'
        return
      }

      console.log('Sending password reset to:', email.value)
      status.value = 'Reset link sent! Check your inbox.'
    }

    return {
      email,
      status,
      handleReset,
    }
  },
})
</script>
