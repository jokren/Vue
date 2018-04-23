<template>
	<div class="weui-tabbar">
		<a  href="#/" class="weui-tabbar__item weui-bar__item_on">
                    <span style="display: inline-block;position: relative;">
                        <img v-show="!bool1" @click="tab" src="../images/big1.png" alt="" class="weui-tabbar__icon">
                        <img v-show="bool1" @click="tab" src="../images/1.png" alt="" class="weui-tabbar__icon">
                    </span>
			<p @click="tab" class="weui-tabbar__label">首页</p>
		</a>
		<a  href="javascript:;" class="weui-tabbar__item">
			<img v-show="!bool2" @click="tab" src="../images/big2.png" alt="" class="weui-tabbar__icon">
			<img v-show="bool2" @click="tab" src="../images/2.png" alt="" class="weui-tabbar__icon">
			<p @click="tab" class="weui-tabbar__label">分类</p>
		</a>
		<a  href="#/cart" @click="cart"  class="weui-tabbar__item">
			<span style="display: inline-block;position: relative;">
           			<img v-show="bool3" @click="tab"  src="../images/3.png" alt="" class="weui-tabbar__icon">
                    <img v-show="!bool3" @click="tab"  src="../images/big3.png" alt="" class="weui-tabbar__icon">
                    <span v-show="bool5" class="weui-badge" style="position: absolute;top: -2px;right: -13px;">0</span>
            </span>
			<p @click="tab"  class="weui-tabbar__label">购物车</p>
		</a>
		<a @click="tab" href="javascript:;" class="weui-tabbar__item">
			<img v-show="!bool4" @click="tab" src="../images/big4.png" alt="" class="weui-tabbar__icon">
			<img v-show="bool4" @click="tab" src="../images/4.png" alt="" class="weui-tabbar__icon">
			<p @click="tab" class="weui-tabbar__label" >个人中心</p>
		</a>


	</div>
</template>
<script>
	export default {
		data(){
		return{
			bool1:false,
			bool2:true,
			bool3:true,
			bool4:true,
			bool5:false
		}
		},
		methods: {
			cart:function () {
//				if(this.$store.state.bool){
//				this.$store.state.bool=!this.$store.state.bool
//				}
			},
			tab:function (eve) {
				var parents=$(eve.target).parents(".weui-tabbar__item")
				parents.addClass("weui-bar__item_on")
				parents.siblings(".weui-tabbar__item").removeClass("weui-bar__item_on")
				if(parents.index()==0){
					this.bool1=false
					this.bool2=true
					this.bool3=true
					this.bool4=true
				}
				if(parents.index()==1){
					this.bool1=true
					this.bool2=false
					this.bool3=true
					this.bool4=true
				}
				if(parents.index()==2){
					this.bool1=true
					this.bool2=true
					this.bool3=false
					this.bool4=true
				}
				if(parents.index()==3){
					this.bool1=true
					this.bool2=true
					this.bool3=true
					this.bool4=false
				}
			}
		}
	}
</script>
<style>
	.weui-tabbar{
		position: fixed;
		bottom: 0;
	}
</style>
