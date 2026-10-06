import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/safara-web-travel/',
  plugins: [react()],
})
