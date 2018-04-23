<template>
	<div>
		<div id="pro2-page5-one">
			<div class="pro2-page5-one-title">
				<h4>让旧手机告别闲置</h4>
			</div>
			<div class="pro2-page5-one-content">
				<span>想要购买全新的漂亮得不像实力派的坚果 Pro 系列手机？要如何处理手中的旧手机？来看看这个更环保、更明智的购机选择，让旧手机告别闲置。参与“手机回收置换”计划，您的旧手机可直接抵扣购机款。 </span>
			</div>
			<div class="pro2-page5-one-content2">
				<span _ngcontent-c5="">2018 年 1 月 26 日至 2018 年 2 月 7 日，旧手机回收置换限时补贴，iPhone 回收享额外补贴，三重优惠最高额外补贴 450 元。</span>
			</div>
		</div>
		<div id="pro2-page5-two">
			<img src="../../czimg/page5-2.jpg" />
		</div>
		<div id="pro2-page5-slide">
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
		<div id="pro2-page5-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="pro2-page5-one">
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
			<div class="pro2-page5-two">
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
	#pro2-page5-one {
		width: 100%;
		height: 5.7rem;
		background: url("../../czimg/page5-1.jpg") center 0px;
		right: 0;
		left: 0;
		background-size: cover;
		margin-top: -0.09rem;
	}
	
	#pro2-page5-one .pro2-page5-one-title {
		width: 100%;
		height: 0.2rem;
	}
	
	#pro2-page5-one .pro2-page5-one-title h4 {
		color: #E7E1CD;
		padding-top: 0.4rem;
		font-size: 0.2rem;
		text-align: center;
	}
	
	#pro2-page5-one .pro2-page5-one-content {
		width: 82%;
		margin: 0.6rem auto;
	}
	
	#pro2-page5-one .pro2-page5-one-content span {
		color: #CCCCCC;
		font-size: 0.14rem;
	}
	
	#pro2-page5-one .pro2-page5-one-content2 {
		width: 82%;
		margin: 0.4rem auto;
	}
	
	#pro2-page5-one .pro2-page5-one-content2 span {
		color: #CCCCCC;
		font-size: 0.14rem;
	}
	#pro2-page5-two img{
		width: 100%;
		height: 4.90rem;
	}
	
	
	#pro2-page5-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#pro2-page5-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#pro2-page5-slide .haode div {
		/*height: 0.38rem;*/
		/*width: 90%;*/
		/*text-align: center;*/
		/*background-color:#f5f5f5 ;*/
	}
	
	#pro2-page5-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#pro2-page5-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	
	#pro2-page5-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#pro2-page5-footer .privacy li a {
		color: blue;
	}
	
	#pro2-page5-footer p {
		margin-top: 0.15rem;
	}
	
	#pro2-page5-footer .pro2-page5-one {
		margin-top: 0.15rem;
	}
	
	#pro2-page5-footer .pro2-page5-one h6 {
		float: left;
		padding: 0 0.1rem 0 0.6rem;
	}
	
	#pro2-page5-footer .pro2-page5-one ul li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
	}
	
	#pro2-page5-footer .pro2-page5-one ul li a {
		color: #0000FF;
	}
	
	#pro2-page5-footer .pro2-page5-two {
		text-align: center;
		padding-top: 0.08rem;
	}
</style>