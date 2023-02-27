<template>
    <el-page-header :icon="null">
      <template #content >
        <div class="flex head items-center">
          <el-avatar
            :size="32"
            class="mr-3"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
            用户
          </span>
          <el-tag>Default</el-tag>
        </div>
      </template>
    </el-page-header>
  </template>

<style lang="less">
.head{
    float: right;
    .el-page-header__content{
        float: right;
    }
}
</style>
  