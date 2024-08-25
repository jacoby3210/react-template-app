import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import consoleLine from 'vite-plugin-advanced-console-log'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(), 
		consoleLine({exclude: ["node_modules"]}),
	],
})
