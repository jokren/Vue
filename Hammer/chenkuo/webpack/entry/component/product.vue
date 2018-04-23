<template>

    <div id="product">
        <div id="header">
            <div id="head-top"></div>
            <div id="head-m"></div>

            <div id="main" class="phone">
                <p>
                    <a @click="routerBack"><i class="iconfont icon-msnui-left-arrow-round">返回</i></a>
                    <span v-text="type">手机</span>
                </p>
            </div>
        </div>

        <div class="all">

            <a href="#/detail">
                <div v-for="a in arr" class="datanum" @click="getname">
                    <img :src="a.imgsrc" alt="" style="width:1.26rem;height:1.26rem" class="img0">

                    <div class="item">
                        <h5 v-text="a.name" class="name-z"></h5>
                        <p v-text="a.describe" class="p-describe"></p>
                        <ul class="oul" v-if="bool">
                            <li class="box-border"><span>4G + 32GB</span></li>
                            <li class="box-border"><span>4G + 64GB</span></li>
                            <li class="box-border"><span>6G + 64GB</span></li>
                            <li class="box-border"><span>6G + 128GB</span></li>
                            <li class="box-border"><span>6G + 256GB</span></li>
                        </ul>
                        <ul class="print">
                            <li v-if="bool">
                                <div class="outer"></div>
                            </li>
                            <li v-if="bool">
                                <div class="outer"></div>
                            </li>
                            <li>
                                <div class="outer kong"></div>
                            </li>
                            <li>
                                <div class="outer"></div>
                            </li>
                        </ul>


                        <p class="price">
                            <span v-text="a.newprice" class="newprice"></span><span class="origin-price" v-text="a.oldprice"></span>
                        </p>
                    </div>
                </div>
            </a>
        </div>
        <xfooter/>
    </div>

</template>


<script>

    import $ from "jquery"
    import xfooter from "./classify/footer.vue";

    export default {
        data : function(){
            return {
                arr : "",
                type : '',
            }
        },
        computed : {
            bool(){
                if(this.type == "手机"){
                    return true
                } else {
                    return false
                }
            }
        },
        methods : {
            routerBack(){
                this.$router.go(-1);
            },
            getname(event){
                //**必须先通过点击target找到最大父级再找目标对象
                var bflg = false
                for(var i = 0; i < $(".datanum").length; i++){
                    if($(".datanum")[i] == event.target){
                        bflg = true
                    }
                }
                if(bflg){
                    this.$store.state.name = $(event.target).find(".name-z").text().trim()
                } else {
                    this.$store.state.name = $(event.target).parents(".datanum").find(".name-z").text().trim()
                }
                  console.log(this.$store.state.name);
            }
        },
        created : function(){
            var url = "http://localhost:8888/product";
            var self = this;
            var type = this.$store.state.type
            $.post(url, function(res){
                // console.log(res);
                var temparr = JSON.parse(res)
                var arr2 = []
                for(var i = 0; i < temparr.length; i++){
                    if(temparr[i].type == type){
                        arr2.push(temparr[i])
                    }
                }
                //console.log(arr2);
                //逻辑  有点复杂
                if(arr2.length != 0){
                    self.arr = arr2
                    var str = JSON.stringify(arr2)
                    window.sessionStorage.setItem('arr', str);
                    self.type = self.$store.state.type
                } else {
                    self.arr = JSON.parse(sessionStorage.getItem('arr'))
                    self.type = self.arr[0].type
                }
                console.log(self.type);
            })
        },
        mounted : function(){

        },
        components : {
            xfooter
        }
    }


</script>

<style scoped>
    #header{
        width:100%;
        position:fixed;
        top:0px;
        border-bottom:1px solid #e7e7e7;
    }
    #head-top{
        height:0.02rem;
        background:#000;
    }
    .phone{
        padding:0 0.06rem;
        border-bottom:1px solid #f1f1f1;
    }
    #head-m{
        height:0.02rem;
        background:#2a2a2a;
    }
    #main{
        height:0.46rem;
        background:linear-gradient(#1d1d1d, #111111);
    }
    #main > p{
        font-weight:700;
    }
    #main i{
        color:#fff;
        font-size:0.12rem;
        display:inline-block;
        width:0.54rem;
        height:0.3rem;
        border-radius:0.06rem;
        background:linear-gradient(#333332, #171717);
        text-align:center;
        line-height:0.3rem;
        box-shadow:0.02rem 0.02rem 0.02rem #000;
    }
    #main span{
        font-size:0.18rem;
        display:inline-block;
        width:2.4rem;
        color:#fff;
        text-align:center;
        line-height:0.46rem;
    }
    .all{
        padding-bottom:0.53rem;
        padding-top:0.5rem;
    }
    .all > div:nth-last-child(1){
        border-bottom:0;
    }
    .all > div:nth-of-type(1){
        margin-top:0.65rem;
    }
    .datanum{
        margin-top:0.15rem;
        border-bottom:1px solid #f1f1f1;
        overflow:hidden;
    }
    .img0{
        float:left;
        margin:0rem 0.5rem 0 0.2rem;
    }
    .item{
        float:left;
        /*margin-top:0.15rem;*/
        font-weight:normal;
        width:1.79rem;
        margin-bottom:0.14rem;
    }
    .item > h5{
        color:#000;
        font-weight:900;
    }
    .p-describe{
        line-height:0.26rem;
    }
    .oul{
        overflow:hidden;
    }
    .box-border{
        font-size:0.1rem;
        padding:0rem 0.05rem;
        line-height:0.11rem;
        border:1px solid #b9cffa;
        float:left;
        margin-top:0.02rem;
        margin-right:0.04rem;
        color:#3965cc;
        background-color:#e5efff;
        border-radius:0.03rem;
    }
    .print{
        overflow:hidden;
        margin-top:0.08rem;
        margin-bottom:0.15rem;
    }
    .print > li{
        width:0.1rem;
        height:0.1rem;
        border-radius:50%;
        border:1px solid #ccc;
        float:left;
    }
    .outer{
        width:0.05rem;
        height:0.05rem;
        border-radius:50%;
        background:#000;
        margin:0.025rem;
    }
    .print .kong{
        background-color:#fff;
        border:1px solid #ccc;
    }
    .newprice{
        color:#e07344;
        font-size:0.14rem;
    }
    .origin-price{
        color:#7f7f93;
        font-size:0.1rem;
        text-decoration:line-through;
    }


</style>