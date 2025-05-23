import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
export default defineConfig({
    plugins: [react()],
    publicDir: 'public',
    assetsInclude: ['**/*.json'],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html')
            }
        }
    },
    server: {
        port: 3000,
        open: true,
    }
});
