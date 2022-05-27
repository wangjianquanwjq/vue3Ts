<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1-1"
    text-color="#fff" :collapse="isCollapse">
    <el-sub-menu :index="item.value" v-for="(item) in menuData" :key="item.value">
      <template #title>
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="itemData.value" v-for="(itemData) in item.children" :key="itemData.value"
          @click="goMenu(itemData)">{{ itemData.label }}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting
} from "@element-plus/icons-vue";
// -----------------------------emit触发父组件事件-------------------------------------
const emit = defineEmits(['testFun'])
// ts的写法  第一种  通过泛型来定义   基于类型的声明   没办法定义默认值

// const props = defineProps<{
//   isCollapse: boolean
// }>()

// 第二种   定义单独的接口

interface PropsData {
  isCollapse: boolean,
  testProps: object,
  company?: string
}
// const props=defineProps<PropsData>()
const { isCollapse, testProps, company = '大陆希望' } = defineProps<PropsData>()//结构  可以定义默认值
// console.log(isCollapse);
// console.log(testProps);
// console.log(company);


// 常规写法  第三种
// const props = defineProps({
//   isCollapse: false
// })


const router = useRouter();
const menuData = ref([
  // 组件
  {
    label: "组件",
    value: "1",
    children: [
      {
        label: "表格",
        value: "1-1",
        path: "/table"
      },
      {
        label: "表单",
        value: "1-2",
        path: "/from"
      }
    ]
  },
  {
    //学习
    label: "学习",
    value: "2",
    children: [
      {
        label: "typeScript",
        value: "2-1",
        path: "/typeScript"
      },
      {
        label: "vueThree",
        value: "2-2",
        path: "/vueThree"
      }
    ]
  }
]);
const count = ref(0)//打出来是一个对象  需要.value
// const count2 = $ref(2)//不需要.value   官网  报错
// 菜单跳转
const goMenu = (rowData: any) => {
  console.log(count)
  router.push(rowData.path);
  emit('testFun', { 'emit': "子组件传回来的数据" })
}
onMounted(() => {
  console.log('生命周期')
})
</script>
<!-- 不适用setup语法糖的写法 -->
<!-- <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isCollapse:Boolean,
  },
  setup(props) {
    console.log(123);
    
    console.log(props);
  }
})

</script> -->
<style>
.el-menu {
  height: 100%;
  border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>