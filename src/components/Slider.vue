<template>
    <div class="Slider-Box">
        <el-row class="tac sliderBox">
            <el-col :span="12">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>主页DEMO</span>
                        </template>
                        <el-menu-item-group title="主页">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="4" disabled>
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
  
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.Slider-Box{
    height: 100% !important;
    background: whitesmoke;
    border-right: 5px solide black;
    float: left;
    .el-col-12 {
    max-width: 100%;
    flex: 0 0 50%;
    .el-menu{
        background-color: rgba(255, 0, 0, 0);
        
    }
}
}
</style>
  