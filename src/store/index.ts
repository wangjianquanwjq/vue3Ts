import { defineStore } from 'pinia'
export const domeStore = defineStore("domeStore", {
    state: () => {
        return {
            msg: "学习pinia",
            num: 10,
            actionsDome: "actions"
        }
    },
    getters: {

    },
    actions: {
        changeActionsDome() {
            this.actionsDome = 'actions方式修改了数据'
        }
    }
})
// cjh持久化
export const cjhDome = defineStore({
    id: 'cjh',
    state: () => {
        return {
            // msg: "持久化测试",
            list:[]
        }
    },
    getters: {

    },
    actions: {

    },
    persist:true,

    // state中的全部数据进行缓存，直接在state同级下面添加persist对象
    // persist: {
    //     enabled: true
    // }


    // other options...
})