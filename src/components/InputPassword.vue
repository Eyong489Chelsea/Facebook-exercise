<script setup lang="ts">
import { useField } from 'vee-validate'
import { ref } from 'vue'

const props = defineProps<{
  label: string
  name: string
}>()

const { value: inputValue, handleChange, handleBlur } = useField<string>(() => props.name)
const { errorMessage } = useField<string>(() => props.name)

const emit = defineEmits(['blur'])

const onChange = (event: Event) => {
  handleChange(event, false)
}
const onBlur = (event: Event) => {
  handleBlur(event, true)
  emit('blur')
}

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="mb-4 relative">
    <label class="block mb-1">{{ label }}</label>

        <input
      :value="inputValue"
      :type="props.name === 'password' ? (showPassword ? 'text' : 'password') : 'text'"
      class="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
      :name="name"
      :data-testid="name"
      @input="onChange"
      @blur="onBlur"
    />

        <button
      v-if="props.name === 'password'"
      type="button"
      class="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
      @click="togglePassword"
    >
            <svg
        v-if="!showPassword"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>

            <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.61-4.362M6.18 6.18A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.958 9.958 0 01-4.448 5.408M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-3 3m0 0a3 3 0 01-3-3"
        />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
      </svg>
    </button>

    <div
      v-if="errorMessage"
      class="flex text-red-900 text-xs gap-1 items-center pl-2 mt-1"
      id="error-message"
      :data-testid="`${name}_error`"
    >
      <ExclamationTriangleIcon class="size-3" />
      {{ errorMessage }}
    </div>
  </div>
</template>
