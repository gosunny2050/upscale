import { defineConfig } from 'vite'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [ghPages()],
  build: {
    outDir: 'dist',
  },
  base: '/upscaler-app/'  // 对应 GitHub Pages 的仓库名
})

