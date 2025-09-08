import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../Button.vue'

describe('Button', () => {
  const wrapper = mount(Button, {
    props: {
      label: 'Submit',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render button with correct label', () => {
    expect(wrapper.find('button').text()).toBe('Submit')
  })
})
