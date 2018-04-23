<template>
	<div class="weui-tabbar">
		<a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                    <span style="display: inline-block;position: relative;">
                        <img src="../../hammer-img/footer/1.png" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                    </span>
			<p class="weui-tabbar__label">首页</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
			<img src="../../hammer-img/footer/2.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">分类</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
                    <span style="display: inline-block;position: relative;">
                        <img src="../../hammer-img/footer/3.png" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                    </span>
			<p class="weui-tabbar__label">购物车</p>
		</a>
		<a @click="getreplace" class="weui-tabbar__item">
			<img src="../../hammer-img/footer/4.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">个人中心</p>
		</a>
	</div>
</template>

<script>
  import $ from "jquery"
  export default {
      methods:{
          getreplace(){
             var str=window.sessionStorage.getItem("login")
              console.log(str);
              if(str!=null && str!=""){
                  this.$router.replace({path : "person"})
              }else {
                  this.$router.replace({path : "login"})
              }
          }
      }
  }

</script>

<style scoped>
    .weui-tabbar{
        position:fixed;
        bottom:0;
    }

</style>
