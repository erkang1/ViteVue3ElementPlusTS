<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <i :class="menu.meta.icon"></i>
                <!-- 动态组件的使用 -->
                <component  class="icons" :is="menu.meta.icon" />
                <span>{{ menu.meta.title }}</span>
            </template>

            <menu-item :menuList="menu.children"></menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="menu.path">
            <i :class="menu.meta.icon"></i>
            <!-- 动态组件的使用 -->
            <component class="icons" :is="menu.meta.icon"/>
            <template #title>{{ menu.meta.title }} </template>
        </el-menu-item>
    </template>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps(['menuList'])

</script>

<style lang="less" scoped>
.icons {
    height: 18px;
    width: 24px;
    margin-left: 5px;
}
</style>