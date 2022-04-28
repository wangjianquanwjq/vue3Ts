
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <Menu :isCollapse="isCollapse" :testProps="testPropsData" :company="company" @test-fun="testFun"/>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <div class="switch">
              <el-image @click="open" style="width: 32px; height: 32px" :src="imgPath" />
            </div>
            <div class="full">
              <Screenfull>
                <el-image style="width: 32px; height: 32px" :src="full" />
              </Screenfull>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view class="content"></router-view>
        </el-main>
        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import imgPath from "../assets/header/zhankai.png";
import full from "../assets/header/full.png";
let isCollapse = ref(false);
let company = ref<string>();
let testPropsData = ref({
  name: "王健全",
  age: 27,
})
const open = () => {
  isCollapse.value = !isCollapse.value;
};
const testFun=(data:object)=>{
  console.log('子组件触发父组件的方法');
  console.log(data)
}
</script>
<style scoped>
.common-layout .el-header,
.common-layout .el-footer {
  background-color: #b3c0d1;
  text-align: center;
  line-height: 60px;
}

.common-layout .el-footer {
  line-height: 60px;
}

.el-aside {
  background: #545c64;
}

.common-layout .el-main {
  background-color: #e9eef3;
  text-align: center;
  padding: 0;
}

.content {
  height: calc(100vh - 120px);
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .switch,
.full {
  cursor: pointer;
  padding-top: 14px;
  box-sizing: border-box
}
</style>
