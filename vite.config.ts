import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Gera arquivos na pasta dist
    outDir: 'dist',
    // Limpa a pasta dist antes de gerar novos arquivos
    emptyOutDir: true,
    // Configuração para gerar nomes de arquivos fixos (opcional, mas facilita o PHP)
    rollupOptions: {
      output: {
        entryFileNames: 'assets/bundle.js',
        assetFileNames: 'assets/style.[ext]', // CSS será style.css
        chunkFileNames: 'assets/[name].js',
      },
    },
  },
  define: {
    // Necessário para evitar erros com process.env em algumas bibliotecas
    'process.env': {},
  },
});