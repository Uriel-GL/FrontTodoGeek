import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'service-worker': ['sw.js']
				}
			}
		}
	},
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
		{
			name: 'manifest-json',
			writeBundle() {
				this.emitFile({
					type:'asset',
					fileName:'manifest.json',
					source: require('fs').readFileSync('manifest.json', 'utf-8')
				});
			}
		},
		{
			name: 'service-worker',
			writeBundle() {
				this.emitFile({
					type: 'asset',
					fileName: 'sw.js',
					source: require('fs').readFileSync('sw.js', 'utf-8')
				})
			}
		}
	],
})
