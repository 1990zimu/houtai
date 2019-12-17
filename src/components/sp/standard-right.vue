<template>
  <div>
    <!-- stArr 的下标  stitem 下标 -->
    <!-- {{stitemindex}} -->
    <button @click="delstitemone({'stindex':stindex,'stitemindex':stitemindex})">X</button>
    <input type="text" placeholder="规格参数名" v-model="stitem.itemname" />
    <input type="text" placeholder="价格" v-model="stitem.price" />
    <br />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  //   stArr 的下标 "stindex" ,, stitem 下标  "stitemindex",
  props: ["stitem", "stitemindex", "stindex"],
  methods: {
    ...mapMutations(["delstitemone"])
  }
};
</script>