<template>
    <div class="container">
        <div class="common-layout">
            <el-container class="all">
                <el-aside width="260px">
                    <Slider />
                </el-aside>
                <el-container class="all-box">
                    <el-header>
                        <Header></Header>
                    </el-header>
                    <el-container class="main-box">
                        <el-main style="background-color: #f6f8f9;">
                            <router-view></router-view>
                        </el-main>
                        <el-footer>
                            <div class="foot-div">Copyright erkang 2022 all right reserved，powered by ElementPlus </div>
                        </el-footer>
                    </el-container>
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
.container {
    height: 100%;

    .common-layout {
        position: relative;
        height: 100%;

        .all {
            position: relative;
            height: 100%;

            .el-header {
                padding: 0 !important;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2)
            }

            .main-box {
                // background-color: red;

                .foot-div {
                    text-align: center;
                    font-size: 14px;
                    line-height: 60px;
                }
            }
        }
    }
}
</style>