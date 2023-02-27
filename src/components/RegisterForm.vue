<template>
    <el-form ref="registerForm" :model="registerUser" :rules="registerRules" class="registerForm sign-up-form">
        <div class="titletext">注册Demo</div>
        <el-form-item prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item prop="password2">
            <el-input type="password" v-model="registerUser.password2" placeholder="请再次输入密码确认" />
        </el-form-item>
        <el-form-item>
            <el-select type="password" v-model="registerUser.role" placeholder="选择你的角色" style="width: 100%;">
                <el-option lable="管理员" value="管理员">管理员</el-option>
                <el-option lable="用户" value="用户">用户</el-option>
                <el-option lable="游客" value="游客">游客</el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <!--   -->
            <el-button type="primary" @click="handleRregister('registerForm')" class="submit-btn">注册</el-button>
        </el-form-item>
        <RouterLink to='/' class="register-btn" >去登陆</RouterLink>
    </el-form>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'

const props = defineProps({
    registerUser: {
        type: Object,
        required: true
    },
    registerRules: {
        type: Object,
        required: true
    }
})

// @ts-ignore
const { ctx } = getCurrentInstance()

const handleRregister = (formName: String): void => {
    ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
            alert('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

</script>

<style scoped lang="less">
@import url('../style/style.less');
</style>