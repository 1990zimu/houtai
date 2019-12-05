<template>
  <div class="login" v-if="f==false">
    <div class="img"></div>
    <h2 class="h2">渠道商管理平台</h2>
    <form class="form">
      <select name id>
        <option value>管理员</option>
        <option value>企业</option>
        <option value>平台</option>
      </select>
      <input type="text" placeholder="账号" />
      <input type="text" placeholder="密码" />
      <input type="button" value="登录" @click="loginto()" />
    </form>
  </div>
  <div v-else class="ok">
    <i class="el-icon-success size animated shake"></i>
    <p class="msg animated fadeInLeft">登录成功</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      f: false
    };
  },
  methods: {
    //登录
    loginto() {
      // 收集表单数据 --- ajax -- 接口 ---/
      ////node --- 数据库查询用户密码是否正确
      // 返回 --- 正确（token） -- 错误

      // 正确 -- 保存token --- 跳转到 base 页面
      //错误-- 当前页面 不跳转

      this.f = true; //显示 ✅ div
      setTimeout(() => {
        this.$router.push({ name: "base" });
      }, 3000);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.ok {
  height: 100vh;
  width: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
}
.msg {
  text-align: center;
}
.size {
  font-size: 100px;
}
.img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: red;
}
.h2 {
  text-align: center;
}
.login {
  width: 70%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid black; */
}
.form {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>