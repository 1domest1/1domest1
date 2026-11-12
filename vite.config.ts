import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo ('./'): los assets se cargan con rutas relativas, por lo que
// funciona tanto en la raíz como en una subruta de GitHub Pages
// (https://usuario.github.io/fermentacion-domestica/).
export default defineConfig({
  plugins: [react()],
  base: './',
})

