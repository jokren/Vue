<template>
	<div>
		<div id="Sma-ren-one">
			<img src="../../czimg/qiangda-1.jpg" />
		</div>
		<div id="Sma-ren-two">
			<img src="../../czimg/qiangda-2.jpg" />
		</div>
		<div id="Sma-ren-three">
			<img src="../../czimg/qiangda-3.jpg" />
		</div>
		<div id="Sma-ren-four">
			<img src="../../czimg/qiangda-4.jpg" />
		</div>
		<div id="Sma-ren-five">
			<img src="../../czimg/qiangda-6.jpg" />
		</div>
		<div id="Sma-ren-six">
			<img src="../../czimg/qiangda-7.jpg" />
		</div>
		<div id="Sma-ren-seven">
			<img src="../../czimg/qiangda-8.jpg" />
		</div>
		<div id="Sma-ren-eight">
			<img src="../../czimg/qiangda-9.jpg" />
		</div>
		<div id="Sma-ren-night">
			<img src="../../czimg/qiangda-10.jpg" />
		</div>
		
		<div id="Sma-ren-slide">
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
		<div id="Sma-ren-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="Sma-ren-one">
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
			<div class="Sma-ren-two">
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
	#Sma-ren-one img {
		width: 100%;
		height: 3.85rem;
	}
	#Sma-ren-two img {
		width: 100%;
		height:2.12rem;
	}
	#Sma-ren-three img {
		width: 100%;
		height: 3.38rem;
	}
	#Sma-ren-four img {
		width: 100%;
		height: 4.10rem;
	}
	#Sma-ren-five img {
		width: 100%;
		height: 4.40rem;
	}
	
	#Sma-ren-six img {
		width: 100%;
		height: 2.44rem;
	}
	
	#Sma-ren-seven img {
		width: 100%;
		height:4.09rem;
	}
	#Sma-ren-eight img {
		width: 100%;
		height: 3.04rem;
	}
	#Sma-ren-night img {
		width: 100%;
		height: 3.22rem;
	}

	#Sma-ren-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#Sma-ren-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#Sma-ren-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#Sma-ren-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	
	#Sma-ren-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#Sma-ren-footer .privacy li a {
		color: blue;
	}
	
	#Sma-ren-footer p {
		margin-top: 0.15rem;
	}
	
	#Sma-ren-footer .Sma-ren-one {
		margin-top: 0.15rem;
	}
	
	#Sma-ren-footer .Sma-ren-one h6 {
		float: left;
		padding: 0 0.1rem 0 0.6rem;
	}
	
	#Sma-ren-footer .Sma-ren-one ul li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
	}
	
	#Sma-ren-footer .Sma-ren-one ul li a {
		color: #0000FF;
	}
	
	#Sma-ren-footer .Sma-ren-two {
		text-align: center;
		padding-top: 0.08rem;
	}
</style>