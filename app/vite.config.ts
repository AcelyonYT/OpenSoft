// imports
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from "vite-plugin-electron";

// https://vitejs.dev/config/
/**
 * Configs the vite to use react
 * and runs the server on our port
 */
export default defineConfig( {
  plugins: [
    react(),
    electron({
      entry: 'src/index.ts',
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "./html/index.html",
        updater: "./html/updater.html"
      }
    }
  }
});