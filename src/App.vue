
<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import Layouts from "./layouts/index.vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;
</script>

<style>
body {
  margin: 0;
}
</style>
