import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    manifest: true,
    rollupOptions: {
      input: path.join(__dirname, "src/main.tsx"),
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  esbuild: { loader: "tsx", include: /src\/.*\.tsx?$/, exclude: [] },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js" : "tsx"
      },
      plugins: [
        {
          name: "load-js-files-as-tsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: "tsx",
                contents: await fs.readFile(args.path, "utf8"),
              };
            });
          },
        },
      ],
    },
  },
});
