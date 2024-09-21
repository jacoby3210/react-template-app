import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {viteConsolePro} from 'vite-plugin-console-pro'
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(), 
		viteConsolePro({exclude: ["node_modules"]}),
		viteStaticCopy({targets: [{src: './utils/manifest.json', dest: ''},]})
	],
})
