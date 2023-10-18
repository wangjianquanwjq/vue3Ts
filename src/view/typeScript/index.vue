<template>
    <div>
        {{ text }}
        <ul>
            <li>1,https://blog.csdn.net/zxxadela/article/details/124477896</li>
            <li>{{ store.msg }}</li>
            <li>{{ msg }}</li>
            <li>{{ num }} <button @click="add">修改数据+1</button></li>
            <li>

                    <br>
                    <br>
                    <br>
                    <br>
                <div>{{ msg }}</div>
                <div>{{ num }}</div>
                <button @click="editObj">$patch对象方式批量修改</button>
                <button @click="editFun">$patch函数方式批量修改</button>
            </li>

            <li>
                {{ actionsDome }}
                <button @click="actionsFun">actions方式修改数据</button>
            </li>
            <li>
                {{ cjhDomeStore.msg }}
                <button @click="cjhFun">持久化测试</button>

            </li>
        </ul>


    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { domeStore,cjhDome } from '@/store/index'//引入定义的pinia
import { storeToRefs } from 'pinia'// 当有多个变量使可以解构
const store = domeStore()
const cjhDomeStore = cjhDome()
const { msg, num,actionsDome } = storeToRefs(store)//解构数据   也可以const { a,b}=store  但是不具有响应式

const text = ref('vue3 TS mock的使用')




// 方法
const add = () => {
    store.num++
}

// 对象方式批量修改
const editObj=()=>{
    store.$patch({
        msg:"对象方式修改了msg",
        num:100
    })
}

// 函数方式批量修改
const editFun=()=>{
    store.$patch((state)=>{
        // msg=200
        state.msg="函数方式修改了msg"
    })
}

const actionsFun=()=>{
    store.changeActionsDome()
}

const cjhFun=()=>{
    cjhDomeStore.msg='已持久化处理'
} 
// onMounted(() => {
//     console.log(domeStore);

// }),
</script>
<style scoped lang="less">
    li{
        margin: 20px;
    }
</style>