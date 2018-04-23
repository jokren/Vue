var Vue = require("vue");
var $ = require("jquery");
window.$ = $;

//路由管理
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(ElementUI);



//容器的样式
require("./base.css");
import pro2 from "./components/pro2.vue";
//import xheader from "./components/header.vue";
import pro1 from "./components/pro1.vue";
import Smartisan from "./components/Smartisan-OS.vue";
import allhed from "./components/all-header.vue";
import down from "./components/download.vue";

//pro2的路由
import page1 from "./components/pro2/page1.vue";
import page2 from "./components/pro2/page2.vue";
import page3 from "./components/pro2/page3.vue";
import page4 from "./components/pro2/page4.vue";
import page5 from "./components/pro2/page5.vue";

//pro1的路由
import pro1p1 from "./components/pro1/page11.vue";
import pro1p2 from "./components/pro1/page22.vue";
import pro1p3 from "./components/pro1/page3.vue";
import pro1p4 from "./components/pro1/page4.vue";
import pro1p5 from "./components/pro1/page5.vue";



//Smartisan的路由
import Smapage1 from "./components/Smartisan/page1.vue";
import Smapage2 from "./components/Smartisan/page2.vue";
import Smapage3 from "./components/Smartisan/page3.vue";
import fh from "./components/Smartisan/fh.vue";
import kaifazhe from "./components/Smartisan/kaifazhe.vue";
import qiangda from "./components/Smartisan/qiangda.vue";
import use from "./components/Smartisan/use.vue";
import kan from "./components/Smartisan/kan.vue";
import ren from "./components/Smartisan/ren.vue";
import yun from "./components/Smartisan/yun.vue";


import luntan from "./components/luntan.vue";
//import conten from "./components/conten.vue";
require("./font/iconfont.css")

const router = new VueRouter({
	routes: [
		{
			path: '/pro2',
			component: pro2,
			children: [
				{
					path: 'page1',
					component: page1
				},
				{
					path: 'page2',
					component: page2
				},
				{
					path: 'page3',
					component: page3
				},
				{
					path: 'page4',
					component: page4
				},
				{
					path: 'page5',
					component: page5
				},

			]
		},
		{
			path: '/Smartisan',
			component: Smartisan,
			children: [
				{
					path: 'Smapage1',
					component: Smapage1
				},
				{
					path: 'Smapage2',
					component: Smapage2
				},
				{
					path: 'Smapage3',
					component: Smapage3
				},
				{
					path: 'fh',
					component: fh
				},
				{
					path: 'kaifazhe',
					component: kaifazhe
				},
				{
					path: 'qiangda',
					component: qiangda
				},
				{
					path: 'use',
					component: use
				},
				{
					path: 'kan',
					component: kan
				},
				{
					path: 'ren',
					component: ren
				},
				{
					path: 'yun',
					component: yun
				},
			]
		},
		{
			path: '/down',
			component: down,
		},
		{
			path: '/pro1',
			component: pro1,
			children: [
				{
					path: 'pro1p1',
					component: pro1p1
				},
				{
					path: 'pro1p2',
					component: pro1p2
				},
				{
					path: 'pro1p3',
					component: pro1p3
				},
				{
					path: 'pro1p4',
					component: pro1p4
				},
				{
					path: 'pro1p5',
					component: pro1p5
				},
			]
		},
		{
			path: '/luntan',
			component: luntan,
		},
	]
	// （缩写）相当于 routes: routes
})

new Vue({
	//容器作用域
	el: "#demo",
	//容器内容
	template: `
		<div>	
		<allhed />
		
		
		</div>
	`,
	//容器数据
	data: {

	},
	//	store,
	router,
	//容器的逻辑
	methods: {},
	//注册组件
	components: {
		allhed, 
	

	}
})
