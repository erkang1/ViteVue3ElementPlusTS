<template>
    <div class="lk">
        <el-card class="box-card main-box">
            <div class="top-img-box">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="top-text-box">
                <div class="top-textb-box">中午好 admin，忙碌了一上午，记得多喝水哦。</div>
                <div class="top-textl-box">
                    最近更新：🎉 Demo 布局，侧边导航配置完成。 📦 update️： vue v3.2.45；
                </div>
            </div>
        </el-card>
        <div class="m-box">
            <el-col :span="8">
                <el-card shadow="hover"> Hover </el-card>
            </el-col>
            
        </div>
    </div>
</template>

<style lang="less" scoped>
.box-card {
    // height: 120px;
    margin: 0 auto;
    box-shadow: 0px 0px 12px rgba(128, 128, 128, 0.12) !important;

    .top-img-box {
        height: 60px;
        width: 60px;
        float: left;
        margin: 15px;

        img {
            width: 100%;
        }
    }

    .top-text-box {
        float: left;
        margin: 15px;

        .top-textb-box {
            height: 100%;
            font-size: 20px;
            padding: 5px 10px;
        }

        .top-textl-box {
            font-size: 15px;
            padding: 10px;
            color: #808695;
        }
    }

}

.m-box {
    margin-top: 25px;
}
</style>