import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import routes from './routes/routes' 

loadFonts()

createApp(App)
  .use(routes)
  .use(vuetify)
  .mount('#app')
