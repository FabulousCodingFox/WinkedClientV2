import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/WinkedClientV2/",
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/_globals.sass"\n`
      }
    }
  }
})
