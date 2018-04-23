<template>
    <div id="charge">
        <div class="phone">
            <p id="p1" v-text="type">充电线材</p>
        </div>

        <a href="#/product" @click="gettype">
            <div class="phone" id="img1">
                <img src="../../hammer-img/29.png" alt="" style="width:100%">
            </div>
        </a>

        <div id="myul" class="phone">
            <ul id="oul">
                <a href="#/detail" @click="getname">
                    <li class="oli">
                        <div class="img2">
                            <img src="../../hammer-img/33.jpg" alt="" width="69px" height="69px">
                        </div>
                        <p class="name-z">原装充电器</p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="oli">
                        <div class="img2">
                            <img src="../../hammer-img/8.jpg" alt="" width="69px" height="69px">
                        </div>
                        <p class="name-z">原装充电器</p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="oli">
                        <div class="img2">
                            <img src="../../hammer-img/31.jpg" alt="" width="69px" height="69px">
                        </div>
                        <p class="name-z">原装充电器</p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="oli">
                        <div class="img2">
                            <img src="../../hammer-img/38.jpg" alt="" width="69px" height="69px">
                        </div>
                        <p class="name-z">原装充电器</p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="oli">
                        <div class="img2">
                            <img src="../../hammer-img/39.jpg" alt="" width="69px" height="69px">
                        </div>
                        <p class="name-z">原装充电器</p>
                    </li>
                </a>
                <a href="#/detail" @click="getname">
                    <li class="oli">
                        <div class="img2">
                            <img src="../../hammer-img/33.jpg" alt="" width="69px" height="69px">
                        </div>
                        <p class="name-z">原装充电器</p>
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
                type : "充电线材",
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
                    this.$store.state.name = $(event.target).parents(".oli").find(".name-z").text().trim()
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
    #myul{
        overflow:hidden;
        margin-bottom:0.2rem;
        border-bottom:0;
    }
    #oul .img2{
        padding:0.2rem;
        border:1px solid #f5f5f5;
    }
    #oul li{
        text-align:center;
        width:1.09rem;
        float:left;
        margin-right:0.08rem;
        margin-top:0.2rem;
    }
    #oul li:nth-of-type(3n){
        margin-right:0;
    }
    #oul li > p{
        margin-top:0.08rem;
    }
    #bord{
        height:0.08rem;
        background:linear-gradient(#e2e2e2, #e7e7e7);
    }
</style>