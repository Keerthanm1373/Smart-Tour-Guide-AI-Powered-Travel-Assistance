import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          secure: false,
        },
      },
    },
    plugins: [react()],
    define: {
      'process.env': process.env
    },
    build: {
      rollupOptions: {
        external: ['react-spring'] // Externalize react-spring
      }
    }
  };
});
