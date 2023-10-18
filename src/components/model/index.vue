<template>
    <el-dialog v-model="sonVisible" title="Tips" width="30%" draggable>
        <span>It's a draggable Dialog</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel">Cancel</el-button>
                <el-button type="primary" @click="handleOk">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { defineComponent, defineProps, defineEmits } from "vue";
const emit = defineEmits(['update:visible'])
const props = defineProps({
    visible: {
        required: true,
        type: Boolean
    },
});
const sonVisible = ref<any>(props.visible);
watch(() => props.visible, (newValue: boolean) => {
    console.log('检测到props.visible发生改变,新值为', newValue);
    sonVisible.value = newValue
})
const handleOk = () => {
    sonVisible.value = false
    emit('update:visible', sonVisible.value)
}

const handleCancel = () => {
    sonVisible.value = false
    emit('update:visible', sonVisible.value)
}
onMounted(()=>{
    console.log('=======',props);
    
})
</script>