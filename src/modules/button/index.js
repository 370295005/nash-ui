import Button from '../../components/button/index.vue'

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button
