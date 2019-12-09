<template>
  <div>
    <h1>添加角色</h1>
    <el-form ref="form" label-width="100px">
      <el-form-item label="角色名">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="权限">
        <div class="block">
          <el-cascader :options="options" v-model="value" :props="props" collapse-tags clearable></el-cascader>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="add">添加</el-button>
      </el-form-item>
    </el-form>
    {{title}}
    {{Array.from(new Set(value.flat(Infinity))) }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      props: { multiple: true, checkStrictly: true },
      value: [],
      options: [
        {
          value: 1,
          label: "统计",
          children: [
            {
              value: 2,
              label: "用户分析",
              children: [{ value: 4, label: "用户添加分析" }]
            },
            { value: 3, label: "订单分析" }
          ]
        }
      ]
    };
  },
  methods: {
    add() {
      let obj = {
        title: this.title,
        qxid: Array.from(new Set(this.value.flat(Infinity)))
      };
      console.log(obj);
      // 将 obj 通过 ajax  传递给 node
      // node --- obj  ---mongodb
    }
  }
};
</script>