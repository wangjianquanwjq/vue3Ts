
<template>
    <div @click="dome">表格</div>
</template>
<script  lang="ts">
import http from '../../utils/index'
import { defineComponent, ref } from "vue";
export default defineComponent({

    setup(props) {
        interface DataType {
            data: any;
            returnCode: string;
            success: boolean;
        }
        const dome = () => {
            http
                .request<DataType>({
                    url: "/api/test",
                    method: "get",
                    showLoading: true
                })
                .then((res) => {
                    console.log(res.data);
                    console.log(res.returnCode);
                    console.log(res.success);
                });

        }
        return {
            dome
        }
    }
})


</script>

<style scoped>
</style>