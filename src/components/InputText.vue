<script setup lang="ts">
import { useField } from 'vee-validate'

interface InputProps {
  type?: string
  disabled?: boolean
  required?: boolean
  id?: string
  name: string
  placeholder?: string
  pattern?: string
}

const props = defineProps<{
  label: string
  name: string
}>()

const {
  value: inputValue,
  errorMessage,
  handleChange,
  handleBlur,
} = useField<string>(() => props.name)

const id = `input-${props.name}`

const emit = defineEmits<{
  (e: 'blur'): void
}>()

const onChange = (event: Event) => {
  handleChange(event, false)
}

const onBlur = (event: Event) => {
  handleBlur(event, true)
  emit('blur')
}
</script>

<template>
  <div class="mb-4">
    <label class="block mb-1" :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="inputValue"
      :type="props.name === 'email' ? 'email' : 'text'"
      :name="props.name"
      class="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      :data-testid="name"
      @input="onChange"
      @blur="onBlur"
    />
    <div
      v-if="errorMessage"
      class="flex text-red-900 text-xs gap-1 items-center pl-2"
      id="error-message"
      data-testid="email_error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>
