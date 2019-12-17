<template>
  <div>
    <el-button @click="$router.push({'name':'spadd'})">添加商品</el-button>

    <div class="search">
      <div class="s-title">搜索</div>
      <el-form class="demo-form-inline">
        <el-form-item>
          <el-select placeholder="每页条数" v-model="value">
            <el-option value="3"></el-option>
            <el-option value="5"></el-option>
            <el-option value="10"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="content">
      <div class="c-title">商城商品设置</div>

      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="goodsname" label="商品名"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
      </el-table>

      <!-- 分页 -->

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="pageSise"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      value: "",
      total: 0,
      page: 1,
      pageSise: 3,
      tableData: [],
      currentPage4: 4
    };
  },

  mounted() {
    this.axios.get("/ceshisum").then(res => {
      this.total = res.data.sum;
    });
    this.hqsj(this.page, this.pageSise);
  },
  methods: {
    hqsj(page, pageSise) {
      this.axios
        .get("/ceshify", {
          params: {
            page: page,
            limit: pageSise
          }
        })
        .then(res => {
          this.tableData = res.data.info;
        });
    },

    handleSizeChange(val) {
      this.pageSise = val;
      // console.log(`每页 ${val} 条`);
      this.hqsj(this.page, val);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.hqsj(val, this.pageSise);
    }
  }
};
</script>
<style lang="">
.search {
  height: 100px;
}
.s-title,
.c-title {
  height: 78px;
  line-height: 78px;
  background-color: rgba(224, 224, 224, 1);
  border: 1px solid rgba(224, 224, 224, 1);
}
.demo-form-inline {
  display: flex;
}
</style>