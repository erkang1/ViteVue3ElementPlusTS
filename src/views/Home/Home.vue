<template>
    <div class="container">
        <div class="common-layout">
            <el-container>
                <el-aside style="width: auto !important;">
                    <Slider></Slider>
                </el-aside>
                <el-container>
                    <el-header>
                        <Header></Header>
                    </el-header>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Slider from "@/components/Slider.vue"
import Header from "@/components/Header.vue"
</script>


<style lang="less">
.el-container{
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
}</style>