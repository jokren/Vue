<template>
	<div>
		<div id="all-header" >
			<ul>
				<li @click="show"><span class="iconfont">&#xe647;</span></li>
				<li><span class="iconfont">&#xe82e;</span></li>
				<li><input type="button" value="现在购买" /></li>
			</ul>
		</div>
		<div id="nav" :style="{display:bool?'block':'none'}">
			<ul>
				<li>
					<p><span class="iconfont">&#xe801;</span></p>
					<a href="#" @click="show">锤子科技商城</a>
				</li>
				<li class="border-right">
					<p><span class="iconfont">&#xe614;</span></p>
					<a href="#/pro2/page1" @click="show">坚果 Pro 2</a>
				</li>
				<li>
					<p><span class="iconfont">&#xe637;</span></p>
					<a href="#/pro1/pro1p1" @click="show">坚果 Pro 3</a>
				</li>
				<li>
					<p><span class="iconfont">&#xe82e;</span></p>
					<a href="#/Smartisan/Smapage1" @click="show">Smartisan OS</a>
				</li>
				<li>
					<p><span class="iconfont">&#xe7bb;</span></p>
					<a href="#/down" @click="show">应用下载</a>
				</li>
				<li class="border-right">
					<p><span class="iconfont">&#xe690;</span></p>
					<a href="#/luntan" @click="show">锤子科技论坛</a>
				</li>
				<li>

				</li>
				<li>

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
				activeNames: [],
				bool:false
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			},
			show: function() {
				this.bool=!this.bool
			},
			
			
		}
	}
</script>

<style>
	body {
		font-size: 0.07rem;
		line-height: 0.14rem;
	}
	#nav {
		height: 6.2rem;
		background-color: #000000;
		margin-top: 0.46rem;
		position: absolute;
		top: 0;
		display: none;
		z-index: 100000;
	}
	
	#nav ul {
		display: flex;
		background: #000000;
		color: #cccccc;
		flex-wrap: wrap;
	}
	
	#nav ul li {
		border-right: 1px solid #141414;
		border-bottom: 1px solid #141414;
		width: 24.5%;
		text-align: center;
		height: 0.74rem;
		padding: 0.14rem 0;
		box-sizing: border-box;
	}
	
	#nav .border-right {
		border-right: none;
	}
	
	#nav ul li span {
		font-size: 0.2rem;
		/*line-height: 0.3rem;*/
	}
	
	#nav ul li a {
		color: #dddddd;
		line-height: 0.4rem;
	}
	/**/
	
	#all-header {
		width: 100%;
		height: 0.51rem;
		line-height: 0.51rem;
		background-color: #fcfcfc;
		border-bottom: 3px solid #e7e7e7;
	}
	
	#all-header ul {
		display: flex;
	}
	
	#all-header ul li {
		flex: 1;
		text-align: center;
	}
	
	#all-header li input {
		width: 0.78rem;
		height: 0.34rem;
		background-color: #658ae0;
		border: none;
		color: #fff;
		border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
	}
	
	#all-header li span {
		font-size: 0.3rem;
		color: #cdbdae;
	}
</style>