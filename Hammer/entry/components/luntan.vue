<template>
	<div>
		<div class="luntan-all" id='luntan-all'>
			<div class="screen1">
				<ul id="ul">
					<li><img src="../czimg/luntan-2.jpg" /></li>
					<li><img src="../czimg/luntan-3.jpg" /></li>
					<li><img src="../czimg/luntan-3.jpg" /></li>
				</ul>
				<ol>
					<li>
						<a href="#"></a>
					</li>
					<li>
						<a href="#"></a>
					</li>
				</ol>
			</div>
		</div>
		<div id="luntan" v-for="a in arr">
			<a :href="a.href">
				<div class="luntan-left">
					<img :src="a.img" />
				</div>
				<div class="luntan-right">
					<ul>
						<li>
							<a href="#">{{a.title}}</a>
						</li>
						<li>{{a.auth}}</li>
						<li>
							<i>{{a.time}}</i>
							<span class="iconfont">&#xe63a;<em style="font-size: 0.09rem;">{{a.liulan}}</em></span>
							<span class="iconfont">&#xe610;<em style="font-size: 0.09rem;">{{a.pinlun}}</em></span>
						</li>
					</ul>

				</div>
			</a>
		</div>
		<div id="luntan-footer">
			<ul>
				<li>
					<a href="#">网页版</a>
				</li>
				<li>
					<a href="#" style="color: #181818;">移动版</a>
				</li>
				<li>
					<a href="#">客户端</a>
				</li>
			</ul>
			<p class="footer-icp"> 京ICP备14041720号-1 </p>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					img: require("../czimg/luntan-1.jpg"),
					title: "[音乐] 我是何时喜欢上李志的？",
					auth: "小劉同學",
					href:"#/conten",
					time: "2018/03/31 10:18",
					liulan: "1231",
					pinlun: "123"
				}, {
					img: require("../czimg/os_08.jpg"),
					title: "当我在英语课上谈锤子科技时，我谈些什么",
					auth: "lcxltd",
					href:"#/conten",
					time: "2018/03/31 10:18",
					liulan: "2029",
					pinlun: "12"
				}, {
					img: require("../czimg/os_08.jpg"),
					title: "当我在英语课上谈锤子科技时，我谈些什么",
					auth: "lcxltd",
					href:"#/detail",
					time: "2018/03/31 10:18",
					liulan: "2029",
					pinlun: "12"
				}, {
					img: require("../czimg/os_08.jpg"),
					title: "当我在英语课上谈锤子科技时，我谈些什么",
					auth: "lcxltd",
					href:"#/detail",
					time: "2018/03/31 10:18",
					liulan: "2029",
					pinlun: "12"
				}, {
					img: require("../czimg/os_08.jpg"),
					title: "当我在英语课上谈锤子科技时，我谈些什么",
					auth: "lcxltd",
					href:"#/detail",
					time: "2018/03/31 10:18",
					liulan: "2029",
					pinlun: "12"
				}, {
					img: require("../czimg/os_08.jpg"),
					title: "当我在英语课上谈锤子科技时，我谈些什么",
					auth: "lcxltd",
					href:"#/detail",
					time: "2018/03/31 10:18",
					liulan: "2029",
					pinlun: "12"
				}, {
					img: require("../czimg/os_08.jpg"),
					title: "当我在英语课上谈锤子科技时，我谈些什么",
					auth: "lcxltd",
					href:"#/detail",
					time: "2018/03/31 10:18",
					liulan: "2029",
					pinlun: "12"
				}]
				
			}
		},
		mounted(){
			require("../luntanjs/lunbo.js")()
		}

	}
</script>

<style>
	body {
		font-size: 0.10rem;
	}
	
	#luntan-header {
		width: 100%;
		height: 0.51rem;
		line-height: 0.51rem;
		background-color: #bf3337;
	}
	
	#luntan-header ul {
		display: flex;
	}
	
	#luntan-header ul li {
		flex: 1;
		text-align: center;
	}
	
	#luntan-header li span {
		font-size: 0.27rem;
		color: #fff;
	}
	
	#luntan-header li i {
		font-size: 0.17rem;
		color: #fff;
	}
	
	.luntan-all {
		width: 100%;
		height: 1.90rem;
		border-radius: .4rem;
		position: relative;
		text-align: center;
		margin-top: 0.1rem;
	}
	
	.screen1 {
		height: 2rem;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.screen1 ul li {
		height: 100%;
		width: 100%;
		overflow: hidden;
		float: left;
		/*position:absolute;*/
	}
	
	.screen1 ul {
		position: absolute;
		left: 0;
		top: 0px;
		height: 100%;
		width: 300%;
		display: flex;
		background: #fff;
		overflow: hidden;
	}
	
	.screen1 ul li img {
		flex: 1;
		width: 3.58rem;
		height: 1.47rem;
		border-radius: 0.05rem 0.05rem 0.05rem 0.05rem;
	}
	
	ol {
		position: absolute;
		bottom: 10%;
		left: 48%;
	}
	
	ol li {
		display: inline-block;
		height: 6px;
		width: 6px;
		margin: 0 3px;
		border-radius: 50%;
		background: #ebebeb;
	}
	
	.current {
		background: red;
	}
	
	#luntan {
		height: 0.73rem;
		width: 100%;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		/*margin-top: 0.1rem;*/
	}
	
	#luntan .luntan-left {
		float: left;
		width: 20%;
		text-align: center;
	}
	
	#luntan .luntan-left img {
		width: 0.38rem;
		height: 0.38rem;
		margin-top: 0.18rem;
	}
	
	#luntan .luntan-right {
		float: left;
		width: 70%;
		margin-top: 0.1rem;
	}
	
	#luntan .luntan-right ul li span {
		line-height: 0.1rem;
	}
	
	#luntan .luntan-right ul li span:nth-child(2) {
		margin-left: 0.55rem;
	}
	
	#luntan-footer {
		height: 1.22rem;
		width: 100%;
		background-color: #f7f7f7;
	}
	
	#luntan-footer ul {
		display: flex;
		width: 50%;
		margin: 0 auto;
		padding: 0.21rem 0 0.1rem 0;
	}
	
	#luntan-footer ul li {
		flex: 1;
		justify-content: space-between;
	}
	
	#luntan-footer ul li a {
		color: #d6d6d6;
	}
	
	#luntan-footer ul li a:nth-of-type(1) {
		/*color: #181818;*/
	}
	
	#luntan-footer p {
		text-align: center;
		color: #d6d6d6;
	}
</style>