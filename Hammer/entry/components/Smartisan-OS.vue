<template>
	<div>
		
		<!--<div id="Smartisan-OS-header" >
			<ul>
				<li @click="show"><span class="iconfont">&#xe647;</span></li>
				<li><span class="iconfont">&#xe82e;</span></li>
				<li><input type="button" value="现在购买" /></li>
			</ul>
		</div>-->
		
		<!--      -->
		<!--<div id="nav" :style="{display:bool?'block':'none'}">
			<ul>
				<li>
					<p><span class="iconfont">&#xe801;</span></p>
					<a href="#">锤子科技商城</a>
				</li>
				<li class="border-right">
					<p><span class="iconfont">&#xe614;</span></p>
					<a href="./pro2.vue">坚果 Pro 2</a>
				</li>
				<li>
					<p><span class="iconfont">&#xe637;</span></p>
					<a href="#">坚果 Pro</a>
				</li>
				<li>
					<p><span class="iconfont">&#xe82e;</span></p>
					<a href="#">Smartisan OS</a>
				</li>
				<li>
					<p><span class="iconfont">&#xe7bb;</span></p>
					<a href="#">应用下载</a>
				</li>
				<li class="border-right">
					<p><span class="iconfont">&#xe690;</span></p>
					<a href="#">锤子科技论坛</a>
				</li>
				<li>

				</li>
				<li>

				</li>
			</ul>
		</div>-->
		<!--          -->
		
		<div id="Smartisan-OS-nav">
			<ul>
				<li>
					<a href="#/Smartisan/Smapage1">OS 4.x</a>
				</li>
				<li>
					<a href="#/Smartisan/Smapage2">Idea Pills</a>
				</li>
				<li>
					<a href="#/Smartisan/Smapage3">Big Bang</a>
				</li>
				<li>
					<a href="#/Smartisan/yun">One Step</a>
				</li>
				<li>
					<a href="#/Smartisan/use">好用</a>
				</li>
				<li>
					<a href="#/Smartisan/kan">好看</a>
				</li>
				<li>
					<a href="#/Smartisan/qiangda">强大</a>
				</li>
				<li>
					<a href="#/Smartisan/ren">人性化</a>
				</li>
				<li>
					<a href="#/Smartisan/fh">丰富</a>
				</li>
				<li>
					<a href="#/Smartisan/yun">云服务</a>
				</li>
				<li>
					<a href="#/Smartisan/kaifazhe">开发者</a>
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
			}
			
		}
	}
</script>

<style>
	body {
		font-size: 0.07rem;
		line-height: 0.14rem;
	}
	/**/
	
	#nav {
		height: 6.2rem;
		background-color: #000000;
		margin-top: 0.46rem;
		position: absolute;
		top: 0;
		display: none;
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
	
	#Smartisan-OS-header {
		width: 100%;
		height: 0.51rem;
		line-height: 0.51rem;
		background-color: #fcfcfc;
		border-bottom: 3px solid #e7e7e7;
	}
	
	#Smartisan-OS-header ul {
		display: flex;
	}
	
	#Smartisan-OS-header ul li {
		flex: 1;
		text-align: center;
	}
	
	#Smartisan-OS-header li input {
		width: 0.78rem;
		height: 0.34rem;
		background-color: #658ae0;
		border: none;
		color: #fff;
		border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
	}
	
	#Smartisan-OS-header li span {
		font-size: 0.3rem;
		color: #cdbdae;
	}
	
	#Smartisan-OS-nav {
		height: 0.42rem;
		background: #f4f5f6;
		line-height: 0.42rem;
		/*overflow: hidden;*/
		/*font-size: 0.17rem;*/
	}
	
	#Smartisan-OS-nav ul {
		display: flex;
		/*width: 1000%;*/
		/*overflow: hidden;*/
		overflow-x: scroll;
		/*overflow: hidden;*/
		text-align: center;
	}
	
	::-webkit-scrollbar {
		display: none;
	}
	
	#Smartisan-OS-nav ul li {
		flex: 1;
		height: 0.42rem;
		margin-top: 0.09rem;
		padding: 0 .05rem;
	}
	
	#Smartisan-OS-nav ul li a {
		display: block;
		width: 0.6rem;
		height: 0.23rem;
		line-height: 0.23rem;
		background: #f0f0f0;
		border: 1px solid #e9e9e9;
		border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
	}
</style>