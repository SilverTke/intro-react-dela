import { defineConfig } from "vite";
import react_swc from "@vitejs/plugin-react-swc";
import unocss from "unocss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react_swc(), unocss()],
});
