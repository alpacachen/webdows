import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import svgr from "vite-plugin-svgr";
console.log('test')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),UnoCSS(),svgr()],
})
