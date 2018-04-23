<template>
    <div>
        <header>
            <div class="title-bar">
                <a class="nav-back" @click="routerBack">返回</a>
                <h1 class="nav-title" v-text="obj.name"></h1>
            </div>
        </header>
        <section class="main-cont">
            <div class="nav">
                <ul class="nav-ul" id="allSel">
                    <li class="active">
                        <span>商品</span>
                    </li>
                    <li>
                        <span>详情</span>
                    </li>
                    <li>
                        <span>参数</span>
                    </li>
                    <li>
                        <span>推荐</span>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="goodsShow">
                    <ul>
                        <li>
                            <img :src="obj.imgsrc" alt="" style="width: 3rem;height: 3rem">
                        </li>
                    </ul>
                </div>
                <div class="goodsInfo">
                    <div class="g_title">
                        <h2>商品信息</h2>
                    </div>
                    <div class="g_price">
                        <h4 v-text="obj.name"></h4>
                        <p v-text="obj.describe">骁龙 ™ 660 处理器 · 1200 万 + 500 万像素双摄像头 · 3500mAh 大电池 · 18W 快速充电 · 人脸解锁 + 指纹解锁</p>
                        <div class="wrap">
                            <div class="newPrice">
                                <span v-text="obj.newprice">1,799.00</span> <i v-text="obj.oldprice">1,799.00</i>
                            </div>
                            <div class="fenQi" v-if="bool">
                                分期付款低至每月 <i>￥</i> <span>161.16</span>
                            </div>
                        </div>
                    </div>
                    <div class="g_prefer">
                        <span>优惠信息</span>
                        <div class="more">
                            <ul>
                                <li>
                                    <span class="activity">活动</span> <em class="lingquan"> 领券立省优惠
                                    <a href="#">
                                        <i class="turnTo">

                                        </i>
                                    </a>
                                </em>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="choose">
                    <div class="c_title">
                        <h6>已选版本</h6>
                    </div>
                    <div class="intro">
                        <p>
                            <span class="i-name">颜色：</span> <span class="i-value" v-text="obj.color">碳黑色（细红线）</span>
                        </p>
                        <p>
                            <span class="i-name">版本：</span> <span class="i-value" v-text="obj.edition">4G + 32GB</span>
                        </p>
                        <p>
                            <span class="i-name">数量：</span> <span class="i-value" v-text="obj.num">1</span>
                        </p>
                    </div>
                    <a href="#">
                        <i class="turnTo2"></i>
                    </a>
                </div>
                <div class="goodsDetail goodsInfo market">
                    <div class="g_title">
                        <h2>商品详情</h2>
                    </div>
                    <img :src="obj.detailsrc" alt="" style="width: 3.75rem">
                </div>
                <div class="goodsTec goodsInfo technology">
                    <div class="g_title">
                        <h2>技术参数</h2>
                    </div>
                    <ul>
                        <li>
                            <h4>容量和内存</h4>
                            <div class="telDetail">
                                <div class="textGroup">
                                    <div class="text">
                                        <p class="telTitle">4 + 32版</p>
                                        <p>32GB 机身存储</p>
                                        <p>4GB 内存</p>
                                    </div>
                                    <div class="text">
                                        <p class="telTitle">4 + 64版</p>
                                        <p>64GB 机身存储</p>
                                        <p>4GB 内存</p>
                                    </div>
                                    <div class="text">
                                        <p class="telTitle">6 + 64版</p>
                                        <p>64GB 机身存储</p>
                                        <p>6GB 内存</p>
                                    </div>
                                    <div class="text">
                                        <p class="telTitle">6 + 128版</p>
                                        <p>128GB 机身存储</p>
                                        <p>6GB 内存</p>
                                    </div>
                                    <div class="text">
                                        <p class="telTitle">6 + 256版</p>
                                        <p>256GB 机身存储</p>
                                        <p>6GB 内存</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="server goodsInfo">
                    <div class="g_title">
                        <h2>服务说明</h2>
                    </div>
                    <div class="allServer">
                        <ul>
                            <li class="seven">7天无理由退货</li>
                            <li class="fifteen">15天质量问题换货</li>
                            <li class="forfree">满150免运费</li>
                            <li class="sendOut">72小时内发货</li>
                        </ul>
                    </div>
                </div>
                <div class="sameAs goddsInfo recommend">
                    <div class="g_title">
                        <h2>相关推荐</h2>
                    </div>
                    <div class="sameGoods">
                        <div class="sameList">
                            <div class="product">
                                <a class="item-img">
                                    <img src="../hammer-img/image/1.jpg" alt style="opacity:1;transition: opacity 0.3s ease-in-out;">
                                </a>
                                <div class="item-content">
                                    <h4>坚果 Pro 2 文青保护笔</h4>
                                    <p class="channel">文青配色、质感精良</p>
                                    <p class="fenQi fontW">
                                        <i>￥</i> <span>99.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="sameList leftMargin">
                            <div class="product">
                                <a class="item-img">
                                    <img src="../hammer-img/image/2.png" alt style="opacity:1;transition: opacity 0.3s ease-in-out;">
                                </a>
                                <div class="item-content">
                                    <h4>坚果 Pro 2 软胶保护套</h4>
                                    <p class="channel">TRU 环保材质、完美贴合</p>
                                    <p class="fenQi fontW">
                                        <i>￥</i> <span>49.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="sameList">
                            <div class="product">
                                <a class="item-img">
                                    <img src="../hammer-img/image/2.png" alt style="opacity:1;transition: opacity 0.3s ease-in-out;">
                                </a>
                                <div class="item-content">
                                    <h4>坚果 Pro 2 软胶保护套</h4>
                                    <p class="channel">TRU 环保材质、完美贴合</p>
                                    <p class="fenQi fontW">
                                        <i>￥</i> <span>49.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="sameList leftMargin">
                            <div class="product">
                                <a class="item-img">
                                    <img src="../hammer-img/image/2.png" alt style="opacity:1;transition: opacity 0.3s ease-in-out;">
                                </a>
                                <div class="item-content">
                                    <h4>坚果 Pro 2 软胶保护套</h4>
                                    <p class="channel">TRU 环保材质、完美贴合</p>
                                    <p class="fenQi fontW">
                                        <i>￥</i> <span>49.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <ul class="item-footer">
                    <li class="toCart">
                        <a href="#" target="_self">
                            <div class="tag">
                                <span>5</span>
                            </div>
                            <img src="../hammer-img/image/cart.png" alt="">
                        </a>
                    </li>
                    <li @click="getcart">
                        <span class="item-img">
                            <a href="#">加入购物车</a>
                        </span>
                    </li>
                    <li class="highlight">
                        <span class="item-img">
                            <a href="#">现在购买</a>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </div>

</template>


<script>

    import $ from "jquery"

    export default {
        data : function(){
            return {
                obj : {},
                name : " ",
                bool : false
            }
        },
        methods : {
            routerBack(){
                this.$router.go(-1);
            },
            getcart(){
                console.log(22);
                //将数据存入购物车数据库
                //从登陆中拿tel
                var tel=window.sessionStorage.getItem("login")
                var obj=JSON.parse(sessionStorage.getItem('detail'))
                obj.tel=tel
                console.log(obj);
                $.ajax({
                    url : "http://localhost:8888/cart",
                    type : "POST",
                    data : obj
                })
            }
        },
        computed : {},
        created : function(){
            var url = "http://localhost:8888/detail";
            var self = this;
            var name = this.$store.state.name
            //console.log(name);
            $.post(url, function(res){
                var temparr = JSON.parse(res)
                console.log(temparr, name);
                var obj1 = {}
                for(var i = 0; i < temparr.length; i++){
                    if(temparr[i].name == name){
                        obj1 = temparr[i]
                    }
                }
                //逻辑  有点复杂
                //console.log(obj1);
                if(!(JSON.stringify(obj1) == "{}")){
                    self.obj = obj1
                    var str = JSON.stringify(obj1)
                    window.sessionStorage.setItem('detail', str);
                    self.name = self.$store.state.name
                } else {
                    self.obj = JSON.parse(sessionStorage.getItem('detail'))
                    self.name = self.obj.name
                }
                // console.log(self.name);
            })

            //通过类型来判断bool值
            if(JSON.parse(sessionStorage.getItem('arr'))[0].type == "手机"){
                self.bool = true
            } else {
                self.bool = false
            }


        },
        mounted : function(){
            //背景颜色跳转
            $("#allSel>li").on("click", function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
            //瞄点跳转
            $("#allSel").children("li").eq(0).on("click", function(){
                var num = $(".content")[0].offsetTop - 100
                document.documentElement.scrollTo(0, num)
            })
            $("#allSel").children("li").eq(1).on("click", function(){
                var num = $(".market")[0].offsetTop - 100
                document.documentElement.scrollTo(0, num)
            })
            $("#allSel").children("li").eq(2).on("click", function(){
                var num = $(".technology")[0].offsetTop - 100
                document.documentElement.scrollTo(0, num)
            })
            $("#allSel").children("li").eq(3).on("click", function(){
                var num = $(".recommend")[0].offsetTop - 100
                document.documentElement.scrollTo(0, num)
            })



        }
    }


</script>


<style scoped>

.title-bar{
    background:#1d1d1d;
    background-image:linear-gradient(#1d1d1d, #181818);
    height:0.5rem;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:199;
}
.nav-back{
    padding:.1rem .1rem 0 .2rem;
    left:0.06rem;
    background:#070707;
    background:linear-gradient(#131313, #070707);
    color:#fff;
    border-radius:0.04rem;
    box-sizing:border-box;
    font-size:.12rem;
    height:.32rem;
    line-height:1;
    position:absolute;
    top:50%;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
}
.nav-back:before{
    background:url(../hammer-img/image/bacl.png) no-repeat;
    background-size:cover;
    content:" ";
    height:100%;
    width:0.06rem;
    position:absolute;
    top:50%;
    left:0.09rem;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
}
.nav-back:after{
    background:linear-gradient(#2a2a29, #151515);
    box-shadow:inset 0 1px 1px hsla(0, 0%, 100%, .1), inset 0 0 1px rgba(0, 0, 0, .5);
    border-radius:0.03rem;
    content:" ";
    position:absolute;
    top:1px;
    bottom:1px;
    left:1px;
    right:1px;
    z-index:-1;
}
.nav-title{
    color:#fff;
    font-size:.18rem;
    line-height:.2rem;
    padding:.16rem 0 0;
    text-align:center;
    position:absolute;
    top:0;
    left:.6rem;
    right:.6rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.main-cont{
    margin-top:.5rem;
}
.nav{
    width:3.75rem;
    height:.5rem;
    background:#f2f2f2;
    position:fixed;
    left:0;
    right:0;
    top:.5rem;
    padding:.09rem .06rem .09rem .06rem;
    z-index:99;
    /*background: #f2f2f2;*/
    box-shadow:0 .05rem .13rem rgba(0, 0, 0, .12);
    -webkit-user-select:none;
    user-select:none;
    box-sizing:border-box;
}
.nav ul{
    /*border:1px solid #e0e0e0;*/
    /*border-radius:5px;*/
    font-size:.12rem;
    font-weight:700;
}
.nav ul li{
    width:.88rem;
    height:.31rem;
    background:#f2f2f2;
    list-style:none;
    float:left;
    text-align:center;
    line-height:0.31rem;
    border:1px solid #dedede;
    border-right:none
}
.nav ul li:first-child{
    border-radius:.03rem 0 0 .03rem;
}
.nav ul li:last-child{
    border-radius:0 .03rem .03rem 0;
    border-right:1px solid #dedede;
}
.active{
    background:#b0b0b0 !important;
}
.goodsShow{
    width:3.75rem;
    height:3rem;
    margin-top:1rem;
    text-align:center;
    border-bottom:.07rem solid #e0e0e0;
}
.goodsShow img{
    display:inline-block;
}
.goodsInfo{
    border-bottom:.07rem solid #e0e0e0;
}
.g_title{
    width:3.75rem;
    height:.4rem;
    border-bottom:1px solid #f1f1f1;
    padding:0 .125rem;
    box-sizing:border-box;
}
.g_title h2{
    height:.4rem;
    line-height:.4rem;
    font-size:.16rem;
    font-weight:700;
    color:#666;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.g_price{
    width:3.75rem;
    border-bottom:1px solid #f1f1f1;
    padding:.19rem .17rem;
    box-sizing:border-box;
}
.g_price h4{
    font-size:.16rem;
    margin-bottom:.11rem;
    color:#333;
}
.g_price p{
    font-size:.12rem;
    color:#7f7f7f;
    margin-bottom:.17rem;
    line-height:1.5;
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 3;*/
    overflow:hidden;
}
.wrap{
    display:flex;
    height:.2rem;
    align-items:center;
}
.newPrice{
    color:#d44d44;
    font-size:.16rem;
    /*display: inline-block;*/
    white-space:nowrap;
    margin-right:.1rem;
    font-weight:700;
    /*float: left;*/
}
.newPrice i{
    text-decoration:line-through;
    color:#ccc;
    font-size:0.12rem;
}
.g_price i{
    font-style:normal;
    font-size:.1rem;
}
.fenQi{
    color:#d44d44;
    white-space:nowrap;
    font-size:.12rem;
    font-weight:400;
    margin-right:.1rem;
}
.g_prefer{
    position:relative;
    padding:.16rem .19rem 0 .19rem;
}
.g_prefer span{
    font-size:.12rem;
    line-height:1.2;
    padding:0 0 .3rem;
    color:#999;
    display:block;
}
.activity{
    width:.33rem;
    height:.16rem;
    overflow:hidden;
    padding:0 !important;
    display:inline-block;
    text-align:center;
    font-size:.12rem;
    font-weight:400;
    border-radius:.1rem;
    box-shadow:0 1px 3px 0 rgba(0, 0, 0, .05);
    border:1px solid #f0bab6;
    color:#d44d44 !important;
    background:#fce9e8;
}
.more{
    margin-bottom:.16rem;
}
.more li{
    display:flex;
    position:relative;
}
.lingquan{
    font-style:normal;
    display:block;
    font-size:.14rem;
    word-break:break-all;
    margin-left:.09rem;
    line-height:1.5;
    width:84%;
}
.turnTo{
    display:block;
    position:absolute;
    right:0rem;
    top:50%;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    width:.1rem;
    height:.1rem;
    background:url(../hammer-img/image/turnTo.png) no-repeat 50%;
    background-size:contain;
}
.choose{
    width:3.75rem;
    box-sizing:border-box;
    border-bottom:.07rem solid #e0e0e0;
    padding:0 .19rem;
    position:relative;
}
.c_title{
    height:.4rem;
    font-size:.12rem;
    line-height:.4rem;
    box-sizing:border-box;
}
.c_title h6{
    height:.4rem;
    line-height:.4rem;
    color:#999;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.i-name{
    display:table-cell;
    font-size:.12rem;
    word-break:keep-all;
}
.i-value{
    display:table-cell;
    font-size:.16rem;
    font-weight:bolder;
    word-break:keep-all;
}
.intro{
    margin-bottom:.15rem;
}
.intro p{
    line-height:1.5;
}
.turnTo2{
    display:block;
    position:absolute;
    right:.19rem;
    top:50%;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    width:.1rem;
    height:.1rem;
    background:url(../hammer-img/image/turnTo.png) no-repeat 50%;
    background-size:contain;
}
.goodsTec ul{
    margin:0 auto;
    display:block;
    padding:0 .35rem;
    /*background: ;*/
    background:linear-gradient(360deg, white, #e0e0e0);
}
.goodsTec ul li{
    border-top:1px solid #cfcfcf;
}
.goodsTec ul li h4{
    width:auto;
    /*float: none;*/
    font-size:.16rem;
    color:#666;
    /*padding: .6rem 0 .18rem;*/
}
.telDetail{
    width:auto;
    padding:0 0 .6rem;
    font-size:.12rem;
    line-height:.2rem;
    color:#666;
    border-top:none;
}
.textGroup{
    display:block;
    overflow:hidden;
}
.text{
    width:50%;
    /*flex-flow: wrap;*/
    float:left;
    margin-right:0;
    margin-bottom:.15rem;
}
.telTitle{
    line-height:.36rem;
    font-weight:700;
}
.allServer{
    position:relative;
    padding:.17rem .18rem .08rem .17rem;
}
.allServer ul{
    overflow:hidden;
    font-size:.1rem;
    font-weight:700;
    color:#333;
    line-height:1.5;
    /*display: -webkit-box;*/
    display:flex;
    flex-wrap:wrap;
}
.allServer ul li{
    display:list-item;
    list-style:none;
    padding-left:.20rem;
    float:left;
    position:relative;
    box-sizing:border-box;
    width:33.33333%;
    -webkit-box-flex:0;
    flex:none;
    margin-bottom:.06rem;
}
.seven:before{
    content:"";
    display:block;
    width:.2rem;
    height:.2rem;
    position:absolute;
    left:0rem;
    top:0.03rem;
    overflow:hidden;
    background:url(../hammer-img/image/server.png) no-repeat;
    background-size:cover;
    background-position:0 -.05rem;
    z-index:99;
}
.fifteen:before{
    content:"";
    display:block;
    width:.2rem;
    height:.2rem;
    position:absolute;
    left:0;
    top:0.03rem;
    overflow:hidden;
    background:url(../hammer-img/image/server.png) no-repeat;
    background-size:cover;
    background-position:-.2rem -.03rem;
    z-index:99;
}
.forfree:before{
    content:"";
    display:block;
    width:.2rem;
    height:.2rem;
    position:absolute;
    left:0;
    top:0.03rem;
    overflow:hidden;
    background:url(../hammer-img/image/server.png) no-repeat;
    background-size:cover;
    background-position:-.4rem -.03rem;
    z-index:99;
}
.sendOut:before{
    content:"";
    display:block;
    width:.2rem;
    height:.2rem;
    position:absolute;
    left:0;
    top:0.03rem;
    overflow:hidden;
    background:url(../hammer-img/image/server.png) no-repeat;
    background-size:cover;
    background-position:-.6rem -.03rem;
    z-index:99;
}
.sameGoods{
    overflow:hidden;
    padding:.18rem .12rem 0;
    display:flex;
    flex-wrap:wrap;
}
.sameList{
    width:48.5%;
}
.item-img{
    display:block;
    width:1.70rem;
    height:1.70rem;
    position:relative;
}
.item-img:before{
    content:"";
    position:absolute;
    border:1px solid #f0f0f0;
    border-radius:.05rem;
    z-index:2;
    top:-21.42857%;
    left:-21.42857%;
    bottom:-21.42857%;
    right:-21.42857%;
    transform:scale(.7);
    transform-origin:50% 50%;
}
.item-img img{
    width:1.70rem;
    height:1.70rem;
}
.item-content{
    margin:0 auto;
    padding:.0833rem .125rem .1875rem .125rem;
}
.item-content h4{
    font-size:.12rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin:0;
    color:#333;
}
.item-content i{
    font-style:normal;
}
.channel{
    font-size:.1rem;
    margin-top:.0625rem;
    margin-bottom:.0625rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    line-height:1.2;
    color:#7f7f7f;
}
.leftMargin{
    margin-left:0.09rem;
}
.fontW{
    font-weight:bold;
    font-size:.12rem;
}
.item-footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    /*display: -webkit-box;*/
    display:flex;
    align-content:center;
    -webkit-box-pack:justify;
    justify-content:space-between;
    background:#fff;
    height:.56rem;
    padding:0 .4%;
    z-index:202;
    box-shadow:0 -.11rem .27rem rgba(0, 0, 0, .08);
    list-style:none;
    font-size:.16rem;
}
.item-footer li{
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    flex-grow:1;
    margin:0 .7%;
}
.item-footer li a{
    text-decoration:none;
}
.item-footer li > a img{
    display:block;
    margin:.07rem auto;
    width:.3rem;
}
.item-footer li > span{
    width:98%;
    height:.4rem;
    font-size:.16rem;
    font-weight:700;
    border-radius:.04rem;
    /*display: -webkit-box;*/
    display:flex;
    -webkit-box-pack:center;
    justify-content:center;
    -webkit-box-align:center;
    align-items:center;
    background-image:linear-gradient(#fff, #fcfcfc);
    position:relative;
}
.item-footer li > span > a{
    color:#8c8c8c;
}
.item-footer .highlight > span > a{
    color:#fff !important;
}
.item-footer li > span:before{
    border-color:#e0e0e0;
    border-radius:.056rem;
}
.item-footer .highlight > span{
    border-color:#3f6aec;
    background:linear-gradient(#6e98f4, #4b77ee);
}
.toCart{
    flex-shrink:0;
    flex-basis:0rem;
    /*width: 20%;*/
}
.tag{
    position:absolute;
    box-sizing:border-box;
    left:.42rem;
    top:0rem;
    height:.4rem;
    min-width:.4rem;
    line-height:.4rem;
    text-align:center;
    /*padding: 0 .783rem;*/
    border-radius:50% 50%;
    background:#d44e45;
    font-size:.3rem;
    font-weight:700;
    color:#fff;
    text-shadow:0 -2px 0 rgba(0, 0, 0, .06);
    transform-origin:0 50%;
    transform:scale(.33333);
    box-shadow:0 3px 8px rgba(212, 78, 69, .4);
    transition:transform .3s ease-out, -webkit-transform .3s ease-out;
}

</style>