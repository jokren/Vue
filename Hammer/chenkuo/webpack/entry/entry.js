//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";


require("weui");
//容器的样式
require("./font/iconfont.css")
//重置样式
require("./reset.css")


//状态管理
import Vuex from 'vuex'

Vue.use(Vuex)
//路由管理
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import classify from "./component/classify.vue"
import product from "./component/product.vue"
import detail from "./component/detail.vue"
import register from "./component/register.vue"
import login from "./component/login.vue"
import person from "./component/person.vue"
import zhxq from "./component/zhxq.vue"

const router = new VueRouter({
    routes : [{
        path : '/',
        component : classify
    },
        {
            path : '/product',
            component : product
        },
        {
            path : '/detail',
            component : detail
        },
        {
            path : '/register',
            component : register
        },
        {
            path : '/login',
            component : login
        },
        {
            path : '/person',
            component : person
        },
        {
            path : '/zhxq',
            component : zhxq
        }
    ]
    // （缩写）相当于 routes: routes
})


/**/
//基站
const store = new Vuex.Store({
    //消息
    state : {
        bool : false,
        type : "",
        name : ""
    }
    //获取值得方法

})


import xclassify from "./component/classify.vue"
import xproduct from "./component/product.vue"
import xdetail from "./component/detail.vue"
import xregister from "./component/register.vue"
import xlogin from "./component/login.vue"
import xperson from "./component/person.vue"
import xzhxq from "./component/zhxq.vue"

new Vue({
    el : "#demo",
    template : `
       <div style="width:100%;height:100%">
       <router-view></router-view>
       </div>
       `,
    //容器数据
    data : {},
    store,
    router,
    //容器的逻辑
    methods : {},
    //注册组件
    components : {
        xclassify,
        xproduct,
        xdetail,
        xregister,
        xlogin,
        xperson,
        xzhxq
    }
})