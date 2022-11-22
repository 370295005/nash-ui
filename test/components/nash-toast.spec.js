import { mount } from '@vue/test-utils'
import NashToast from '@/modules/toast'
import NashToastComponent from '@/components/toast'
import { later } from '../lib'
import Vue from 'vue'
import { async } from 'regenerator-runtime'
describe('nash-toast test', () => {
  Vue.use(NashToast)
  const $toast = Vue.prototype.$toast
  it('toast use', () => {
    expect($toast).toBeDefined()
  })
  it('render test', () => {
    const wrapper = mount(NashToastComponent, {
      propsData: {
        text: '我是提示',
        delay: 1000,
        mask: true
      }
    })
    const toast = wrapper.findComponent('.nash-toast')
    const mask = wrapper.findComponent('.nash-mask')
    expect(toast.exists()).toBeTruthy()
    expect(mask.exists()).toBeTruthy()
    expect(toast.text()).not.toBe('提示')
  })
  // it('delay test', async () => {
  //   const toast = $toast({ text: '提示', delay: 1000, mask: true })
  //   await later(500)
  //   expect(toast.$el.style.display).toEqual('')
  //   await later(500)
  //   console.log(toast.$el.style.display)
  //   expect(toast.$el.style.display).toEqual('none')
  // })
})
