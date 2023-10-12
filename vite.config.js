import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
		VitePWA({
			includeAssets: ['/icons/icon1.png'],
			manifest: {
				name: 'TodoGeek',
				short_name: 'TodoGeek',
				description: 'App de reseñas de peliculas, series, animes y Videojuegos.',
				theme_color: '#ffffff',
				icons: [
					{
						src: "/icons/icon1.png",
						sizes: "512x512",
						type: "image/png",
						purpose: 'any'
					}
				]
			},
			workbox: {
				//Configuracion del Cache al inciar la App
				runtimeCaching: [{
					urlPattern: ({ url }) => {
						return url.pathname.startsWith('/api');
					},
					handler: "CacheFirst",
					options: {
						cacheName: "api-cache",
						cacheableResponse: {
							statuses: [0, 200]
						}
					}
				}]
			},
			injectRegister: 'auto',
			registerType: "autoUpdate",
			devOptions: {
				enabled: true
			}
		})
	],
})
