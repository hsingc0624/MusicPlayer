import './assets/base.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import veeValidatePlugin from './includes/Validation'
import { auth } from './includes/firebase'
import Icon from './directives/icon'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import router from './router'

registerSW({ immediate: true })

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(veeValidatePlugin)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})
