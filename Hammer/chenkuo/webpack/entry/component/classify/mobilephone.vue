<template>

    <div id="mbp">
        <div class="phone">
            <p id="p1" v-text="type">手机</p>
        </div>
        <a href="#/product" @click="gettype">
            <div class="phone" id="img1">
                <img src="../../hammer-img/17.png" alt="" style="width:100%">
            </div>
        </a>
        <a href="#/detail" @click="getname">
            <div class="phone backimg">
                <p class="p2">
                    <span class="name-z">坚果 Pro 2  </span> <i class="iconfont icon--youjiantou"></i>
                </p>
            </div>
        </a>

        <a href="#/detail" @click="getname">
            <div class="phone backimg" id="phone-over">
                <p class="p2">
                    <span class="name-z">坚果 Pro  </span> <i class="iconfont icon--youjiantou"></i>
                </p>
            </div>
        </a>
        <div id="bord"></div>

    </div>

</template>

<script>
    import $ from "jquery"

    export default {
        data(){
            return {
                type : "手机",
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
                for(var i = 0; i < $(".backimg").length; i++){
                    if($(".backimg")[i] == event.target){
                        bflg = true
                    }
                }
                if(bflg){
                    this.$store.state.name = $(event.target).find(".name-z").text().trim()
                } else {
                    this.$store.state.name = $(event.target).parents(".backimg").find(".name-z").text().trim()
                }
                console.log(this.$store.state.name);
            }
        }
    }


</script>


<style scoped>
    #mbp{
        margin-top:0.5rem;
    }
    .phone{
        padding:0 0.12rem;
        border-bottom:1px solid #f1f1f1;
    }
    #phone-over{
        border-bottom:0;
    }
    #img1{
        padding:0.13rem 0.12rem;
    }
    .backimg{
        padding:0.14rem 0.12rem;
    }
    #p1{
        font-size:0.16rem;
        line-height:0.4rem;
        color:#666666;
    }
    .p2{
        background:url("../../hammer-img/32.png") no-repeat left top;
        background-size:contain;
        line-height:0.32rem;
        width:100%;
    }
    .p2 > span{
        margin-left:0.5rem;
    }
    .p2 > i{
        float:right;
    }
    #bord{
        height:0.08rem;
        background:linear-gradient(#e2e2e2, #e7e7e7);
    }


</style>