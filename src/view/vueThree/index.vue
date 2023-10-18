<template>
  <div>
    <div>
      num1:<input v-model.number="num1" style="width:100px" @change="num1Change" />
      <br />
      num2:<input v-model.number="num2" style="width:100px" />
    </div>
    <span>加法等于:{{ addNum }}</span>
    <br />
    <span>减法等于:{{ subNum }}</span>
  </div>
  <br>
  <br>
  <br>
  <div id="container">

    <div class="bg size margin10">
      <el-button type="primary" size="small" @click="openModal">打开</el-button>
      <model v-model:visible="visible"></model>
    </div>


  </div>
</template>
<script lang="ts" setup>
import useAdd from '@/hooks/useAdd'     //引入自动hook 
import { useSub } from '@/hooks/useSub' //引入自动hook 
import { onMounted, ref } from 'vue';
const num1 = ref(2)
const num2 = ref(1)
const visible = ref<boolean>(true)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { addNum, addFn } = useAdd(num1.value, num2.value)
addFn(num1.value, num2.value)
//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { subNum, subFn } = useSub(num1.value, num2.value)
subFn(num1.value, num2.value)
const num1Change = () => {
  addFn(num1.value, num2.value)
}


// 父子组件双向绑定
const openModal = () => {
  visible.value = true
  console.log('点击了打开弹窗,visible的值为', visible.value);
}
onMounted(() => {
  console.log(import.meta.env);

})
</script>
