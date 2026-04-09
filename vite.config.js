import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { fileURLToPath } from "node:url";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: fileURLToPath(new URL('./src/prerender.jsx', import.meta.url)),
    }),
  ],
})
