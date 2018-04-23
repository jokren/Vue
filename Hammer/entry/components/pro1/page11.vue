<template>
	<div>
		<div id="pro1-one">
			<img src="http://static.smartisanos.cn/u3/assets/images/top.b7bd90b23e5b8ff4e89dcde9191e56c3.webp" />
		</div>
		<div id="pro1-two">
			<img src="http://static.smartisanos.cn/u3/assets/images/red.599ee00a84887809ad9d8f6eb48f8482.webp" />
		</div>
		<div id="pro1-three">
			<img src="http://static.smartisanos.cn/u3/assets/images/black.b1ed0b8e31b79e99076844a19666d74f.webp" />
		</div>
		<div id="pro1-four">
			<img src="http://static.smartisanos.cn/u3/assets/images/gold.0b91aa1570e9ab7b161dcafa27ca9165.webp" />
		</div>
		<div id="pro1-five">
			<img src="http://static.smartisanos.cn/u3/assets/images/features.a6fb7a0cbe2d31efd09619484bb97d9f.webp" />
		</div>
		<div id="pro1-six">
			<img src="http://static.smartisanos.cn/u3/assets/images/os.7da3c53392f1e099ee3d82f8426eadda.webp" />
		</div>

		<div id="pro1-slide">
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
		<div id="pro1-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="pro1-one">
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
			<div class="pro1-two">
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
	#pro1-one img {
		width: 100%;
		height: 8.23rem;
	}
	
	#pro1-two img {
		width: 100%;
		height: 10.25rem;
	}
	
	#pro1-three img {
		width: 100%;
		height: 8.70rem;
	}
	
	#pro1-four img {
		width: 100%;
		height: 4.69rem;
	}
	
	#pro1-five img {
		width: 100%;
		height: 8.88rem;
	}
	
	#pro1-six img {
		width: 100%;
		height: 4.99rem;
	}
	
	#pro1-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#pro1-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#pro1-slide .haode div {
		/*height: 0.38rem;*/
		/*width: 90%;*/
		/*text-align: center;*/
		/*background-color:#f5f5f5 ;*/
	}
	
	#pro1-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#pro1-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	
	#pro1-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#pro1-footer .privacy li a {
		color: blue;
	}
	
	#pro1-footer p {
		margin-top: 0.15rem;
	}
	
	#pro1-footer .pro1-one {
		margin-top: 0.15rem;
	}
	
	#pro1-footer .pro1-one h6 {
		float: left;
		padding: 0 0.1rem 0 0.6rem;
	}
	
	#pro1-footer .pro1-one ul li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
	}
	
	#pro1-footer .pro1-one ul li a {
		color: #0000FF;
	}
	
	#pro1-footer .pro1-two {
		text-align: center;
		padding-top: 0.08rem;
	}
</style>