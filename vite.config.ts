

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
    optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      // Allow OAuth popups (Google) to communicate back via postMessage
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      // If you had COEP set somewhere, neutralize it in dev:
      "Cross-Origin-Embedder-Policy": "unsafe-none"
    }
  },
  preview: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      "Cross-Origin-Embedder-Policy": "unsafe-none"
    }
  }
});

