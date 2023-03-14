<template>
  <div class="header">
    <!-- <div class="left-box ">
      <div class="icon-box">
        <img src="@/assets/images/logo-banner.png" alt="">
      </div>
      <div class="text-box">PageDemo</div>
    </div> -->
    <div class="right-box">
      <div class="userimg-box">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <Dialog></Dialog>
      <button class="loginout-box" @click="handleout()">安全退出</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus';
let router = useRouter()
const handleout = () => {
  ElMessageBox({
    title: '提示', //MessageBox 标题
    message: '确定要退出当前系统吗?', //MessageBox 消息正文内容
    confirmButtonText: '确定', //确定按钮的文本内容
    cancelButtonText: '取消', //取消按钮的文本内容
    showCancelButton: true, //是否显示取消按钮
    closeOnClickModal: true, //是否可通过点击遮罩关闭
    type: 'warning', //消息类型，用于显示图标
  }).then(() => {
    ElMessage({
      type: 'success',
      message: '退出账号!'
    })
    //  跳转路由
    router.push('./')
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消操作!'
    })
  });
}

</script>


<style lang="less">
// @media screen and (max-width: 1200px) {
//   .text-box{
//     display: none;
//   }
// }

.header {
  position: relative;
  height: 100%;
}

// .left-box {
//   width: 25%;
//   height: 100%;
//   float: left;
//   // background-color: aquamarine;
//   .icon-box{
//     width: 80px;
//     height: 50px;
//     float: left;
//     padding-left: 5%;
//     // margin: 0 auto;

//     img{
//       height: 100%;
//       width: 100%;
//       margin-top: 5px;
//     }
//   }
//   .text-box{
//     float: left;
//     text-align: center;
//     font-size: 26px;
//     font-weight: 1000;
//     letter-spacing: 1px;
//     color: rgb(0, 0, 0);
//     padding-left: 10px;
//     line-height: 60px;
//   }
// }

.right-box {
  width: 70%;
  height: 100%;
  float: right;

  // background-color: rgb(127, 172, 255);
  .userimg-box {
    height: 50px;
    width: 50px;
    position: absolute;
    right: 85px;
    top: 10%;

    img {
      height: 100%;
      width: 100%
    }
  }

  .loginout-box {
    border: 0;
    position: absolute;
    top: 25%;
    right: 10px;
    // width: 60px;
    height: 30px;
    background: none;
    cursor: pointer;
  }
}
</style>
  