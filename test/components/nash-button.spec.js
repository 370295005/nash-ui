import { mount } from '@vue/test-utils'
import NashButton from '@/components/button'
import { async } from 'regenerator-runtime'
describe('nash-button test', () => {
  const wrapper = mount(NashButton, {
    propsData: {
      type: 'primary',
      round: true
    }
  })
  it('render test', () => {
    const button = wrapper.findComponent('.nash-button')
    expect(button.exists()).toBe(true)
    expect(button.classes()).toStrictEqual(['nash-button', 'nash-button-primary', 'nash-button-round'])
  })
  it('props test', () => {
    expect(wrapper.vm.type).toBe('primary')
    expect(wrapper.vm.round).toBeTruthy()
  })
  it('click event', async () => {
    const button = wrapper.findComponent('.nash-button')
    await button.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
  it('not trigger click event when disabled', async () => {
    const wrapper = mount(NashButton, {
      propsData: {
        disabled: true
      }
    })
    const button = wrapper.findComponent('.nash-button')
    await button.trigger('click')
    expect(button.classes()).toStrictEqual(['nash-button', 'nash-button-disabled'])
    expect(wrapper.emitted().click).not.toBeTruthy()
  })
  it('slot test', () => {
    const wrapper = mount(NashButton, {
      slots: {
        default: '<img />'
      }
    })
    expect(wrapper.contains('img')).toBeTruthy()
  })
})
