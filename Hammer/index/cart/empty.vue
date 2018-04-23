<template>
    <div>
    <xheader />
    <div _ngcontent-c19="" class="empty-container"> <div _ngcontent-c19=""> <div _ngcontent-c19="" class="img-container"></div> <h3 _ngcontent-c19="">购物车暂无商品</h3> <p _ngcontent-c19="">添加到购物车的商品将会显示在这里</p> <!----><a _ngcontent-c19="" class="buy-btn login">登录</a> <a _ngcontent-c19="" class="buy-btn box-border" target="_self" href="/index">现在选购</a> </div> </div>
    </div>
</template>

<script>
	import xheader from "./header.vue"
	export default {
		components:{
			xheader
		}
	}
</script>

<style scoped>
    .empty-container[_ngcontent-c19] {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .empty-container[_ngcontent-c19] .img-container[_ngcontent-c19] {
        width: 88px;
        height: 114px;
        background: url("../images/12.png") no-repeat top;
        background-size: 88px auto;
        margin: 0 auto;
    }
    .empty-container[_ngcontent-c19] h3[_ngcontent-c19] {
        color: rgba(0,0,0,.15);
        margin: 25px 0 9px;
        font-size: .87rem;
    }
    .empty-container[_ngcontent-c19] p[_ngcontent-c19] {
        font-size: .6rem;
        text-align: center;
        color: rgba(0,0,0,.15);
    }
    .empty-container[_ngcontent-c19] .buy-btn.login[_ngcontent-c19] {
        box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
        background: #5e8bdd;
        background: linear-gradient(#6f94e8,#5178df);
        border-radius: 6px;
        text-shadow: 0 -1px 0 rgba(0,0,0,.15);
        color: #fff;
        display: inline-block;
        width: 142px;
        height: 42px;
        line-height: 42px;
        font-size: .6rem;
        font-weight: 700;
        margin: 16px 1px 0;
    }
    .empty-container[_ngcontent-c19] .buy-btn[_ngcontent-c19] {
        display: inline-block;
        width: 142px;
        height: 42px;
        line-height: 42px;
        font-size: .6rem;
        font-weight: 700;
        color: rgba(0,0,0,.6);
        margin: 16px 1px 0;
        background: linear-gradient(rgba(0,0,0,.01),hsla(0,0%,100%,.01));
        box-shadow: inset 0 2px 4px hsla(0,0%,100%,.3);
        border: 1px solid #f0f0f0
    }
</style>