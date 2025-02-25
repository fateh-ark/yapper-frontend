import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vueKeycloak } from '@josempgon/vue-keycloak'

import App from './App.vue'
import router from './router.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueKeycloak, {
  config: {
    url: 'http://localhost:8180',
    realm: 'yapper',
    clientId: 'public-client',
  },
})

app.mount('#app')
