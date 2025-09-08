import { mount } from '@vue/test-utils'
import { describe, vi, it, expect } from 'vitest'
import { nextTick, ref } from 'vue'
import InputPassword from '../InputPassword.vue'

vi.mock('vee-validate', () => ({
  useField: vi.fn(() => ({
    handleChange: vi.fn(),
    handleBlur: vi.fn(),
    errorMessage: ref('error'),
    setErrors: vi.fn(),
  })),
}))

describe('InputPassword', () => {
  const wrapper = mount(InputPassword, {
    props: {
      label: 'Password',
      name: 'password',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have a password input field', () => {
    expect(wrapper.find('label').text()).toBe('Password')
  })

  it('displays the awaited error theme', async () => {
    const input = wrapper.find('input')
    await wrapper.setProps({ name: 'requiredField' })
    await input.trigger('blur')
    await nextTick()
    const errorMessage = wrapper.find('[data-testid="password_error"]')
    expect(errorMessage.classes()).toContain('text-red-900')
  })
})
