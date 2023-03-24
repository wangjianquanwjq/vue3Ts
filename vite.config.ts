import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
  HeadlessUiResolver,
  ElementUiResolver
} from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [AutoImport({
    imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
    // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
    // dts: 'src/auto-import.d.ts'
  })
    , Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        VantResolver(),
        HeadlessUiResolver(),
        ElementUiResolver()
      ]

    }), vue()],

  // 反向代理
  server: {
    host: '0.0.0.0', //服务器ip地址
    port: 5566, //本地端口
    fs: {
      strict: false, //  支持引用除入口目录的文件
    },
    open: true, // 是否自动在浏览器打开
    // proxy: {
    //   '/szapi': {
    //     target: 'https://tradesz.test.api.qywgpo.com/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/szapi/, ''),
    //   },
    // },
  },
  resolve: {
    alias: {
      // 别名配置
      // 键必须以斜线开始和结束
      '@': resolve(__dirname, 'src'),
      components: resolve(__dirname, './src/components'),
      assets: resolve(__dirname, './src/assets'),
      // '#': resolve(__dirname, 'types'),
      // build: resolve(__dirname, 'build')
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  }
})
