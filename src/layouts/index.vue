
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <Menu />
            </el-aside>
            <el-container>
                <el-header>头部</el-header>
                <el-main>
                    <router-view class="content"></router-view>
                </el-main>
                <el-footer>底部</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>

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
</style>
