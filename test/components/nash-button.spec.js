import { mount } from '@vue/test-utils'
import NashButton from '@/components/button'
describe('nash-button test', () => {
  const wrapper = mount(NashButton, {
    propsData: {
      type: 'primary'
    }
  })
  it('props test', () => {
    expect(wrapper.vm.type).toBe('primary')
  })
})
