import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 8080,
		proxy: {
			"/api": {
				target: "https://nlstar.com/ru/api/catalog3/v1",
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ""),
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@widgets": path.resolve(__dirname, "./src/widgets"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@ui": path.resolve(__dirname, "./src/shared/ui"),
			"@api": path.resolve(__dirname, "./src/shared/api"),
			"@stores": path.resolve(__dirname, "./src/shared/stores"),
		},
	},
});
