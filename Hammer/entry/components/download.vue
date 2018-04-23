<template>
	<div>
		
		<div id="down-nave">
			<ul>
				<li>
					<a href="#">
						<img src="../czimg/down-1.png" style="width: 0.64rem;height: 0.64rem;"/>
						<p>锤子科技论坛</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<!--<img src="../czimg/.png" style="width: 0.64rem;height: 0.64rem;"/>-->
						<span class="iconfont" style="color: #5c9900;font-size: 0.64rem;line-height: 0.64rem;">&#xe642;</span>
						<p>HandShaker</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
							<img src="../czimg/donw-apple.png" />
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../czimg/down-3.png" style="width: 0.64rem;height: 0.64rem;"/>
						<p>锤子便签</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../czimg/down-4.png" style="width: 0.64rem;height: 0.64rem;"/>
						<p>欢喜云同步工具</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
							<img src="../czimg/donw-apple.png" />
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<span class="iconfont" style="color: #cd620e;font-size: 0.64rem;line-height: 0.64rem;">&#xe60f;</span>
						<p>锤子阅读</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../czimg/down6.png" style="width: 0.64rem;height: 0.64rem;"/>
						<p>锤子邮件</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
							<img src="../czimg/donw-apple.png" />	
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../czimg/down-5.png" style="width: 0.64rem;height: 0.64rem;"/>
						<p>锤子时钟</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
						</div>						
					</a>
				</li>
				<li>
					<a href="#">
						<img src="../czimg/donw-7.png" style="width: 0.64rem;height: 0.64rem;"/>
						<p>锤子日历</p>
						<div class="down-nave-one">
							<img src="../czimg/down-an.png" />	
							<img src="../czimg/donw-apple.png" />	
						</div>						
					</a>
				</li>
			</ul>
		</div>
		<div id="down-slide">
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
		<div id="down-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="down-one">
				<h6>北京锤子数码科技有限公司</h6>
				<ul>
					<li><a href="#">法律声明</a></li>
					<li><a href="#">隐私条款</a></li>
				</ul>
			</div><br />
			<div class="down-two">
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

<style>
	body {
		font-size: 0.07rem;
		line-height: 0.14rem;
	}
	
	#down-header {
		width: 100%;
		height: 0.51rem;
		line-height: 0.51rem;
		
		background-color: #000;
	}	
	#down-header ul {
		display: flex;
	}
	
	#down-header ul li {
		flex: 1;
		text-align: center;
	}
	#down-header ul li:nth-child(3) {
		flex: 0.4;
		text-align: center;
	}
	#down-header ul li:nth-child(4) {
		flex: 0.5;
		text-align: center;
	}	
	#down-header li span {
		font-size: 0.26rem;
		color: #fff;
		display: block;
	}
	
	#down-nave{
		width: 100%;
		background-color:#f6f6f6 ;
	}
	#down-nave ul{
		display: flex;
		text-align: center;
		flex-wrap: wrap;
		box-sizing: border-box;
	}
	#down-nave ul li{
		padding: 0.31rem 0;
		width: 49.5%;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	#down-nave .down-nave-one{
		margin-top: 0.1rem;
	}
	#down-nave .down-nave-one img{
		width: 0.16rem;
		height: 0.16rem;
		
	}
	#down-nave p{
		margin-top: 0.10rem;
	}
	#down-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#down-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#down-slide .haode div {
		/*height: 0.38rem;*/
		/*width: 90%;*/
		/*text-align: center;*/
		/*background-color:#f5f5f5 ;*/
	}
	
	#down-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#down-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	#down-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#down-footer .privacy li a {
		color: blue;
	}
	
	#down-footer p {
		margin-top: 0.15rem;
	}

	#down-footer .down-one{
		margin-top: 0.15rem;
	}
	#down-footer .down-one h6{
		float: left;
		padding:0 0.1rem 0 0.6rem;
	}
	#down-footer .down-one ul li{
		float: left;
		padding:0 0.1rem;
		border-left: 1px solid #ccc;
		
	}
	#down-footer .down-one ul li a{
		color: #0000FF;
	}
	#down-footer .down-two{
		text-align: center;
		padding-top: 0.08rem;
	}
</style>