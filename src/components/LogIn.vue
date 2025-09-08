<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="absolute top-4 right-4 flex space-x-2">
      <button
        @click="setLocale('en')"
        :class="[
          'px-3 py-1 rounded text-sm font-medium transition',
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        ]"
      >
        English
      </button>
      <button
        @click="setLocale('fr')"
        :class="[
          'px-3 py-1 rounded text-sm font-medium transition',
          locale === 'fr'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        ]"
      >
        Français
      </button>
    </div>

    <div
      class="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl space-y-10 md:space-y-0 md:space-x-16"
    >
      <div class="text-center md:text-left md:max-w-md px-2">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-bold">facebook</h1>
        <p class="mt-4 text-xl sm:text-2xl lg:text-3xl text-black">
          {{ t('tagline') }}
        </p>
      </div>

      <form @submit="submitForm" class="w-full max-w-sm">
        <div class="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <InputText :label="t('email')" name="email" />
          <InputPassword type="password" :label="t('password')" name="password" />
          <Button type="submit" :label="t('login')" data-testid="login-button" class="w-full" />

          <router-link
            to="/forgot-password"
            class="block text-center text-blue-600 mt-4 text-sm hover:underline"
          >
            {{ t('forgotPassword') }}
          </router-link>

          <hr class="my-4" />

          <button
            type="button"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition"
          >
            {{ t('createAccount') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import InputText from '../components/InputText.vue'
import InputPassword from '../components/InputPassword.vue'
import Button from '../components/Button.vue'

interface LoginFormValues {
  email: string
  password: string
}

const { t, locale } = useI18n()
const router = useRouter()

const setLocale = (lang: string) => {
  locale.value = lang
}

const schema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
})

const form = useForm<LoginFormValues>({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: schema,
})

const submitForm = form.handleSubmit((values) => {
  const savedUser = localStorage.getItem('user')

  if (savedUser) {
    const parsedUser = JSON.parse(savedUser)
    const isValidUser = parsedUser.email === values.email && parsedUser.password === values.password

    if (isValidUser) {
      router.push({ name: 'HomePage' })
    } else {
      alert(t('invalidCredentials'))
    }
  } else {
    alert(t('noUserFound'))
  }
})

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
