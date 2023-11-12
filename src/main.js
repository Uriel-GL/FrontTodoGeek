import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import routes from './routes/routes' 

loadFonts()

//Registro del Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then((register) => {
    console.log('[Service Worker] Register Success', register)
  })
  .catch((error) => {
    console.log('[Service Worker] Register Error ', error)
  })
}

createApp(App)
  .use(routes)
  .use(vuetify)
  .mount('#app')
