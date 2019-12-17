<template>
  <div>
    <h1>添加商品</h1>
    <!-- 富文本 -->
    <quill-editor v-model="zhi" :options="editorOption"></quill-editor>

    <!-- 规格 -->
    <standard v-for="(v,i) in stArr" :key="i" :st="v" :stindex="i"></standard>
    <button @click="add">增加规则</button>
    <br />
    {{stArr}}
    <el-button @click="hq">添加</el-button>
  </div>
</template>

<script>
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
  ["blockquote", "code-block"], // 引用  代码块
  [{ header: 1 }, { header: 2 }], // 1、2 级标题
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
  [{ script: "sub" }, { script: "super" }], // 上标/下标
  [{ indent: "-1" }, { indent: "+1" }], // 缩进
  // [{'direction': 'rtl'}],                         // 文本方向
  [{ size: ["small", false, "large", "huge"] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ font: [] }], // 字体种类
  [{ align: [] }], // 对齐方式
  ["clean"], // 清除文本格式
  ["link", "image", "video"] // 链接、图片、视频
];
import { mapState, mapMutations } from "vuex";
import standard from "@/components/sp/standard.vue";
export default {
  data() {
    return {
      // 规格

      // 富文本
      zhi: "",
      value: "",
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions
          }
        }
      }
    };
  },
  computed: {
    ...mapState(["stArr"])
  },
  components: {
    standard
  },
  methods: {
    ...mapMutations(["add"]),
    hq() {
      this.value = this.zhi;
      console.log(this.value);
    }
  }
};
</script>