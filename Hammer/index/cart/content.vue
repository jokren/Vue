<template>
    <div id="cart">
    <div _ngcontent-c1="" class="title-bar"> <!----> <!----> <!----> <!----><h1 _ngcontent-c1="" class="nav-title"> 购物车 </h1> <!----> <!----><a _ngcontent-c1="" @click="finish" class="nav-edit">{{compile}}</a> </div>
    <div class="content">
        <div  class="con-four">
            <ul>
                <li>
                    <div _ngcontent-c6="" class="checkbox-container"> <!----><span _ngcontent-c8="" class="checkbox-on m-blue-checkbox-new"> </span> <!----> </div>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="four-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie" v-show="!bool"><span>¥</span><a class="price">1799.00</a><span _ngcontent-c6="" class="sum"><i>x</i> <a>1</a></span></p>
                        <div class="redact" v-show="bool">
                            <span @click="sub"><img src="../images/13.png" alt=""></span>
                            <input @blur="blur" type="text" value="1"/>
                            <span @click="add"><img src="../images/14.png" alt=""></span>
                            <p><span>¥</span><a>179.00</a></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div _ngcontent-c6="" class="checkbox-container"> <!----><span _ngcontent-c8="" class="checkbox-on m-blue-checkbox-new"> </span> <!----> </div>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="four-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie" v-show="!bool"><span>¥</span><a class="price">1799.00</a><span _ngcontent-c6="" class="sum"><i>x</i> <a>1</a></span></p>
                        <div class="redact" v-show="bool">
                            <span @click="sub"><img src="../images/13.png" alt=""></span>
                            <input @blur="blur" type="text" value="2"/>
                            <span @click="add"><img src="../images/14.png" alt=""></span>
                            <p><span>¥</span><a>179.00</a></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div _ngcontent-c6="" class="checkbox-container"> <!----><span _ngcontent-c8="" class="checkbox-on m-blue-checkbox-new"> </span> <!----> </div>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="four-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie" v-show="!bool"><span>¥</span><a class="price">1799.00</a><span _ngcontent-c6="" class="sum"><i>x</i> <a>1</a></span></p>
                        <div class="redact" v-show="bool">
                            <span @click="sub"><img src="../images/13.png" alt=""></span>
                            <input @blur="blur" type="text" value="3"/>
                            <span @click="add"><img src="../images/14.png" alt=""></span>
                            <p><span>¥</span><a>179.00</a></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__bd">相关推荐</div>
        </div>
        <div  class="con-thr">
            <ul>
                <li>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="thr-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span>1,799.00</p></div>
                </li>
                <li>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="thr-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span>1,799.00</p></div>
                </li>
                <li>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="thr-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span>1,799.00</p></div>
                </li>
                <li>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="thr-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span>1,799.00</p></div>
                </li>
                <li>
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="thr-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span>1,799.00</p></div>
                </li>
                <li class="end">
                    <a href="#"><img src="https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png?x-oss-process=image/resize,w_216/format,webp" alt=""></a>
                    <div class="thr-js"><h4>坚果 Pro 2</h4>
                        <p class="jieshao">漂亮得不像实力派</p>
                        <p class="pie"><span>¥</span>1,799.00</p></div>
                </li>
            </ul>
        </div>
        <div _ngcontent-c5="" class="bottom-bar"> <div _ngcontent-c5="" class="select-info"> <div _ngcontent-c5="" class="checkbox-container"> <!----><span _ngcontent-c8="" class="m-blue-checkbox-new gou2"> </span> <!----> </div> <span _ngcontent-c5="">已选 <i _ngcontent-c5="" class="allsum">0</i> 件</span> </div> <div _ngcontent-c5="" class="sum-info"> <!----><div _ngcontent-c5="" class="desc" > <p _ngcontent-c5="" class="total-price" v-show="!bool">合计：<span _ngcontent-c5="" ><i>¥</i> <span class="allpic">0.00</span></span></p> <div _ngcontent-c5="" class="delivery" v-show="!bool"> <!----><p _ngcontent-c5="" style="color:#d44d44">已享免邮费</p><p _ngcontent-c5="" class="none">还差 <i>¥</i> <span>150.00</span> 元包邮</p> <!----> </div> </div> <!----><div _ngcontent-c5="" class="blue-btn btn-disabled" @click="remove">{{buy}}</div> <!----> </div> </div>
    </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				repeat:"",
				compile: "编辑",
                bool:false,
                buy:"现在结算"
			}
		},
		methods: {
//			this.repeat()
				finish: function() {
					if (this.bool){
						this.compile="编辑"
						this.bool=!this.bool
						this.buy="现在结算"
						for (var i = 0; i < $(".con-four ul li").length; i++) {
							var parent=$(".con-four ul li").eq(i)
							parent.find(".sum a").text(parent.find(".redact input").val())
						}
						count()
						function count() {
							var allpic = 0, allsum = 0;
							for (var i = 0; i < $(".list").length; i++) {
								allsum = allsum + parseInt($(".list").eq(i).find(".sum a").text())
								allpic = allpic + parseInt($(".list").eq(i).find(".sum a").text()) * parseFloat($(".list").eq(i).find(".price").text())
							}
							$(".allsum").text(allsum)
							$(".allpic").text(allpic + ".00")
						}
					}else {
						this.compile="完成"
						this.bool=!this.bool
						this.buy="删除"
                    }
				},
			add: function(eve) {
				$(eve.target).parent().siblings("input").val($(eve.target).parent().siblings("input").val()-1+2)
				if($(eve.target).parent().siblings("input").val()>=10){
					$(eve.target).parent().siblings("input").val(10)
				}
            },
			sub: function(eve) {
				$(eve.target).parent().siblings("input").val($(eve.target).parent().siblings("input").val()-1)
                if($(eve.target).parent().siblings("input").val()<=0){
					$(eve.target).parent().siblings("input").val(0)
                }
			},
            blur:function (eve) {
				if(/^\d*$/.test($(eve.target).val())){
					if($(eve.target).val()>=10){
						$(eve.target).val(10)
					}
					if($(eve.target).val()<=0){
						$(eve.target).val(0)
					}
                }else {
					$(eve.target).val(1)
                }
			},
			remove:function () {
					if(this.buy=="删除"){
						var number=0
						for (var i = $(".checkbox-on") .length-1; i >= 0; i--) {
							if(!$(".checkbox-on").eq(i).hasClass("gou")){
								$(".checkbox-on").eq(i).parents("li").remove()
							}else {
								number=number++
                            }
						}
						$(".allsum").text(number)
                    }
			}
		},
		mounted() {
				require("./cart")()

		}
	}

</script>

<style scoped>
    .content{
        padding-top: 50px;
    }
    .weui-cell_access{
        border-top: solid 5px #dbdbdb;
        border-bottom: solid 1px #dbdbdb;
        margin-bottom: 15px;
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
    .checkbox-container{
        width: 44px;
        -webkit-box-flex: 0;
        flex: 0 0 44px;
        text-align: center;
        line-height: 0
    }
    .m-blue-checkbox-new[_ngcontent-c8] {
        position: relative;
        display: inline-block;
        width: 23px;
        height: 23px;
        background: url(//static.smartisanos.cn/mobile/assets/images/checkbox@3x.1a1973d70f1b950c69558422677064d0.png) no-repeat;
        background-size: 100% auto;
        margin-top: 95%;
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
    .end{
        margin-bottom: 55px;
    }
    .bottom-bar[_ngcontent-c5] {
        position: fixed;
        height: 54px;
        padding: 0 12px;
        bottom: 53px;
        left: 0;
        right: 0;
        z-index: 90;
        background: #fafafa;
        box-shadow: 0 -1px 3px rgba(0,0,0,.06);
        font-size: 12px;
        color: #666;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .bottom-bar[_ngcontent-c5] .select-info[_ngcontent-c5] {
        height: fit-content;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .bottom-bar[_ngcontent-c5] .select-info[_ngcontent-c5] span[_ngcontent-c5] {
        color: #999;
        margin-left: 8px;
    }
    .bottom-bar[_ngcontent-c5] .select-info[_ngcontent-c5] span[_ngcontent-c5] i[_ngcontent-c5] {
        font-weight: 900;
        font-style: normal;
    }
    .m-blue-checkbox-new[_ngcontent-c8][data-v-08b9e915].gou2{
        margin-top: 15%;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] {
        -webkit-box-flex: 1;
        flex: 1;
        margin-left: 1.2rem;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] .total-price {
        font-weight: 700;
        color: #333;
        z-index: 10;
        position: relative;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] .total-price span {
        color: #d44d44;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] i {
        font-style: normal;
        font-size: .5rem;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] .delivery {
        margin-top: 5px;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] .blue-btn {
        position: absolute;
        width: 110px;
        right: 11px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: #999;
        height: 40px;
        line-height: 40px;
        box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
        font-size: 14px;
        display: block;

        border-radius: 6px;
        text-align: center;
        text-shadow: 0 -1px 0 rgba(0,0,0,.15);
        color: #fff
    }
    .sum{
        color:#999;
        margin-left: 4px;
    }
    .sum i{
        font-style: normal;
    }
    .redact{
        display: flex;
        margin-top: 7px;
    }
    .redact span{
        display: block;
        width: 30px;
        height: 30px;
        line-height: 40px;
        position: relative;
    }
    .redact input{
        width: 30px;
        height: 15px;
        line-height: 21px;
        text-align: center;
        font-size: 12px;
        margin-top: 5px;
        border-radius: 3px;
        outline: none;
    }
    .redact p{
        color: #d44d44;
        font-size: .6rem;
        font-weight: 700;
    }
    .m-blue-checkbox-new[_ngcontent-c8].gou{
        background-position: 0 -80px;
    }
    .bottom-bar[_ngcontent-c5] .sum-info[_ngcontent-c5] .buy{
        background: #5e8bdd;
        background: linear-gradient(#6f94e8,#5178df);
    }
    .none{
        display: none;
    }
    /*头部*/
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
    .title-bar[_ngcontent-c1] .nav-title[_ngcontent-c1] {
        color: #fff;
        font-size: 18px;
        line-height: 20px;
        padding: 16px 0 0;
        text-align: center;
        position: absolute;
        top: 0;
        left: 60px;
        right: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title-bar[_ngcontent-c1] .nav-edit[_ngcontent-c1] {
        padding: 10px 13px 0;
        right: 6px;
    }
    .title-bar[_ngcontent-c1] .nav-edit[_ngcontent-c1] {
        background: #070707;
        background: linear-gradient(#131313,#070707);
        color: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 12px;
        height: 32px;
        line-height: 1;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>