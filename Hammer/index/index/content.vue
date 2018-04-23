<template>
    <div class="content">
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">热门商品</div>
            <div class="weui-cell__ft" style="font-size: 0">
                <a @click="list1" href="#/hot" style="width:20px;height:20px;display: block;position: absolute;top:-11px;left:7px"></a>
                <span class="" style="margin-left: 5px;margin-right: 5px;"></span>
            </div>
        </div>
        <div  class="floor-container">
            <ul  class="horizontal level">
                <li class="hot" v-for="k in hot">
                    <a href="#" @click="session"><img :src="k.img" alt=""></a>
                    <h4 v-text="k.name"></h4>
                    <p class="jieshao" v-text="k.h_des"></p>
                    <p class="pie"><span>¥</span><span v-text="k.pie"></span></p>
                </li>
            </ul>
        </div>
         <ul class="level discount">
             <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
             <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
             <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
             <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
             <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
         </ul>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">热销机型</div>
        </div>
        <div class="all" id="con-lunbo">
            <div class="screen">
                <ul >
                    <li><a href="#" @click="session"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_576/format,webp"/></a>
                        <div class="lunbo-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                            <p class="pie"><span>¥</span><span>1,799.00</span></p>
                        </div>
                    </li>
                    <li>
                        <a href="#" @click="session"><img src="https://resource.smartisan.com/resource/e883f15eed51a49e1fbc9d8ddd82460b.png?x-oss-process=image/resize,w_576/format,webp"/></a>
                        <div class="lunbo-js"><h4>坚果 Pro 2</h4>
                            <p class="jieshao">漂亮得不像实力派</p>
                            <p class="pie"><span>¥</span><span>1,799.00</span></p>
                        </div>
                    </li>
                    <li>
                        <a href="#" @click="session"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_576/format,webp"/></a>
                        <div class="lunbo-js"><h4>坚果 Pro 2</h4>
                            <p class="jieshao">漂亮得不像实力派</p>
                            <p class="pie"><span>¥</span><span>1,799.00</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="con-one">
            <img src="https://resource.smartisan.com/resource/3/327erfenzhiyikongjingx.png?x-oss-process=image/resize,w_602/format,webp" alt="">
            <img src="https://resource.smartisan.com/resource/y/yongbaochuntianAPPerfenzhiyi.png?x-oss-process=image/resize,w_602/format,webp" alt="">
        </div>
        <ul class="level discount">
            <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
            <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
            <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
            <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
            <li><a href="javascript:;"><img src="https://resource.smartisan.com/resource/54f6fc913f0e569481868287053fa11b.png?x-oss-process=image/resize,w_384/format,webp" alt=""></a></li>
        </ul>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">净化器及配件</div>
            <div class="weui-cell__ft" style="font-size: 0">
                <a @click="list1" href="#/hot" style="width:20px;height:20px;display: block;position: absolute;top:-11px;left:7px"></a>
                <span class="" style="margin-left: 5px;margin-right: 5px;"></span>
            </div>
        </div>
        <div class="all" id="con-lunbo2">
            <div class="screen">
                <ul >
                    <li><a href="#" @click="session"><img src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_576/format,webp"/></a>
                        <div class="lunbo-js"><h4>畅呼吸智能空气净化器</h4>
                            <p class="jieshao"> 强力除甲醛，轻松畅呼吸 </p>
                            <p class="pie"><span>¥</span><span>3,499.00</span></p>
                        </div>
                    </li>
                    <li>
                        <a href="#" @click="session"> <img src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_576/format,webp"/></a>
                        <div class="lunbo-js"><h4>畅呼吸智能空气净化器超级除甲醛版</h4>
                            <p class="jieshao"> 强力除甲醛，轻松畅呼吸 </p>
                            <p class="pie"><span>¥</span><span>3,499.00</span></p>
                        </div>
                    </li>
                    <li>
                        <a href="#" @click="session">  <img src="https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png?x-oss-process=image/resize,w_576/format,webp"/></a>
                        <div class="lunbo-js"><h4>畅呼吸智能空气净化器</h4>
                            <p class="jieshao"> 强力除甲醛，轻松畅呼吸 </p>
                            <p class="pie"><span>¥</span><span>3,499.00</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div _ngcontent-c10="" class="goods-list box-line line-top"> <!----><div _ngcontent-c10="" class="goods box-line line-vertical"> <img _ngcontent-c10="" alt="" src="https://resource.smartisan.com/resource/5f7030ebe7121200702b1dcf7e1e7e88.jpg?x-oss-process=image/resize,w_102/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> <span _ngcontent-c10="">畅呼吸防护口罩</span> <div _ngcontent-c10="" class="show-detail"></div> </div><div _ngcontent-c10="" class="goods box-line line-vertical"> <img _ngcontent-c10="" alt="" src="https://resource.smartisan.com/resource/bd68ff814182aac9434fc4978d1865fe.jpg?x-oss-process=image/resize,w_102/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> <span _ngcontent-c10="">高效复合滤芯</span> <div _ngcontent-c10="" class="show-detail"></div> </div><div _ngcontent-c10="" class="goods box-line line-vertical"> <img _ngcontent-c10="" alt="" src="https://resource.smartisan.com/resource/bafd1aebe125ba9a464f459d9b6138d4.jpg?x-oss-process=image/resize,w_102/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> <span _ngcontent-c10="">除甲醛活性炭滤芯</span> <div _ngcontent-c10="" class="show-detail"></div> </div><div _ngcontent-c10="" class="goods box-line line-vertical"> <img _ngcontent-c10="" alt="" src="https://resource.smartisan.com/resource/5e2dc2c91cf8f221092dce4e5cb813a2.jpg?x-oss-process=image/resize,w_102/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> <span _ngcontent-c10="">汽车空调滤清器</span> <div _ngcontent-c10="" class="show-detail"></div> </div> </div>
        <div class="con-tow">
            <div class="con-left">
                <a _ngcontent-c13="" href="javascript:;"> <div _ngcontent-c13="" class="image-shadow image-shadow-l"></div> <div _ngcontent-c13="" class="box-border"> <img _ngcontent-c13="" src="https://resource.smartisan.com/resource/997476fb3ee6f2e512289bf2e2d8b145.png?x-oss-process=image/resize,w_282/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> </div> </a>
                <a _ngcontent-c13="" href="javascript:;"> <div _ngcontent-c13="" class="image-shadow image-shadow-l"></div> <div _ngcontent-c13="" class="box-border"> <img _ngcontent-c13="" src="https://resource.smartisan.com/resource/f843822fa365c2622f593a8758b6ca92.png?x-oss-process=image/resize,w_282/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> </div> </a>
                <a _ngcontent-c13="" href="javascript:;"> <div _ngcontent-c13="" class="image-shadow image-shadow-l"></div> <div _ngcontent-c13="" class="box-border"> <img _ngcontent-c13="" src="https://resource.smartisan.com/resource/845702246dc38215fb6f0034e185f79c.png?x-oss-process=image/resize,w_282/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> </div> </a>
            </div>
            <div class="con-right">
                <div _ngcontent-c13="" class="selection-r"> <!----><a _ngcontent-c13="" href="javascript:;"> <div _ngcontent-c13="" class="image-shadow image-shadow-r"></div> <div _ngcontent-c13="" class="box-border"> <img _ngcontent-c13="" src="https://resource.smartisan.com/resource/0a27a728fd2628c9ee2be5d0dbd48cce.png?x-oss-process=image/resize,w_282/format,webp" style="opacity: 1; transition: opacity 0.3s ease-in-out;"> </div> </a> </div>
            </div>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">坚果 Pro 2及配件</div>
            <div class="weui-cell__ft" style="font-size: 0">
                <a @click="list1" href="#/hot" style="width:20px;height:20px;display: block;position: absolute;top:-11px;left:7px"></a>
                <span class="" style="margin-left: 5px;margin-right: 5px;"></span>
            </div>
        </div>
        <div  class="con-thr">
            <ul>
                <li class="pro2" v-for="k in pro2">
                    <a href="javascript:;"  @click="session"><img :src="k.img" alt=""></a>
                    <div class="thr-js"><h4 v-text="k.name"></h4>
                        <p class="jieshao" v-text="k.des"></p>
                        <p class="pie"><span>¥</span><span v-text="k.pie"></span></p></div>
                </li>
            </ul>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">坚果 Pro 及配件</div>
            <div class="weui-cell__ft" style="font-size: 0">
                <a @click="list1" href="#/hot" style="width:20px;height:20px;display: block;position: absolute;top:-11px;left:7px"></a>
                <span class="" style="margin-left: 5px;margin-right: 5px;"></span>
            </div>
        </div>
        <div  class="con-four">
            <ul>
                <li v-for="k in pro">
                    <a href="#"  @click="session"><img :src="k.img" alt=""></a>
                    <div class="four-js"><h4 v-text="k.name"></h4>
                        <p class="jieshao" v-text="k.des"></p>
                        <p class="pie"><span>¥</span><span v-text="k.pie"></span></p></div>
                </li>
            </ul>
        </div>
        <div class="con-one">
            <img src="https://resource.smartisan.com/resource/3/327erfenzhiyikongjingx.png?x-oss-process=image/resize,w_602/format,webp" alt="">
            <img src="https://resource.smartisan.com/resource/y/yongbaochuntianAPPerfenzhiyi.png?x-oss-process=image/resize,w_602/format,webp" alt="">
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">品牌周边</div>
            <div class="weui-cell__ft" style="font-size: 0">
                <a @click="list1" href="#/hot" style="width:20px;height:20px;display: block;position: absolute;top:-11px;left:7px"></a>
                <span class="" style="margin-left: 5px;margin-right: 5px;"></span>
            </div>
        </div>
        <div  class="con-thr">
            <ul>
                <li v-for="k in periphery">
                    <a href="#"  @click="session"><img :src="k.img" alt=""></a>
                    <div class="thr-js"><h4 v-text="k.name"></h4>
                        <p class="jieshao" v-text="k.des">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span><span v-text="k.pie"></span></p></div>
                </li>
            </ul>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">品牌精选</div>
            <div class="weui-cell__ft" style="font-size: 0">
                <a @click="list1" href="#/hot" style="width:20px;height:20px;display: block;position: absolute;top:-11px;left:7px"></a>
                <span class="" style="margin-left: 5px;margin-right: 5px;"></span>
            </div>
        </div>
        <div  class="con-thr">
            <ul style="overflow: hidden">
                <li  v-for="k in boutique">
                    <a href="#"  @click="session"><img :src="k.img" alt=""></a>
                    <div class="thr-js"><h4 v-text="k.name"></h4>
                        <p class="jieshao" v-text="k.des"></p>
                        <p class="pie"><span>¥</span><span v-text="k.pie"></span></p></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				hot:{},
				pro2:{},
                pro:{},
				periphery:{},
				boutique:{}
            }
        },
		methods:{
             session:function (eve) {
				var parent=$(eve.target).parents("li")
                var src=parent.find("img").attr("src")
                 var name=parent.find("h4").text()
                 var des=parent.find(".jieshao").text()
                 var pie=parent.find(".pie").find("span").eq(1).text()
				 sessionStorage.setItem("index", JSON.stringify({src,name,des,pie}));
				 console.log(src, name,des,pie);
			 },
			list1:function (eve) {
				this.$store.state.title=$(eve.target).parents(".weui-cell").find(".weui-cell__bd").text()
			}
        },
		mounted() {
            console.log(222)
			var href=this
			require("./fzh2")()
			require("./fzh3")()
			$.ajax({
				url:"http://localhost:8888/index/hot",
				type: "get",
			}).then((res) => {
				href.hot=JSON.parse(res).hot
				href.pro2=JSON.parse(res).pro2
				href.pro=JSON.parse(res).pro
                href.periphery=JSON.parse(res).periphery
				href.boutique=JSON.parse(res).boutique
			})

		}
	}
</script>
<style scoped>
    .content{
        margin-bottom: 55px;
    }
    .weui-cell_access{
    border-top: solid 5px #dbdbdb;
        border-bottom: solid 1px #dbdbdb;
        margin-bottom: 15px;
    }
   .level{
       padding:0 10px;
       display: flex;
       overflow-y: hidden;
       overflow-x: auto;
       align-content: center;
       -webkit-box-pack: justify;
       justify-content: space-between;
   }
    ::-webkit-scrollbar {
        display: none;
    }
   /*商品列表一样*/
   .horizontal  li{
       width: 36%;
       flex-shrink: 0;
       padding-right: .4rem;
       padding-bottom:  10px;
   }
   .horizontal  li img a{
       display: block;
   }
   .horizontal  li img{
       width: 100%;
       border: 1px solid #dbdbdb;

   }
   h4{
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       margin: 0;
       font-size: .6rem;
       color: #333
   }
   .jieshao{
        margin-top: .3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .5rem;
        line-height: 1.2;
        color: #7f7f7f;
        min-height: .6rem;
    }
    .pie{
        color: #d44d44;
        display: inline-block;
        white-space: nowrap;
        font-weight: 700;
        font-size: .6rem;
   }
   .pie span{
       font-size: .5rem;
   }

      /*优惠卡*/
    .discount{
        padding: 10px;
        border-top: solid 5px #dbdbdb;
    }
    .discount  li{
        width: 70%;
        flex-shrink: 0;
        padding-right: .4rem;
        padding-right:  10px;
    }
    .discount li img a{
        display: block;
    }
    .discount  li img{
        width: 100%;

    }
    /*轮播*/
    .all {
        height: 28rem;
        width: calc(100% - 1.2rem);
        margin: 0 .6rem .5rem;
        border-radius: .4rem;
        position: relative;
    }

    .screen {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .screen ul li {
        height: 100%;
        width: 100%;
        overflow: hidden;
        float: left;
        position:relative;
    }

    .screen ul {
        position: absolute;
        left: 0;
        top: 0px;
        height: 100%;
        width: 300%;
        display: flex;
        background: #fff;
        overflow: hidden;

    }

    .screen ul li img {
        flex: 1;
        width: 100%;
        height: 87%;
        border-radius: .4rem;
        margin-bottom: 20%;
    }
    .lunbo-js{
        position: absolute;
        bottom: 5%;
        left:30%;
    }
    .con-one{
        border-top: solid 5px #dbdbdb;
        padding:10px;
    }
    .con-one img{
        width: 100%;
    }
    #con-lunbo2{
        height: 16rem;
    }
    #con-lunbo2 ul li img {
        height: 80%;
    }
    .goods-list[_ngcontent-c10]{
        display: flex;
        flex-wrap: wrap
    }
    .goods-list[_ngcontent-c10] .goods[_ngcontent-c10] {
        width: 50%;
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        height: 3rem;
        padding: .2rem 0;
        display: flex;
    }
    .goods-list[_ngcontent-c10] .goods[_ngcontent-c10] img[_ngcontent-c10] {
        height: 1.8rem;
        width: 1.8rem;
        margin: 0 .6rem;
    }
    .goods-list[_ngcontent-c10] .goods[_ngcontent-c10] span[_ngcontent-c10] {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 50%;
        line-height: 1.2;
        font-size: .6rem;
        font-weight: 700;
        color: #333;
        white-space: nowrap;
    }
    .show-detail:before {
        content: "";
        display: inline-block;
        width: .3rem;
        height: .5rem;
        position: absolute;
        right: .6rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: url("../images/10.png") no-repeat 50%;
        background-size: contain;
    }
    .con-tow{
        display: flex;
        overflow: hidden;
        padding: 10px;
        border-top: solid 5px #dbdbdb;
    }
    .con-tow .con-left{
        width: 49%;
        margin-right: 2%;
    }
    .con-tow .con-left img{
        width: 100%;
    }
    .con-tow .con-right{
        width: 49%;
    }
    .con-tow .con-right img{
        width: 100%;
    }
    .con-thr ul{
        padding: 5px;
    }
    .con-thr ul li{
        float: left;
        width: 48%;
        padding: 1%;
    }
    .con-thr ul li img{
        border: solid 1px #dbdbdb;
        width: 100%;
    }
    .thr-js{
        margin-left: 5%;
    }
    .con-four li{
        display: flex;
        padding :0 5%;
        border-bottom: solid 1px #bdbdbd;
    }
    .con-four li a{
        width: 40%;
    }
    .con-four li img{
        width: 100%;
    }
    .con-four .four-js{
        margin-top: 10%;
    }
</style>