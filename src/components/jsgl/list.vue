<template>
  <div>
    <h1>我是角色列表</h1>
    <el-button @click="$router.push({'name':'jsadd'})">添加角色</el-button>
    <el-table :data="tableData" style="width: 100%" max-height="500">
      <el-table-column fixed prop="_id" label="id"></el-table-column>
      <el-table-column fixed prop="title" label="角色名"></el-table-column>

      <!-- 操作 删除 -->
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData,scope.row._id)"
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
  data() {
    return {
      tableData: [
        {
          _id: 1,
          title: "管理员"
        },
        {
          _id: 2,
          title: "程序员"
        }
      ]
    };
  },
  methods: {
    deleteRow(index, row, id) {
      row.splice(index, 1);
    }
  }
};
</script>