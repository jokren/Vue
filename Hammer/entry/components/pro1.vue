<template>
	<div>
		<div id="pro1-nav">
			<ul class="pro1-nav-ul">
				<li>
					<a href="#/pro1/pro1p1">概览</a>
				</li>
				<li>
					<a href="#/pro1/pro1p2">设计</a>
				</li>
				<li>
					<a href="#/pro1/pro1p3">功能</a>
				</li>
				<li>
					<a href="#/pro1/pro1p4">操作系统</a>
				</li>
				<li>
					<a href="#/pro1/pro1p5">技术规格</a>
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
	
	#pro1-header {
		width: 100%;
		height: 0.51rem;
		line-height: 0.51rem;
		background-color: #231310;
		border-bottom: 3px solid #301f1c;
	}
	
	#pro1-header ul {
		display: flex;
	}
	
	#pro1-header ul li {
		flex: 1;
		text-align: center;
	}
	
	#pro1-header li input {
		width: 0.78rem;
		height: 0.34rem;
		background-color: #658ae0;
		border: none;
		color: #fff;
		border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
	}
	
	#pro1-header li span {
		font-size: 0.3rem;
		color: #cdbdae;
	}
	
	#pro1-nav {
		height: 0.4rem;
		background-color: #301f1c;
		line-height: 0.4rem;
	}
	
	#pro1-nav ul {
		/*display: flex;*/
		width: 100%;
	}
	
	#pro1-nav .pro1-nav-ul li {
		float: left;
		/*width: 0.27rem;*/
		padding-left: 0.15rem;
		height: 0.41rem;
	}
	
	

</style>