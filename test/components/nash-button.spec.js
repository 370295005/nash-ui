import { mount } from '@vue/test-utils'
import NashButton from '@/components/button/index.vue'
describe('nash-button test', () => {
  const wrapper = mount(NashButton, {
    propsData: {
      type: 'primary'
    }
  })
  it('button-class text', () => {
    const length = wrapper.querySelector('nash-btn-primary').length
    expect(length).toBe(1)
  })
})
