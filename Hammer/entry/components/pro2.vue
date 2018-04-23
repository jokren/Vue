<template>
	<div>
		<!--<div id="pro2-header">
			<ul>
				<li><span class="iconfont">&#xe647;</span></li>
				<li><span class="iconfont">&#xe82e;</span></li>
				<li><input type="button" value="现在购买" /></li>
			</ul>
		</div>-->
		<div id="pro2-nav">
			<ul class="pro2-nav-ul">
				<li>
					<a href="#/pro2/page1">概述</a>
				</li>
				<li>
					<a href="#/pro2/page2">设计</a>
				</li>
				<li>
					<a href="#/pro2/page3">功能</a>
				</li>
				<li>
					<a href="#/pro2/page4">操作系统</a>
				</li>
				<li>
					<a href="#/pro2/page5">技术规格</a>
				</li>
				<li>
					<a href="#/pro2/page2">以旧换新</a>
				</li>
			</ul>
		</div>
		<router-view></router-view>
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
	
	#pro2-header {
		width: 100%;
		height: 0.51rem;
		line-height: 0.51rem;
		background-color: #fcfcfc;
		border-bottom: 3px solid #e7e7e7;
	}
	
	#pro2-header ul {
		display: flex;
	}
	
	#pro2-header ul li {
		flex: 1;
		text-align: center;
	}
	
	#pro2-header li input {
		width: 0.78rem;
		height: 0.34rem;
		background-color: #658ae0;
		border: none;
		color: #fff;
		border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
	}
	
	#pro2-header li span {
		font-size: 0.3rem;
		color: #cdbdae;
	}
	
	#pro2-nav {
		height: 0.4rem;
		background-color: #f7f7f7;
		line-height: 0.4rem;
	}
	
	#pro2-nav ul {
		/*display: flex;*/
		width: 100%;
	}
	
	#pro2-nav .pro2-nav-ul li {
		float: left;
		/*width: 0.27rem;*/
		padding-left: 0.15rem;
		height: 0.41rem;
	}
	


</style>