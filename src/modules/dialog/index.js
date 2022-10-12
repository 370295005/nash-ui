import NashDialog from '@/components/dialog'
import NashMask from '@/components/mask'
NashDialog.install = (Vue) => {
  Vue.component(NashMask.name, NashMask)
  Vue.component(NashDialog.name, NashDialog)
  const Dialog = Vue.extend(NashDialog)
  const profile = new Dialog({
    el: document.createElement('div')
  })
  document.body.appendChild(profile.$el)
  const method = {
    open({
      type,
      title,
      content,
      confirmText,
      cancelText,
      mask,
      onConfirm,
      onCancel,
      onClose,
      showClose,
      slotContent
    }) {
      profile.isVisible = true
      profile.type = type || 'alert'
      profile.title = title || ''
      profile.content = content || ''
      profile.confirmText = confirmText || '确定'
      profile.cancelText = cancelText || '取消'
      profile.mask = mask || true
      profile.onConfirm = onConfirm
      profile.onCancel = onCancel
      profile.onClose = onClose
      profile.showClose = showClose || false
      profile.slotContent = slotContent || ''
    }
  }
  Vue.prototype.$dialog = method
}

export default NashDialog
