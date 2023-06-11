import { createApp } from 'vue'
import 'vite-plugin-doc-preview/style/style.css'
import App from './App.vue'
import router from './router'
import AKUI from './packages'
//import './packages/theme/index.scss'

import './assets/scss/app.scss'
const app = createApp(App)
app.use(router)
app.use(AKUI)

app.mount('#app')
