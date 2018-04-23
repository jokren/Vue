<template>
    <div id="brand">
        <div class="phone">
            <p id="p1">品牌精选</p>
        </div>

        <a href="#/product" @click="gettype">
            <div class="phone" id="img1">
                <img src="../../hammer-img/44.png" alt="" style="width:100%">
            </div>
        </a>

        <div class="myul">
            <ul id="oul">
                <a href="#/detail" @click="getname">
                    <li class="bord-b bord-r">
                        <p>
                            <span class="name-z">茶素材汀壶电水壶</span> <i class="iconfont icon--youjiantou"></i>
                        </p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="bord-b bord-r">
                        <p>
                            <span class="name-z">茶素材汀壶电水壶 </span> <i class="iconfont icon--youjiantou"></i>
                        </p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="bord-b bord-r">
                        <p>
                            <span class="name-z">茶素材汀壶电水壶</span> <i class="iconfont icon--youjiantou"></i>
                        </p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="bord-b bord-r">
                        <p>
                            <span class="name-z">茶素材汀壶电水壶</span> <i class="iconfont icon--youjiantou"></i>
                        </p>
                    </li>
                </a>
            </ul>
        </div>


        <div id="bord"></div>
    </div>


</template>


<script>
    import $ from "jquery"

    export default {
        data(){
            return {
                type : "第三方商品",
            }
        },
        methods : {
            gettype(){
                this.$store.state.type = this.type
                //                console.log(this.$store.state.type);
            },
            getname(event){
                //**必须先通过点击target找到最大父级再找目标对象
                var bflg = false
                for(var i = 0; i < $(".oli").length; i++){
                    if($(".oli")[i] == event.target){
                        bflg = true
                    }
                }
                if(bflg){
                    this.$store.state.name = $(event.target).find(".name-z").text().trim()
                } else {
                    this.$store.state.name = $(event.target).parents("li").find(".name-z").text().trim()
                }
                console.log(this.$store.state.name);
            }
        }
    }
</script>


<style scoped>

    .phone{
        padding:0 0.12rem;
        border-bottom:1px solid #f1f1f1;
    }
    #p1{
        font-size:0.16rem;
        line-height:0.4rem;
        color:#666666;
    }
    #img1{
        padding:0.13rem 0.12rem;
    }
    .myul{
        overflow:hidden;
    }
    #oul   li{
        float:left;
        padding:0.14rem 0.12rem 0.14rem 0.12rem;
        width:1.62rem;
        line-height:0.26rem;
    }
    #oul  li > p{
        background:url("../../hammer-img/37.png") no-repeat left top;
        background-size:contain;
        line-height:0.37rem;
    }
    #oul  li span{
        margin-left:0.5rem;
    }
    #oul  li i{
        float:right;
    }
    .bord-b{
        border-bottom:1px solid #f5f5f5;
    }
    .bord-r{
        border-right:1px solid #f5f5f5;
    }
    #bord{
        height:0.08rem;
        background:linear-gradient(#e2e2e2, #e7e7e7);
    }
</style>