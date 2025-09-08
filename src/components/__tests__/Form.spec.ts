import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createI18n } from 'vue-i18n'
import LogIn from '../LogIn.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      email: 'Email',
      password: 'Password',
      'Log In': 'Log In',
    },
  },
})

describe('LogIn', () => {
  it('renders correctly', () => {
    const wrapper = mount(LogIn, {
      global: {
        plugins: [i18n],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
