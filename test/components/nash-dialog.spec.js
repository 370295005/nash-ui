import { mount } from '@vue/test-utils'
import NashDialog from '@/modules/dialog'
import NashDialogComponent from '@/components/dialog'
import Vue from 'vue'

describe('nash-dialog test', () => {
  Vue.use(NashDialog)
  const $dialog = Vue.prototype.$dialog
  const wrapper = mount(NashDialogComponent, {
    propsData: {
      type: 'alert',
      title: '标题',
      content: '内容',
      confirmText: 'confirm',
      showClose: true,
      mask: true
    }
  })
  it('nash-dialog test', () => {
    expect($dialog).toBeDefined()
  })

  it('render test', () => {
    const dialog = wrapper.findComponent('.nash-dialog')
    const mask = wrapper.findComponent('.nash-mask')
    const title = wrapper.findComponent('.nash-dialog-title')
    const content = wrapper.findComponent('.nash-dialog-content')
    const confirm = wrapper.findComponent('.nash-dialog-confirm')
    const close = wrapper.findComponent('.nash-dialog-close')
    expect(dialog.exists()).toBe(true)
    expect(mask.exists()).toBe(true)
    expect(title.text()).toBe('标题')
    expect(content.text()).toBe('内容')
    expect(confirm.text()).toBe('confirm')
    expect(close.exists()).toBe(true)
  })
  it('click close', () => {})
})
