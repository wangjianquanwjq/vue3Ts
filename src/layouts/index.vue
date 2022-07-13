
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <Menu :isCollapse="isCollapse" :testProps="testPropsData" :company="company" @test-fun="testFun" />
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <div class="switch">
              <el-image @click="open" style="width: 32px; height: 32px" :src="imgPath" />
            </div>
            <div class="full">
              <div class="">
                <span>姓名：管理员</span>
                &emsp;
                <el-popconfirm title="是否退出?" confirmButtonText="退出" @confirm="confirm">
                  <template #reference>
                    <span class="outLog">退出登录</span>
                  </template>
                </el-popconfirm>
              </div>
              &emsp;
              <Screenfull>
                <el-image style="width: 30px; height: 30px" :src="full" />
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
import imgPath from "../assets/image/header/zhankai.png";
import full from "../assets/image/header/full.png";
const router = useRouter()//路由
let isCollapse = ref(false);
let company = ref<string>();
let testPropsData = ref({
  name: "王健全",
  age: 27,
})
const open = () => {
  isCollapse.value = !isCollapse.value;
};
const testFun = (data: object) => {
  console.log('子组件触发父组件的方法');
  console.log(data)
}
// 推出登录
const confirm = () => {
  sessionStorage.clear()
  router.push({
    name: 'login'
  })
}
</script>
<style scoped lang="less">
.common-layout,
.el-container {
  height: 100vh;
}

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
  /* padding-top: 14px; */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  .outLog {
    cursor: pointer;

  }

  .screenfullBtn {
    display: flex;
    align-items: center;
    cursor: pointer;

  }
}
</style>
