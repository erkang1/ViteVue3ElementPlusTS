<!-- 组件化 -->
<template>
    <el-form ref="loginForm" :model="loginUser" :rules="rules" class="loginForm sign-in-form">
        <div class="titletext">登录Demo</div>
        <el-form-item prop="email">
            <el-input v-model="loginUser.email" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginUser.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleLogin('loginForm')" class="submit-btn">登陆</el-button>
        </el-form-item>
        <RouterLink to='/ViteVue3ElementPlusTS/Register' class="register-btn">立即注册</RouterLink>
    </el-form>
</template>

<script lang="ts" setup>
import { ref, inject,getCurrentInstance } from 'vue'
//  setup 中使用 defineProps 来获取父组件传递的值
const props = defineProps({
    loginUser: {
        type: Object,
        required: true
    },
    rules: {
        type: Object,
        required: true
    }
})

// @ts-ignore
// const { ctx } = getCurrentInstance()
let { proxy } = getCurrentInstance();

const handleLogin = (formName: String): void => {
    proxy.$refs[formName].validate((valid: boolean) => {
        if (valid) {
            alert('submit!')
        } else {
            console.log("error submit!!");
            return false;
        }
    });
}

</script>

<style lang="less" scoped>
@import url('../style/style.less');
</style>

