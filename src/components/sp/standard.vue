<template>
  <div class="standard-page">
    <button @click="delone(stindex)">X</button>
    <div class="left">
      <!-- <input
        type="text"
        :value="st.name"
        @input="editStrArrName({stindex:stindex,name:$event.target.value})"
        placeholder="规格名称"
      />-->
      <input type="text" v-model="st.name" placeholder="规格名称" />
    </div>
    <div class="line"></div>
    <div class="right">
      <standardRight
        v-for="(v,i) in st.stitem"
        :key="i"
        :stitem="v"
        :stitemindex="i"
        :stindex="stindex"
      ></standardRight>

      <button @click="addstitem(stindex)">增加规格参数</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import standardRight from "@/components/sp/standard-right.vue";
export default {
  // stindex stArr 数组的下标
  props: ["st", "stindex"],
  components: {
    standardRight
  },
  methods: {
    ...mapMutations(["delone", "addstitem", "editStrArrName"])
  }
};
</script>
<style lang="">
.standard-page {
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
}
.line {
  border-right: 1px solid black;
}
</style>