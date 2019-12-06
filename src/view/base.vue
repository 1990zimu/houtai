<template>
  <div class="base">
    <el-container>
      <el-header>
        <h1>渠道商商品管理系统</h1>
        <el-button @click="loginout()">退出</el-button>
      </el-header>
      <el-container class="content">
        <!-- 左侧导航 -->
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <!-- 统计 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-orange"></i>
                <span>统计</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1" @click="$router.push({'name':'fxuser'})">用户分析</el-menu-item>
                <el-menu-item index="1-2" @click="$router.push({'name':'fxorder'})">订单分析</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 管理 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-folder"></i>
                <span>管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">用户管理</el-menu-item>
                <el-menu-item index="2-2">商品管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <!--权限管理 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-folder"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="$router.push({name:'qxgllist'})">权限列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- 右侧主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    loginout() {
      // 清除 本地储存中的 token
      localStorage.removeItem("houtaitoken");
      // 跳转到 登录页面
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang="">
* {
  margin: 0;
  padding: 0;
}
.base {
  background: #ebebec;
}
.content {
  margin-top: 20px;
}
.el-header {
  display: flex;
  justify-content: space-around;
  background: #f7f7f7;
  align-items: center;
}
.el-aside {
  margin-left: 10px;
  margin-right: 10px;
  height: 100vh;

  background: #f7f7f7;
  overflow: auto;
}
.el-main {
  height: 100vh;
  background: #f7f7f7;
  overflow: auto;
  margin-right: 10px;
}
</style>