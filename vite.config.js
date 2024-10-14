import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',  // 打包输出目录
  },
  base: '/upscale/'  // 指定 GitHub Pages 仓库名
})



