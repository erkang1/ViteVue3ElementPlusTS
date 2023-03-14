<template>
    <div class="container">
        <div class="forms-container">
            <div class="loginbgicon"></div>
            <div class="signin-signup">
                <div class="signbox">
                    <!-- 注册 -->
                    <RegisterForm :registerUser="registerUser" :registerRules="registerRules" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { registerUser, registerRules } from "@/utils/registerValidators"  // 导入注册验证 ts
import RegisterForm from "@/components/RegisterForm.vue"; // 导入注册组件
</script>

<style scoped lang="less">
@import url('../../style/style.less');
</style>

