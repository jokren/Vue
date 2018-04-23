<template>
    <div>
    <div _ngcontent-c1="" class="title-bar"> <!----><a _ngcontent-c1="" class="nav-toggle" title="菜单"></a> <!----> <!----><h1 _ngcontent-c1="" class="nav-logo"> <a _ngcontent-c1="" href="#/">锤子科技商城</a> </h1> <!----> <!----> <!----> </div>
    <xlunbo />
    <xnav />
    <xcontent />
    </div>
</template>

<script>
	import xlunbo from "./lunbotu.vue"
	import xnav from "./nav.vue"
	import xcontent from "./content.vue"
	export default {
		components:{
			xlunbo,
			xnav,
			xcontent
		}
	}
</script>

<style scoped>
    .title-bar[_ngcontent-c1] {
        background: #1d1d1d;
        background-image: linear-gradient(#1d1d1d,#181818);
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 199;
        overflow: hidden;
    }
    .title-bar[_ngcontent-c1] .nav-toggle[_ngcontent-c1] {
        background: url("../images/11.png") no-repeat 0 0;
        background-size: cover;
        background-origin: content-box;
        float: left;
        height: 100%;
        padding: 0 5px;
        width: 50px;
        transition: none;
    }
    .title-bar[_ngcontent-c1]:after, .title-bar[_ngcontent-c1]:before {
        content: " ";
        width: 100%;
        position: absolute;
    }
    .title-bar[_ngcontent-c1] .nav-logo[_ngcontent-c1] {
        background: url(//static.smartisanos.cn/mobile/assets/images/nav-logo.f28bcf8a8822503b73bec6c09a784851.png) no-repeat 0 0;
        background-size: cover;
        height: 100%;
        margin: 0 auto;
        width: 50px;
    }
    .title-bar[_ngcontent-c1] .nav-logo[_ngcontent-c1] a[_ngcontent-c1] {
        height: 100%;
        display: block;
        text-indent: -9999px;
    }
    .title-bar[_ngcontent-c1]:after, .title-bar[_ngcontent-c1]:before {
        content: " ";
        width: 100%;
        position: absolute;
    }
</style>