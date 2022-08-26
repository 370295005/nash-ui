import nashButton from './index.vue'

nashButton.install = (app: any) => {
  app.component(nashButton.name, nashButton)
}

export default nashButton
