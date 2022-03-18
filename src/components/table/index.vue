<template>
    <div>
        <el-table
            :data="data"
            style="width: 100%"
            :height="tabConfig?.height"
            @selection-change="selectLine"
        >
            <!-- 多选框 -->
            <el-table-column
                :fixed="tabConfig.leftFixed"
                v-if="tabConfig?.selection"
                type="selection"
                width="55"
            ></el-table-column>
            <template v-for="(item) in header" :key="item.value">
                <!-- 右边操作 -->
                <el-table-column
                    v-if="item.columnType == 'slot'"
                    :prop="item.value"
                    :label="item.label"
                    :width="tabConfig?.operationWidth"
                    :fixed="item.slotName=='operation'?'right':false"
                >
                    <template #default="scope">
                        <slot :name="item.slotName" :data="scope" />
                    </template>
                </el-table-column>
                <!-- 正常得页面数据 -->
                <el-table-column v-else :prop="item.value" :label="item.label" width="250" />
            </template>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Array
    },
    header: Array as unknown as Array<any>,
    tabConfig: {
        type: Object,
    }
})
// 方法
const selectLine = (data: any) => {
    console.log(data);

}

</script>
 