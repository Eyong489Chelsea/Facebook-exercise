<template>
  <div
    class="bg-white p-4 rounded shadow-md w-full max-w-sm h-full mx-auto"
    data-testid="reset-form"
  >
    <h2 class="text-xl font-bold mb-4 text-center text-black">
      {{ $t('resetPassword') }}
    </h2>

    <input
      v-model="email"
      type="email"
      :placeholder="$t('enterEmail')"
      class="w-full px-4 py-2 mb-4 border border-gray-300 rounded text-black"
    />

    <button @click="handleReset" class="w-full bg-blue-600 text-white font-bold py-2 rounded">
      {{ $t('sendCode') }}
    </button>

    <p v-if="error" class="mt-4 text-sm text-red-600 text-center">
      {{ error }}
    </p>

    <p v-if="status" class="mt-4 text-sm text-green-600 text-center">
      {{ status }}
    </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const email = ref('')
    const status = ref('')
    const error = ref('')
    const { t } = useI18n()

    const handleReset = () => {
      status.value = ''
      error.value = ''

      if (!email.value) {
        error.value = t('errorEmailRequired')
        return
      }
      console.log('Sending password reset to:', email.value)
      status.value = t('statusResetSent')
    }

    return {
      email,
      status,
      error,
      handleReset,
      t,
    }
  },
})
</script>
