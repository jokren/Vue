<template>
	<div>
		<div id="pro1-page2-one">
			<img src="http://static.smartisanos.cn/u3/assets/images/design01.0e8e6bc09a1fd717578776f88ff354bc.webp" />
		</div>
		<div id="pro1-page2-two">
			<img src="http://static.smartisanos.cn/u3/assets/images/design02.8b9803c2afda11c3dd6592f0e09451b0.webp" />
		</div>
		<div id="pro1-page2-three">
			<img src="http://static.smartisanos.cn/u3/assets/images/design03.abf275f295a1173356f266e3af2053ad.webp" />
		</div>
		
		<div id="pro1-page2-four">
			<img src="http://static.smartisanos.cn/u3/assets/images/design04.edebddde15cfa07d195cc97887660d4e.webp" />
		</div>
		<div id="pro1-page2-five">
			<img src="http://static.smartisanos.cn/u3/assets/images/design05.c079a64bcb05a5ca78ecbf1686293caa.webp" />
		</div>
		<div id="pro1-page2-slide">
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
		<div id="pro1-page2-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="pro1-page2-one">
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
			<div class="pro1-page2-two">
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
	#pro1-page2-one img {
		width: 100%;
		height:7.22rem;
	}
	
	#pro1-page2-two img {
		width: 100%;
		height: 8.91rem;
	}
	
	#pro1-page2-three img {
		width: 100%;
		height: 8.92rem;
	}
	#pro1-page2-four img {
		width: 100%;
		height: 8.91rem;
	}
	#pro1-page2-five img {
		width: 100%;
		height: 17.75rem;
	}

	
	#pro1-page2-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#pro1-page2-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#pro1-page2-slide .haode div {
		/*height: 0.38rem;*/
		/*width: 90%;*/
		/*text-align: center;*/
		/*background-color:#f5f5f5 ;*/
	}
	
	#pro1-page2-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#pro1-page2-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	#pro1-page2-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#pro1-page2-footer .privacy li a {
		color: blue;
	}
	
	#pro1-page2-footer p {
		margin-top: 0.15rem;
	}

	#pro1-page2-footer .pro1-page2-one{
		margin-top: 0.15rem;
	}
	#pro1-page2-footer .pro1-page2-one h6{
		float: left;
		padding:0 0.1rem 0 0.6rem;
	}
	#pro1-page2-footer .pro1-page2-one ul li{
		float: left;
		padding:0 0.1rem;
		border-left: 1px solid #ccc;
		
	}
	#pro1-page2-footer .pro1-page2-one ul li a{
		color: #0000FF;
	}
	#pro1-page2-footer .pro1-page2-two{
		text-align: center;
		padding-top: 0.08rem;
	}
</style>