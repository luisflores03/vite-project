import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],
        test:{
            environment: 'jsdom',
        },
        server: {
            port: 3000
        }
    };
});
