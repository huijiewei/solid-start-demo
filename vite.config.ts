import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  build:{
    minify:false,
    rollupOptions:{
      output:{
        manualChunks(id){
          console.log(id)
          if (id.includes('/node_modules/solid-js/') || id.includes('/node_modules/@solidjs/')) {
            return 'solid';
          }

          if (id.includes('/node_modules/') && !id.includes('/node_modules/solid-start/')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
