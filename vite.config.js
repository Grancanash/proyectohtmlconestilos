// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    watch: {
      usePolling: true // Habilita el "polling"
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        quienes_somos: resolve(__dirname, 'quienes-somos.html'), 
        cursos: resolve(__dirname, 'cursos.html'), 
        blog: resolve(__dirname, 'blog.html'), 
        registro: resolve(__dirname, 'registro.html'), 
        contacto: resolve(__dirname, 'contacto.html'), 
        login: resolve(__dirname, 'login.html'), 
        aviso_legal: resolve(__dirname, 'aviso-legal.html'), 
      },
    },
  },
  base: './',
});