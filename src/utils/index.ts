
import HYRequest from "./request";
import {BASE_URL, TIME_OUT} from "./request/config";
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token拦截
      const token = "";
      if (token) {
        const configs = config.headers as any;
        configs.Authorization = `Bearer${token}`;
      }
      console.log("请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      console.log("响应成功的拦截");
      return res;
    },
    rrequestInterceptorCatch: (err) => {
      console.log("响应失败的拦截");
      return err;
    }
  }
});
 
export default hyRequest;