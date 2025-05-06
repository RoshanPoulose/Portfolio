import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme:{
    extends:{
      keyframes:{
        blob:{
          "0%" :{ tranform:'scale(1)'},
          "33%" :{ tranform:'scale(1.2)'},   
          "66%" :{ tranform:'scale(0.8)'},
          "100%" :{ tranform:'scale(1)'},
        },  
      },
      animation:{
        blob:"blob 10s infinte",      
      },
     
                
    }
  }
})