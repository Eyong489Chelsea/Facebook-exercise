import { mount } from '@vue/test-utils'
import { describe, vi, it, expect } from 'vitest'
import { nextTick, ref } from 'vue'
import InputText from '../InputText.vue'

vi.mock('vee-validate', () => ({
  useField: vi.fn(() => ({
    handleChange: vi.fn(),
    handleBlur: vi.fn(),
    errorMessage: ref('error'),
    setErrors: vi.fn(),
  })),
}))

describe('InputText', () => {
  const wrapper = mount(InputText, {
    props: {
      label: 'Email',
      name: 'email',
    },
  })
  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should display label with the correct value', () => {
    expect(wrapper.find('label').text()).toBe('Email')
  })

  it('displays the awaited error theme', async () => {
    const input = wrapper.find('input')
    await wrapper.setProps({ name: 'requiredField' })
    await input.trigger('blur')
    await nextTick()
    const errorMessage = wrapper.find('[data-testid="email_error"]')
    expect(errorMessage.classes()).toContain('text-red-900')
  })
})
