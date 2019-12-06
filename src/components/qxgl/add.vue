<template>
  <div>
    <h1>我是添加权限的组件</h1>
    <el-form ref="form" label-width="100px">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="路由name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <!-- select -->
      <el-form-item label="父权限">
        <el-cascader v-model="value" :show-all-levels="false" :options="options"></el-cascader>
      </el-form-item>

      <el-form-item>
        <el-button @click="add">添加</el-button>
      </el-form-item>
    </el-form>
    {{value}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      name: "",
      value: [],
      options: [
        //默认 一级 pid 0
        {
          value: "0",
          label: "一级权限"
        },
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                }
              ]
            }
          ]
        },
        {
          value: "0",
          label: "统计",
          children: [
            {
              value: "1",
              label: "用户统计"
            }
          ]
        }
      ]
    };
  },
  methods: {
    add() {
      let pid = this.value.pop();

      let obj = {
        title: this.title,
        name: this.name,
        pid: pid
      };
      console.log(obj);
    }
  }
};
</script>