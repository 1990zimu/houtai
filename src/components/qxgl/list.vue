<template>
  <div>
    <!-- <h1>我是所有权限的 表格</h1> -->
    <el-button @click="$router.push({'name':'qxgladd'})">添加权限</el-button>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" max-height="500">
      <el-table-column fixed prop="_id" label="id"></el-table-column>
      <el-table-column fixed prop="title" label="标题"></el-table-column>
      <el-table-column fixed prop="name" label="路由name"></el-table-column>
      <el-table-column fixed prop="pid" label="父权限id"></el-table-column>

      <!-- 操作 删除 -->
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [
        {
          _id: "1",
          title: "统计",
          name: "",
          pid: 0
        },
        {
          _id: "2",
          title: "用户统计",
          name: "fxuser",
          pid: "1"
        },
        {
          _id: "3",
          title: "管理",
          name: "",
          pid: 0
        },
        {
          _id: "4",
          title: "用户管理",
          name: "gluser",
          pid: "3"
        }
      ]
    };
  }
};
</script>