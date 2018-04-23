<template>
	<div>
		<div id="Sma-fh-one">
			<img src="../../czimg/fh-1.jpg" />
		</div>
		<div id="Sma-fh-two">
			<img src="../../czimg/fh-2.jpg" />
		</div>
		<div id="Sma-fh-three">
			<img src="../../czimg/fh-3.jpg" />
		</div>
		<div id="Sma-fh-four">
			<img src="../../czimg/fh-4.jpg" />
		</div>
		<div id="Sma-fh-five">
			<img src="../../czimg/fh-5.jpg" />
		</div>
		<div id="Sma-fh-six">
			<img src="../../czimg/fh-6.jpg" />
		</div>
		<div id="Sma-fh-seven">
			<img src="../../czimg/fh-7.jpg" />
		</div>
		<div id="Sma-fh-eight">
			<img src="../../czimg/fh-8.jpg" />
		</div>
		<div id="Sma-fh-night">
			<img src="../../czimg/fh-9.jpg" />
		</div>
		<div id="Sma-fh-ten">
			<img src="../../czimg/fh-10.jpg" />
		</div>
		<div id="Sma-fh-oneo">
			<img src="../../czimg/fh-11.jpg" />
		</div>
		<div id="Sma-fh-onetwo">
			<img src="../../czimg/fh-12.jpg" />
		</div>
		<div id="Sma-fh-slide">
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
		<div id="Sma-fh-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="Sma-fh-one">
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
			<div class="Sma-fh-two">
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
	#Sma-fh-one img {
		width: 100%;
		height: 3.35rem;
	}
	#Sma-fh-two img {
		width: 100%;
		height:2.48rem;
	}
	#Sma-fh-three img {
		width: 100%;
		height: 2.11rem;
	}
	#Sma-fh-four img {
		width: 100%;
		height: 4.21rem;
	}
	#Sma-fh-five img {
		width: 100%;
		height: 2.81rem;
	}
	
	#Sma-fh-six img {
		width: 100%;
		height: 2.06rem;
	}
	
	#Sma-fh-seven img {
		width: 100%;
		height: 1.90rem;
	}
	#Sma-fh-eight img {
		width: 100%;
		height: 2.33rem;
	}
	#Sma-fh-night img {
		width: 100%;
		height: 2.81rem;
	}
	#Sma-fh-ten img {
		width: 100%;
		height: 2.39rem;
	}
	#Sma-fh-oneo img {
		width: 100%;
		height: 2.02rem;
	}
	#Sma-fh-onetwo img {
		width: 100%;
		height: 4.26rem;
	}
	
	#Sma-fh-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#Sma-fh-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#Sma-fh-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#Sma-fh-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	
	#Sma-fh-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#Sma-fh-footer .privacy li a {
		color: blue;
	}
	
	#Sma-fh-footer p {
		margin-top: 0.15rem;
	}
	
	#Sma-fh-footer .Sma-fh-one {
		margin-top: 0.15rem;
	}
	
	#Sma-fh-footer .Sma-fh-one h6 {
		float: left;
		padding: 0 0.1rem 0 0.6rem;
	}
	
	#Sma-fh-footer .Sma-fh-one ul li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
	}
	
	#Sma-fh-footer .Sma-fh-one ul li a {
		color: #0000FF;
	}
	
	#Sma-fh-footer .Sma-fh-two {
		text-align: center;
		padding-top: 0.08rem;
	}
</style>