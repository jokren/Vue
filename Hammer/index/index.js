var Vue = require("vue");
require("./index.css")
var $ = require("jquery");
window.$ = $;
require("weui");
import Vuex from 'vuex'//var Vuex = require('vuex')
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const store = new Vuex.Store({
	//消息
	state: {
		bool: true,
		title:"111"
	},
	//获取值得方法
	getters: {
		getSrc(state) {
			return state.src
		}
	}
})
import xclass from "./index/classify.vue"
import xheader from "./index/index-header.vue";
import xfooter from "./index/footer.vue";
// import xcart1 from "./cart/content.vue";
// import xempty from "./cart/empty.vue";
import xcart from "./cart/cart.vue";

const router = new VueRouter({
	routes: [{
		path: '/',
		component: xheader,
	},{
		path: '/hot',
		component: xclass
	},
		{
			path: '/cart',
			component: xcart
		}
	]
	// （缩写）相当于 routes: routes
})

var header = new Vue({
	el: "#index",
	template:`
     <div>
     <router-view></router-view>
	<xfooter />
	</div>
	`,
	store,
	router,
	components: {
		xheader,
		xfooter,
		xcart
	}
})


