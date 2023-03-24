<template>
  <div>
    <div>
        num1:<input v-model.number="num1" style="width:100px" />
        <br />
        num2:<input v-model.number="num2" style="width:100px" />
    </div>
    <span>加法等于:{{ addNum }}</span>
    <br />
    <span>减法等于:{{ subNum }}</span>




  </div>
</template>
<script lang="ts" setup>
import useAdd from '@/hooks/useAdd'     //引入自动hook 
import { useSub } from '@/hooks/useSub' //引入自动hook 
import { onMounted, ref } from 'vue';
const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd( num1.value, num2.value )
addFn(num1.value, num2.value)
//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub( num1.value, num2.value )
subFn(num1.value, num2.value)


onMounted(()=>{
  console.log(import.meta.env);
  
})
</script>
