
<template>
    <div>
        <header>
            <div class="title-bar">
                <a class="nav-back" href="#/person">返回</a>
                <h1 class="nav-title">账户详情</h1>
            </div>
        </header>
        <section style="margin-top: .5rem;">
            <div class="wrapper" v-for="k in res">
                <a href="#">
                    <div class="personData" >
                        <div class="photo">
                            <img src="../hammer-img/loginImage/photo.png" alt="">
                        </div>
                        +86
                        <span v-text="k.telphone"></span>
                    </div>
                </a>
                <ul class="teleMail">
                    <li class="fisrtLi">
                        <a>手机</a>
                        <span class="txt-label" v-text="k.telphone"></span>
                    </li>
                    <li>
                        <a>邮箱</a>
                        <span class="txt-label" v-text="k.email"></span>
                    </li>
                </ul>
                <ul class="updatepwd">
                    <li class="fisrtLi">
                        <a>修改密码
                        </a>
                    </li>
                </ul>
                <div class="outLogin">
                    <a href="#/" @click="outLogin">退出登录</a>
                </div>
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
            outLogin(){
                window.sessionStorage.setItem("login","")
            }
        },
        mounted:function () {
            var self=this;
            $.ajax({
                type:"post",
                data:{
                    id_num:sessionStorage.getItem("login")
                },
                url:"http://localhost:8888/zhxq"
            }).done((data)=>{
                console.log(data);
                var arr=JSON.parse(data);
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
    .nav-back{
        padding: .1rem .1rem 0 .2rem;
        left: 0.06rem;
        background: #070707;
        background: linear-gradient(#131313,#070707);
        color: #fff;
        border-radius: 0.04rem;
        box-sizing: border-box;
        font-size: .12rem;
        height: .32rem;
        line-height: 1;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .nav-back:before{
        background: url(../hammer-img/loginImage/bacl.png) no-repeat;
        background-size: cover;
        content: " ";
        height: 100%;
        width: 0.06rem;
        position: absolute;
        top: 50%;
        left: 0.09rem;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .nav-back:after{
        background: linear-gradient(#2a2a29,#151515);
        box-shadow: inset 0 1px 1px hsla(0,0%,100%,.1), inset 0 0 1px rgba(0,0,0,.5);
        border-radius: 0.03rem;
        content: " ";
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: 1px;
        right: 1px;
        z-index: -1;
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
        background: url(../hammer-img/loginImage/grzxBg.png) repeat;
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
        width: .18rem;
        height: .17rem;
        position: absolute;
        right: .18rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: url(../hammer-img/loginImage/update.png) no-repeat 50%;
        background-size: .18rem;
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
    .teleMail{
        position: relative;
        overflow: hidden;
        border-radius: 0 0 .08rem .08rem;
        background: #fff;
        margin-bottom: .14rem;
        box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
    }
    .teleMail:before{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        content: "";
        width: 100%;
        height: 1px;
        background: #f2f2f2;
        transform: scaleY(.667);
        transform-origin: top;
    }
    .teleMail li{
        position: relative;
        font-size: .16rem;
        box-sizing: border-box;
        height: .6rem;
        line-height: .6rem;
    }
    .teleMail li:after{
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
    .teleMail li>a{
        position: relative;
        display:block;
        text-decoration: none;
        color: #333;
        height: 100%;
        padding-left: 0;
        text-indent: .186rem;
    }
    .txt-label{
        display: block;
        position: absolute;
        right: .3rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: .14rem;
        line-height: .14rem;
        color: #999;
        pointer-events: none;
    }
    .fisrtLi:before{
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
    .updatepwd{
        position: relative;
        overflow: hidden;
        border-radius:.08rem;
        background: #fff;
        margin-bottom: .14rem;
        box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03);
    }
    .updatepwd li{
        position: relative;
        font-size: .16rem;
        box-sizing: border-box;
        height: .6rem;
        line-height: .6rem;
    }
    .updatepwd li a{
        position: relative;
        display:block;
        text-decoration: none;
        color: #333;
        height: 100%;
        padding-left: 0;
        text-indent: .186rem;
    }
    .updatepwd li:after{
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
    .outLogin{
        /*padding: .07rem 0 .2rem;*/
        height: .56rem;
        line-height: .56rem;
        display: block;
        width: 100%;
        background: linear-gradient(#e87067,#df5249);
        box-shadow: inset 0 -0.05rem 0.05rem rgba(0,0,0,.2), 0 0 0.05rem rgba(0,0,0,.1), 0 0.05rem 0.15rem rgba(0,0,0,.2);
        text-align: center;
        border-radius: .06rem;
        overflow: hidden;
        outline: none;
    }
    .outLogin a{
        height: .56rem;
        line-height: .56rem;
        font-size: .16rem;
        display: block;
        width: 100%;
        color: #fff;
        font-weight: 700;
        text-decoration: none;
    }
</style>