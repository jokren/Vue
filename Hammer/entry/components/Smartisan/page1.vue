<template>
	<div>
		<div id="Smartisan-OS-one">
			<img src="../../czimg/os_01.jpg" />
		</div>
		<div id="Smartisan-OS-two">
			<img src="../../czimg/os_02.jpg" />
		</div>
		<div id="Smartisan-OS-three">
			<img src="../../czimg/os_03.jpg" />
		</div>
		<div id="Smartisan-OS-four">
			<img src="../../czimg/os_04.jpg" />
		</div>
		<div id="Smartisan-OS-five">
			<img src="../../czimg/os_05.jpg" />
		</div>
		<div id="Smartisan-OS-six">
			<img src="../../czimg/os_06.jpg" />
		</div>
		<div id="Smartisan-OS-seven">
			<img src="../../czimg/os_07.jpg" />
		</div>
		<div id="Smartisan-OS-eight">
			<img src="../../czimg/os_08.jpg" />
		</div>
		<div id="Smartisan-OS-night">
			<img src="../../czimg/os_09.jpg" />
		</div>
		<div id="Smartisan-OS-ten">
			<img src="../../czimg/os_10.jpg" />
		</div>
		<div id="Smartisan-OS-oneo">
			<img src="../../czimg/os_11.jpg" />
		</div>
		<div id="Smartisan-OS-oneot">
			<img src="../../czimg/os_12.jpg" />
		</div>
		<div id="Smartisan-OS-onethr">
			<img src="../../czimg/os_13.jpg" />
		</div>
		<div id="Smartisan-OS-onefo">
			<img src="../../czimg/os_14.jpg" />
		</div>
		<div id="Smartisan-OS-onefive">
			<img src="../../czimg/os_15.jpg" />
		</div>

		<div id="Smartisan-OS-onesix">
			<img src="../../czimg/os_16.jpg" />
		</div>
		<div id="Smartisan-OS-oneseven">
			<img src="../../czimg/os_17.jpg" />
		</div>
		<div id="Smartisan-OS-oneiht">
			<img src="../../czimg/os_18.jpg" />
		</div>
		<div id="Smartisan-OS-onenigth">
			<img src="../../czimg/os_19.jpg" />
		</div>
		<div id="Smartisan-OS-twoo">
			<img src="../../czimg/os_20.jpg" />
		</div>
		<div id="Smartisan-OS-twoone">
			<img src="../../czimg/os_21.jpg" />
		</div>
		<div id="Smartisan-OS-twoT">
			<img src="../../czimg/os_22.jpg" />
		</div>
		<div id="Smartisan-OS-twothr">
			<img src="../../czimg/os_23.jpg" />
		</div>
		<div id="Smartisan-OS-twofo">
			<img src="../../czimg/os_24.jpg" />
		</div>
		<div id="Smartisan-OS-twofive">
			<img src="../../czimg/os_25.jpg" />
		</div>
		<div id="Smartisan-OS-twosix">
			<img src="../../czimg/os_26.jpg" />
		</div>
		<div id="Smartisan-OS-twoseven">
			<img src="../../czimg/os_27.jpg" />
		</div>
		<div id="Smartisan-OS-twoeight">
			<img src="../../czimg/os_28.jpg" />
		</div>
		<div id="Smartisan-OS-twonight">
			<img src="../../czimg/os_29.jpg" />
		</div>
		<div id="Smartisan-OS-threee">
			<img src="../../czimg/os_30.jpg" />
		</div>
		<div id="Smartisan-OS-slide">
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
		<div id="Smartisan-OS-footer">
			<div>
				<p>Copyright © 2018, Smartisan Digital Co., Ltd. All Rights Reserved.</p>
			</div>
			<div class="Smartisan-OS-one">
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
			<div class="Smartisan-OS-two">
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
	#Smartisan-OS-one img {
		width: 100%;
		height: 5.17rem;
	}
	
	#Smartisan-OS-two img {
		width: 100%;
		height: 3.51rem;
	}
	
	#Smartisan-OS-three img {
		width: 100%;
		height: 7.4722rem;
	}
	
	#Smartisan-OS-four img {
		width: 100%;
		height: 6.7464rem;
	}
	
	#Smartisan-OS-five img {
		width: 100%;
		height: 3.2361rem;
	}
	
	#Smartisan-OS-six img {
		width: 100%;
		height: 6.9548rem;
	}
	
	#Smartisan-OS-seven img {
		width: 100%;
		height: 7.4688rem;
	}
	
	#Smartisan-OS-eight img {
		width: 100%;
		height: 3.5347rem;
	}
	
	#Smartisan-OS-night img {
		width: 100%;
		height: 6.9513rem;
	}
	
	#Smartisan-OS-ten img {
		width: 100%;
		height: 7.26rem;
	}
	
	#Smartisan-OS-oneo img {
		width: 100%;
		height: 7.89rem;
	}
	
	#Smartisan-OS-oneot img {
		width: 100%;
		height: 2.49rem;
	}
	
	#Smartisan-OS-onethr img {
		width: 100%;
		height: 6.54rem;
	}
	
	#Smartisan-OS-onefo img {
		width: 100%;
		height: 7.0659rem;
	}
	
	#Smartisan-OS-onefive img {
		width: 100%;
		height: 6.8541rem;
	}
	
	#Smartisan-OS-onesix img {
		width: 100%;
		height: 2.5242rem;
	}
	
	#Smartisan-OS-oneseven img {
		width: 100%;
		height: 3.76rem;
	}
	
	#Smartisan-OS-oneiht img {
		width: 100%;
		height: 2.26rem;
	}
	
	#Smartisan-OS-onenigth img {
		width: 100%;
		height: 7.1631rem;
	}
	
	#Smartisan-OS-twoo img {
		width: 100%;
		height: 4.46rem;
	}
	
	#Smartisan-OS-twoone img {
		width: 100%;
		height: 4.88rem;
	}
	
	#Smartisan-OS-twoT img {
		width: 100%;
		height: 1.22rem;
	}
	
	#Smartisan-OS-twothr img {
		width: 100%;
		height: 5.98rem;
	}
	
	#Smartisan-OS-twofo img {
		width: 100%;
		height: 1.22rem;
	}
	
	#Smartisan-OS-twofive img {
		width: 100%;
		height: 6.1978rem;
	}
	
	#Smartisan-OS-twosix img {
		width: 100%;
		height: 2.4964rem;
	}
	
	#Smartisan-OS-twoseven img {
		width: 100%;
		height: 6.90rem;
	}
	
	#Smartisan-OS-twoeight img {
		width: 100%;
		height: 7.5813rem;
	}
	
	#Smartisan-OS-twonight img {
		width: 100%;
		height: 2.4375rem;
	}
	
	#Smartisan-OS-threee img {
		width: 100%;
		height: 6.20rem;
	}
	
	#Smartisan-OS-slide .haode:nth-child(1) {
		border-top: 1px solid #e8e4e4;
	}
	
	#Smartisan-OS-slide .haode {
		padding-left: 0.3rem;
		border-bottom: 1px solid #e8e4e4;
	}
	
	#Smartisan-OS-footer {
		height: 0.81rem;
		width: 100%;
	}
	
	#Smartisan-OS-footer h5 {
		float: left;
		padding: 0 0.1rem
	}
	
	#Smartisan-OS-footer .privacy li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
		text-align: center;
	}
	
	#Smartisan-OS-footer .privacy li a {
		color: blue;
	}
	
	#Smartisan-OS-footer p {
		margin-top: 0.15rem;
	}
	
	#Smartisan-OS-footer .Smartisan-OS-one {
		margin-top: 0.15rem;
	}
	
	#Smartisan-OS-footer .Smartisan-OS-one h6 {
		float: left;
		padding: 0 0.1rem 0 0.6rem;
	}
	
	#Smartisan-OS-footer .Smartisan-OS-one ul li {
		float: left;
		padding: 0 0.1rem;
		border-left: 1px solid #ccc;
	}
	
	#Smartisan-OS-footer .Smartisan-OS-one ul li a {
		color: #0000FF;
	}
	
	#Smartisan-OS-footer .Smartisan-OS-two {
		text-align: center;
		padding-top: 0.08rem;
	}
</style>