import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '../Finderr-Backend/public',
        emptyOutDir: true
    }
})
