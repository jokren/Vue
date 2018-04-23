
<template>
   <div>
       <header>
           <div class="title-bar">
               <h1 class="nav-title">个人中心</h1>
           </div>
       </header>
       <section style="margin-top: .5rem;margin-bottom: .54rem;">
           <div class="wrapper">
               <a href="#/zhxq">
                   <div class="personData" v-for="a in res" >
                       <div class="photo">
                           <img src="../hammer-img/loginImage/photo.png" alt="">
                       </div>
                       +86
                       <span v-text="a.telphone"></span>
                   </div>
               </a>
               <ul class="menuList">
                   <li>
                       <a class="icons allgoods"  target="_self">全部订单</a>
                   </li>
                   <li>
                       <a class="icons pay"  target="_self">待付款</a>
                   </li>
                   <li>
                       <a class="icons getgoods"  target="_self">待收货</a>
                   </li>
                   <li>
                       <a class="icons server"  target="_self">售后</a>
                   </li>
               </ul>
               <ul class="aboutServer">
                   <li class="serverList">
                       <a  target="_self">
                           发起售后
                       </a>
                   </li>
                   <li>
                       <a  target="_self">
                           我的售后
                       </a>
                   </li>
               </ul>
               <ul class="otherServer aboutServer">
                   <li class="serverList">
                       <a  target="_self">
                           地址管理
                       </a>
                   </li>
                   <li class="serverList">
                       <a  target="_self">
                           我的优惠券
                       </a>
                   </li>
                   <li class="serverList">
                       <a  target="_self">
                           优先购买码
                       </a>
                   </li>
                   <li>
                       <a  target="_self">
                           提货兑换卡
                       </a>
                   </li>
               </ul>
               <ul class="storeSearch aboutServer">
                   <li class="serverList">
                       <a >
                           线下零售门店查询
                       </a>
                   </li>
                   <li class="serverList">
                       <a >
                           线下维修门店查询
                       </a>
                   </li>
                   <li>
                       <a >
                           常见问题
                       </a>
                   </li>
               </ul>

           </div>
       </section>
   </div>
</template>
<script>
    import $ from "jquery";
    import Vue from "vue";
    export default {
        data(){
            return{
                  res:[]
            }
        },
        methods:{

        },
        mounted:function () {
            var self=this;
            $.ajax({
                type:"post",
                data:{
                    id_num:sessionStorage.getItem("login")
                },
                url:"http://localhost:8888/person"
            }).done((data)=>{
                console.log(data);
                var arr=JSON.parse(data)
                self.res = arr;
            })
        }
    }
</script>

<style scoped>
    .title-bar{
        background: #1d1d1d;
        background-image: linear-gradient(#1d1d1d,#181818);
        height: 0.5rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 199;
    }
    .nav-title{
        color: #fff;
        font-size: .18rem;
        line-height: .2rem;
        padding: .16rem 0 0;
        text-align: center;
        position: absolute;
        top: 0;
        left: .6rem;
        right: .6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .wrapper{
        height: 100%;
        width: 100%;
        /*background: url(../hammer-img/loginImage/grzxBg.png) repeat;*/
        background-size: 1rem;
        box-sizing: border-box;
        min-height: 100vh;
        padding: .14rem .12rem 0;
    }
    .wrapper a{
        text-decoration: none;
    }
    .personData{
        position: relative;
        height: .86rem;
        line-height: .86rem;
        padding-left:.90625rem;
        margin-bottom: 0;
        border-bottom: 0;
        border-radius: .08rem .08rem 0 0;

        font-size: .16rem;
        /*line-height: .8rem;*/
        color: #333;
        box-shadow: none;
        overflow: hidden;
        background: #fff;
    }
    .personData:after{
        content: "";
        display: inline-block;
        width: .06rem;
        height: .1rem;
        position: absolute;
        right: .12rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: url(../hammer-img/loginImage/left.png) no-repeat 50%;
        background-size: contain;
    }
    .photo{
        position: absolute;
        left: .18rem;
        top: 50%;
        width: .55rem;
        height: .55rem;
        transform: translateY(-50%);
    }
    .photo:before{
        content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: url(../hammer-img/loginImage/tx.png) no-repeat;
        background-size: .55rem;
    }
    .photo>img{
        width: .55rem;
        height: .55rem;
        border-radius: 50%;
    }
    .menuList{
        position: relative;
        overflow: hidden;
        background: #fff;
        margin-bottom: .14rem;
        border-radius: 0 0 .08rem .08rem;
        box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
    }
    .menuList>li{
        float: left;
        width: 25%;
        height: .6rem;
        text-align: center;
        font-size: .1rem;
        position: relative;
        box-sizing: border-box;
        list-style: none;
    }
    .menuList:before{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 1px;
        background: #f2f2f2;
        /*-webkit-transform: scaleY(.667);*/
        transform: scaleY(.667);
        /*-webkit-transform-origin: top;*/
        transform-origin: top;
    }
    .menuList>li:before{
        position: absolute;
        top: 0;
        right: 0;
        content: "";
        width: 1px;
        height: 100%;
        background: #f2f2f2;
        /*-webkit-transform: scaleX(.667);*/
        transform: scaleX(.667);
        /*-webkit-transform-origin: right;*/
        transform-origin: right;
    }
    .menuList>li>a{

        text-decoration: none;
        padding: .4rem 0 .1rem;
        color: #333;
        display: block;
        font-size: .1rem;
    }
    .icons:before{
        content: " ";
        display: block;
        position: absolute;
        width: .24rem;
        height: .24rem;
        top: .08rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .allgoods:before{
        background: url(../hammer-img/loginImage/Allgoods.png) no-repeat 50%;
        background-size: .16rem;
    }
    .pay:before{
        background: url(../hammer-img/loginImage/pay.png) no-repeat 50%;
        background-size: .2rem;
    }
    .getgoods:before{
        background: url(../hammer-img/loginImage/getgoods.png) no-repeat 50%;
        background-size: .2rem;
    }
    .server:before{
        background: url(../hammer-img/loginImage/server.png) no-repeat 50%;
        background-size: .16rem;
    }
    .aboutServer{
        position: relative;
        overflow: hidden;
        border-radius: .08rem;
        background: #fff;
        margin-bottom: .14rem;
        box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
    }
    .aboutServer>li{
        height: .6rem;
        line-height: .6rem;
        position: relative;
        font-size: .16rem;
        box-sizing: border-box;
    }
    .aboutServer>li>a{
        display: block;
        text-decoration: none;
        color:#333;
        padding-left: 0;
        text-indent: .18rem;
    }
    .serverList:before{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        width: 100%;
        height: 1px;
        background: #f2f2f2;
        transform: scaleY(.667);
        transform-origin: bottom;
    }
    .aboutServer>li:after{
        content: "";
        display: inline-block;
        width: .06rem;
        height: .1rem;
        position: absolute;
        right: .12rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: url(../hammer-img/loginImage/left.png) no-repeat 50%;
        background-size: contain;
    }
</style>
