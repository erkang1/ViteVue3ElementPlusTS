<template>
    <div class="container">
        <div class="forms-container">
            <div class="loginbgicon"></div>
            <div class="signin-signup">
                <div class="signbox">
                    <!-- 登陆 -->
                    <LoginForm :loginUser="loginUser" :rules="rules" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { loginUser, rules } from "@/utils/loginValidators"  // 导入登录验证 ts
import LoginForm from "@/components/LoginForm.vue"; // 导入登陆组件
</script>


<style lang="less" scoped>
@import url('../../style/style.less');
</style>