<template>
  <el-col style="background: none; height: 80%;">
    <MenuLogo></MenuLogo>
    <el-menu 
    :default-active = "activeIndex"
    :collapse = "isCollapse"
    :default-openeds = "0"
    :router="true"
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    text-color="#ffffff"
    background-color="#273444" 
    active-text-color="#4e9dfc" 
    style="height: 100%;"
    
    >
      <Menuitem :menuList="menuList"></Menuitem>
    </el-menu>
  </el-col>
</template>
  
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import Menuitem from '@/components/MenuItem.vue'
import MenuLogo from '@/components/Menulogo.vue'


const route = useRouter();
const activeIndex = computed(() => {
  //@ts-ignore
  const {path} = route;
  return path;
})

let menuList = reactive([
{
    path: "/ViteVue3ElementPlusTS/dashboard",
    component: "../views/dashboard/Index.vue",
    meta: {
      title: "首页",
      icon: "House",
    }
  },
  {
    path: "/ViteVue3ElementPlusTS/setting",
    component: "../views",
    meta: {
      title: "系统设置",
      icon: "Setting",
    },
    children: [
      {
        path: "/ViteVue3ElementPlusTS/rolesetting",
        component: "../views/rolesetting.vue",
        meta: {
          title: "角色设置",
          icon: "UserFilled",
        },
      },
      {
        path: "/ViteVue3ElementPlusTS/pagesetting",
        component: "",
        meta: {
          title: "站点设置",
          icon: "Promotion",
        },
      },
    ]
  },
])

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

</script>
  
<style lang="less">
.el-menu {
  background: none !important;
}

.el-aside {
  background: #324155 !important;
}

li {
  color: #fff;
}
</style>