// 载入vue
import Vue from "vue";
// 载入vuex
import Vuex from "vuex"
// 使用 vuex
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
    //状态
    state: {
        // 规格 数组
        stArr: [
            {
                "name": "8G",
                stitem: [
                    { "itemname": "白色", "price": 100 },
                    { "itemname": "黑色", "price": 200 }
                ]
            },
            {
                "name": "16G",
                stitem: [
                    { "itemname": "白色", "price": 300 },
                    { "itemname": "黑色", "price": 300 },
                    { "itemname": "灰色", "price": 400 },

                ]
            }
        ]
    },
    // 方法 --- 可以是异步的操作
    actions: {},
    // 唯一改变 state 的方法
    mutations: {
        //添加一项 规则
        add(state) {
            state.stArr.push({
                "name": "",
                stitem: [
                    { "itemname": "", "price": "" },

                ]
            })
        },
        // 根据下标删除 一项规则
        delone(state, index) {
            state.stArr.splice(index, 1)
        },
        // 添加一项 规则 参数 +价格
        addstitem(state, index) {
            state.stArr[index].stitem.push({ "itemname": "", "price": "" })
        },
        // stArr 的下标  stitem 下标
        delstitemone(state, obj) {
            console.log(obj)
            let { stindex, stitemindex } = obj

            state.stArr[stindex].stitem.splice(stitemindex, 1)
        },


        // 修改  strArr[stindex].name  ---- stindex, name

        editStrArrName(state, obj) {
            let { stindex, name } = obj;
            state.stArr[stindex].name = name;
        }


    },
    // 相当于计算属性
    getters: {}


})

//导出仓库

export default store;