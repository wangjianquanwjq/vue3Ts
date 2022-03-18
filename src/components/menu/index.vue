<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1-1"
        text-color="#fff"
    >
        <el-sub-menu :index="item.value" v-for="(item) in menuData" :key="item.value">
            <template #title>
                <el-icon>
                    <icon-menu />
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item
                    :index="itemData.value"
                    v-for="(itemData) in item.children"
                    :key="itemData.value"
                    @click="goMenu(itemData)"
                >{{ itemData.label }}</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" >
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router"//第一步----引入路由实例
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
    components: {
        Location,
        Document,
        IconMenu,
        Setting,
    },
    setup(props) {
        const router = useRouter(); ////第二步----引入路由方法
        const isCollapse = ref(false)
        const menuData = ref([
            // 组件
            {
                label: "组件",
                value: '1',
                children: [
                    {
                        label: "表格",
                        value: '1-1',
                        path: '/'
                    },
                    {
                        label: "表单",
                        value: '1-2',
                        path: '/from'
                    }
                ]
            },
            {
                //学习
                label: "学习",
                value: "2",
                children: [
                    {
                        label: 'typeScript',
                        value: '2-1',
                        path: '/typeScript'
                    },
                    {
                        label: 'vueThree',
                        value: '2-2',
                        path: '/vueThree'
                    }
                ]
            }
        ])
        // 菜单跳转
        const goMenu = (rowData: any) => {
            router.push(rowData.path)
        }
        return {
            // 函数
            goMenu,
            // 数据参数
            isCollapse,
            menuData
        }
    }

})
</script>

<style>
.el-menu {
    height: 100%;
}
</style>