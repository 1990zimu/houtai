<template>
  <div class="login" v-if="f==false">
    <div class="img"></div>
    <h2 class="h2">渠道商管理平台</h2>
    <form class="form">
      <!-- <select class="select">
        <option value>管理员</option>
        <option value>企业</option>
        <option value>平台</option>
      </select>-->
      <input type="text" placeholder="账号" v-model="name" />
      <input type="text" placeholder="密码" v-model="password" />
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
      f: false,
      name: "",
      password: ""
    };
  },
  methods: {
    //登录
    loginto() {
      // 收集表单数据
      let { name, password } = this;

      //// --- ajax -- 接口 ---/node --- 数据库查询用户密码是否正确
      this.axios
        .post("/login", {
          name: name,
          password: password
        })
        .then(res => {
          console.log(res.data);
          if (res.data.err_code == 200) {
            // 正确 -- 保存token --- 跳转到 base 页面
            localStorage.setItem(
              "houtaitoken",
              JSON.stringify({ id: res.data.id, token: res.data.token })
            );

            //跳转到 base 页面
            this.f = true; //显示 ✅ div
            setTimeout(() => {
              this.$router.push({ name: "fxuser" });
            }, 3000);
          } else {
            this.name = "";
            this.password = "";
          }
        });

      //错误-- 当前页面 不跳转
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.select {
  border: 1px solid #ccc;
  line-height: 40px;
  color: #666;
  font-size: 20px;
  margin-bottom: 10px;
  /* padding: 15px; */
}

input {
  height: 25px;
  margin-bottom: 5px;
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