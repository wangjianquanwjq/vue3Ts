<template >
    <div>
        <el-dialog  draggable v-model="dialogVisible" title="Shipping address">
            <el-table :data="gridData">
                <el-table-column property="date" label="Date" width="150" />
                <el-table-column property="name" label="Name" width="200" />
                <el-table-column property="address" label="Address" />
            </el-table>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
const dialogVisible = ref(false)
const gridData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
]
const dialogVisibleFun = () => {
    dialogVisible.value = true
}
defineExpose({ dialogVisibleFun })//将方法暴露出去

</script>