import { mockXHR } from './src/mock/index';

if (process.env.NODE_ENV === 'mock') {
  // 判断是否为mock模式
  mockXHR();
}