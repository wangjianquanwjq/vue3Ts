<template>
    <div>
        <Table :data="tableData" :tabConfig="tabConfig" :header="header">
            <template #operation="slotData">
                <el-button type="primary" size="small" @click="dialogTableVisible">弹窗</el-button>
                <el-button type="primary" size="small" @click="add">新增</el-button>
                <el-button type="warning" size="small" @click="dome">禁用</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </template>
            <template #thumbnail="slotData">
                <el-image style="width: 60px; height: 30px" :src="
                    slotData.data.row.headImg ||
                    'http://www.bocaibao.com.cn/images/1shouye_logo.png'
                " :preview-src-list="[slotData.data.row.headImg]"></el-image>
            </template>
            <template #sex="slotData">
                <span>{{ slotData.data.row.sex == 0 ? "男" : "女" }}</span>
            </template>
        </Table>
        <Dialog ref="dialogRef"></Dialog>
    </div>
</template>
<script lang="ts" setup>
import http from "../../utils/index";
import https from "../../axiosTs/http";
const tableData = ref([
    {
        date: "2016-05-03",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 0,
    },
    {
        date: "2016-05-02",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 1,
    },
    {
        date: "2016-05-04",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 1,
    },
    {
        date: "2016-05-01",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 0,
    },
    {
        date: "2016-05-08",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 0,
    },
    {
        date: "2016-05-06",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 0,
    },
    {
        date: "2016-05-07",
        name: "Tom",
        headImg:
            "http://pic1.win4000.com/wallpaper/2019-01-12/5c39921496cea_270_185.jpg", //用户头像（url）
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        sex: 0,
    },
]);
const header = ref([
    {
        label: "时间",
        value: "date",
    },
    {
        label: "姓名",
        value: "name",
    },
    {
        label: "性别",
        value: "sex",
        columnType: "slot",
        slotName: "sex",
    },
    {
        label: "图片",
        value: "headImg",
        columnType: "slot",
        slotName: "thumbnail",
    },
    {
        label: "状态",
        value: "state",
    },
    {
        label: "压缩",
        value: "zip",
    },
    {
        label: "城市",
        value: "city",
    },
    {
        label: "地址",
        value: "address",
    },
    {
        label: "操作",
        value: "operation",
        columnType: "slot",
        slotName: "operation",
    },
]);
const tabConfig = ref<object>({
    height: 250, //表格数据
    selection: true, //是否全选
    leftFixed: "left", //全选是否固定
    operationWidth: "270",
});
const dialogRef = ref<any>();
const add = () => {
    http
        .request<DataType>({
            url: `/weather_mini`,
            method: "get",
            showLoading: true,
            params: {
                city: "成都",
            },
        })
        .then((res) => {
            console.log(res);
        });
};
const dome = () => {
    console.log(https);
};
const dialogTableVisible = () => {
    dialogRef.value.dialogVisibleFun()
};
</script>

<style scoped>
</style>
