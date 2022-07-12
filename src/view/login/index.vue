<template>
    <div class="login">
        <div class="formBox">
            <p class="title">用户登录</p>
            <div class="form">
                <el-form ref="ruleFormRef" size="large" :model="ruleForm" status-icon :rules="rules"
                    @keyup.enter.native="submitForm(ruleFormRef)" class="demo-ruleForm">

                    <el-form-item prop="account">
                        <el-input v-model="ruleForm.account" placeholder="请输入账号" :prefix-icon="User"
                            autocomplete="off" />
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码"
                            :prefix-icon="Collection" />
                    </el-form-item>
                    <el-form-item>
                        <div class="passBox">
                            <el-checkbox v-model="checked" label="记住密码" />
                            <span class="forgetPass">忘记密码？</span>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)" style="width: 100%">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <div class="tips">
                            <p>管理员：账号：admin;密码：123456</p>
                            <p>测试号：账号：editor;密码：123456</p>
                        </div>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { Collection, User } from '@element-plus/icons-vue'
import http from "../../utils/index";
// 表单相关
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    account: '',
    pass: '',
})
const rules = reactive({
    account: [{ required: true, trigger: 'blur', message: "账号不能为空" }],
    pass: [{ required: true, trigger: 'blur', message: "密码不能为空" }],
})
const checked = ref(false)
const router = useRouter()//路由
// 登录请求
const loginFun = () => {
    http
        .request<DataType>({
            url: `/login`,
            method: "post",
            showLoading: true,
            data: {
                account: ruleForm.account,
                pass: ruleForm.pass,
            }
        })
        .then((res) => {
            if (res.code == 200) {
                router.push({
                    //   name:"home",
                    path: '/table'
                })
                sessionStorage.setItem('userInfo', res.data)
            }
        });
}
// 表单提交
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            loginFun()
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>
<style scoped lang="less">
.login {
    height: 100%;
    background: url('../../assets/image/login/diqiu.png'),
        url('../../assets/image/login/xk.png'),
        url('../../assets/image/login/bot.png'),
        url('../../assets/image/login/bg.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: 0 0, right 0, 0 bottom, 0 0;
    position: relative;

    .formBox {
        width: 630px;
        height: 438px;
        position: absolute;
        right: 200px;
        top: 50%;
        transform: translate(0, -50%);
        background: url('../../assets/image/login/loginFromBg.png');
        text-align: center;

        .title {
            color: #0ba1f8;
            font-size: 24px;
            margin-top: 40px;
        }

        :deep(.el-input__inner) {
            background: transparent;
            box-shadow: 0 0 0 1px #0ba1f8;
            border: 1px solid #0ba1f8;
            color: white;
        }

        .form {
            width: 440px;
            margin: 0 auto;

            :deep(.el-input) {
                background: rgba(11, 161, 248, .1);

            }

            .tips {
                color: white;

                p {
                    margin: 0;
                }
            }

            .passBox {
                width: 440px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                :deep(.el-checkbox__inner) {
                    background: transparent;
                    box-shadow: 0 0 0 1px #0ba1f8;
                    border: 1px solid #0ba1f8;
                }

                .forgetPass {
                    color: #0ba1f8;
                    cursor: pointer;
                }
            }

        }
    }
}
</style>
<!-- <template>
    <div class="login">
        <Particles id="tsparticles" class="login__particles" :options="particlesData" />
    </div>
</template>
<script lang="ts" setup>
import { particlesData } from './particles'
</script>
<style scoped lang="less">
.login {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;

    &__particles {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('https://img1.baidu.com/it/u=722430420,1974228945&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500');
        z-index: -1;
    }
}
</style> -->