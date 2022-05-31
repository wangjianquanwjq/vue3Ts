import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import { ElLoading, ElNotification } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/components/loading/src/loading.type";
const DEAFULT_LOADING = true;

class HYRequest {
  instance: AxiosInstance; //axios实例
  interceptors?: HYRequestInterceptors;
  showLoading: boolean;//是否显示加载
  loading?: ILoadingInstance; //loading实例
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    //单个实例的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    //添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例的拦拦截器:请求拦截成功");
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据...",
            background: "regba(0,0,0,0.5)"
          });
        }
        return config;
      },
      (err) => {
        console.log("所有实例的拦拦截器:请求拦截失败");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例的拦拦截器:响应拦截成功");
        //将loading移除
        this.loading?.close();
        const data = res.data as any;
        if (data.returnCode === "-1001") {
          console.log("请求失败,错误信息");
        } else if (data.code != 200) {
          ElNotification({
            title: '错误',
            message: res.data.message,
            type: 'error',
            duration:2000
          })
        } else {
          return data;
        }
      },
      (err) => {
        console.log(err);

        console.log("所有实例的拦拦截器:响应拦截失败");
        if (err.response.status === 404) {
          console.log("404的错误");
        }
        return err;
      }
    );
  }
  //单个请求多拦截
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //判断单个请求是否有拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, any>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          this.showLoading = DEAFULT_LOADING;
          //将结果res返回出去
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "get" });
  }

  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "post" });
  }

  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "delete" });
  }

  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "patch" });
  }
}

export default HYRequest;