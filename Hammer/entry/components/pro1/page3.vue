<template>
	<div>
		<div id="pro1-page3-one">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_01.29d050c01fc6fca051ce2be70ef9903e.webp" />
		</div>
		<div id="pro1-page3-two">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_02.cf7dfb10f054d1ac8bce5616ec959d6d.webp" />
		</div>
		<div id="pro1-page3-three">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_03.c95f7c2993d2ab55bf875899d32e7a34.webp" />
		</div>
		<div id="pro1-page3-four">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_04.fe9346428da782d1ce147da75642bc33.webp" />
		</div>
		<div id="pro1-page3-five">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_07.8673afe531928fc39fe62dce0c2f702c.webp" />
		</div>
		<div id="pro1-page3-six">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_08.6ab36f3f85cb690ee99530715a5c0066.webp" />
		</div>
		<div id="pro1-page3-seven">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_09.10cd58d8d9058da9a646d7c8cb7b125d.webp" />
		</div>
		<div id="pro1-page3-eight">
			<img src="http://static.smartisanos.cn/u3/assets/images/osborn-feature-wap_10.e7e192f6105ac59f8c6ba589d413f147.webp" />
		</div>
		
		<div id="pro1-page3-slide">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="订单服务 " name="1">
					<div><a href="https://www.smartisan.com/support/#/help-service/instruction">购买指南</a></div>
					<div><a href="https://www.smartisan.com/support/#/help-service/payment">支付方式</a></div>
					<div><a href="https://www.smartisan.com/support/#/help-service/delivery">送货政策</a></div>
				</el-collapse-item>
				<el-collapse-item title="服务支持" name="2">
					<div>售货服务</div>
					<div>售货政策</div>
					<div>保修服务</div>
					<div>维修报价</div>
					<div>维修门店</div>
					<div>零售门店</div>
				</el-collapse-item>
				<el-collapse-item title="自助服务" name="3">
					<div>热点资讯</div>
					<div>预约购买</div>
					<div>订单物流</div>
					<div>日常使用</div>
					<div>常见问题</div>
				</el-collapse-item>
				<el-collapse-item title="媒体中心" name="4">
					<div>新闻动态</div>
					<div>官方视频</div>
					<div>图片资源</div>
					<div>时尚之选</div>
				</el-collapse-item>
				<el-collapse-item title="关于公司" name="5">
					<div>公司简介</div>
					<div>获奖信息</div>
					<div>企业文化</div>
					<div>加入我们</div>
					<div>联系我们</div>
				</el-collapse-item>
				<el-collapse-item title="关注我们" name="6">
					<div><a href="https://weibo.com/smartisan">新浪微博</a></div>
					<div>官方微博</div>
					<div><a href="http://tieba.baidu.com/f?kw=%B4%B8%D7%D3%BF%C6%BC%BC">官方之贴</a></div>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div id="pro1-page3-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="pro1-page3-one">
				<h6>北京锤子数码科技有限公司</h6>
				<ul>
					<li>
						<a href="#">法律声明</a>
					</li>
					<li>
						<a href="#">隐私条款</a>
					</li>
				</ul>
			</div><br />
			<div class="pro1-page3-two">
				<i>京ICP备14041720号-1 京ICP证140622号 京公网安备11010502025474</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: []
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			}
		}
	}
</script>

<style scoped>
	#pro1-page3-one img {
		width: 100%;
		height: 7.29rem;
	}
	
	#pro1-page3-two img {
		width: 100%;
		height: 6.49rem;
	}
	
	#pro1-page3-three img {
		width: 100%;
		height:9.64rem;
	}
	#pro1-page3-four img {
		width: 100%;
		height: 21.67rem;
	}
	
	#pro1-page3-five img {
		width: 100%;
		height: 4.54rem;
	}
	
	#pro1-page3-six img {
		width: 100%;
		height:7.38rem;
	}
	#pro1-page3-seven img {
		width: 100%;
		height: 12.57rem;
	}
	
	#pro1-page3-eight img {
		width: 100%;
		height: 4.40rem;
	}
		
	
	#pro1-page3-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#pro1-page3-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#pro1-page3-slide .haode div {
		/*height: 0.38rem;*/
		/*width: 90%;*/
		/*text-align: center;*/
		/*background-color:#f5f5f5 ;*/
	}
	
	#pro1-page3-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#pro1-page3-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	#pro1-page3-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#pro1-page3-footer .privacy li a {
		color: blue;
	}
	
	#pro1-page3-footer p {
		margin-top: 0.15rem;
	}

	#pro1-page3-footer .pro1-page3-one{
		margin-top: 0.15rem;
	}
	#pro1-page3-footer .pro1-page3-one h6{
		float: left;
		padding:0 0.1rem 0 0.6rem;
	}
	#pro1-page3-footer .pro1-page3-one ul li{
		float: left;
		padding:0 0.1rem;
		border-left: 1px solid #ccc;
		
	}
	#pro1-page3-footer .pro1-page3-one ul li a{
		color: #0000FF;
	}
	#pro1-page3-footer .pro1-page3-two{
		text-align: center;
		padding-top: 0.08rem;
	}
</style>