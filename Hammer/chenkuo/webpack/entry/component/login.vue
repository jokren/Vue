<template>
    <div class="wrap">
        <header>
            <h4 class="loginTitle">登录官网</h4>
        </header>
        <div class="loginWrap">
            <form class="loginForm">
                <ul>
                    <li class="username">
                        <div class="input">
                            <input id="username" type="text" name="username" required placeholder="手机号/邮箱">

                        </div>
                    </li>
                    <li class="password">
                        <div class="input">
                            <input id="userpwd" type="password" name="password" required placeholder="密码">

                        </div>
                    </li>
                    <li class="remember">
                        <div class="autoWrap">
                            <label> <input type="checkbox" checked><span class="autoLogin">自动登录</span> </label>
                        </div>
                        <a href="#" class="aturn">忘记密码</a>
                        <a href="#/register" class="aturn">注册</a>

                    </li>
                </ul>
                <button class="toLogin" @click="login" type="button">登录</button>
                <div class="interTel">
                    <a href="#">国际手机号登录 ></a>
                </div>
                <div class="otherLogin">
                    <ul>
                        <li class="weibo"></li>
                        <li class="qq"></li>
                    </ul>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    import $ from "jquery";

    export default {
        data(){
            return {
                username : "",
                password : ""
            }
        },
        methods : {
            login(){
                var self = this;
                $.ajax({
                    type : "post",
                    url : "http://localhost:8888/login",
                    data : {
                        username : $("#username").val(),
                        password : $("#userpwd").val()
                    }
                }).then(function(res){
                    if(res == '1'){
                        var tel =$("#username").val()
                      window.sessionStorage.setItem('login', tel)
                        alert("登陆成功，立即跳转")
                        self.$router.replace({path : "/"})
                    } else {
                        alert("账号密码错误，请重新的输入")
                    }
                })
                return false;
            }
        }
    }
</script>

<style scoped>
    /*  body{
          width:100%;
          height:100%;
          background-image:url(../hammer-img/loginImage/bg.jpg);
          background-size:100% 100%;
      }*/
    .wrap{
        min-width:inherit;
        height:100%;
        width:100%;
    }
    .loginTitle{
        text-indent:inherit;
        position:static;
        color:#fff;
        font-size:.2rem;
        width:100%;
        height:.56rem;
        line-height:.56rem;
        font-weight:400;
        bottom:0;
        /*width: 100%;*/
        text-align:center;
        border-bottom:0;
        box-shadow:none;
        background:#1d1d1d;
    }
    .loginWrap{
        margin:.14rem .12rem 0;
        padding:0;
    }
    .loginForm{
        margin:0;
        padding:0;
        border:0;
        font-size:.16rem;
        vertical-align:baseline;
    }
    .loginForm ul > li{
        margin:0 0 12px;
        overflow:hidden;
    }
    .username{
        border-radius:.06rem .06rem 0 0;
        margin-bottom:0 !important;
        background-color:#fff;
        border:1px solid #d1d1d1;
        border-bottom:none;
        box-shadow:0 3px 5px -4px rgba(0, 0, 0, .4) inset, -1px 0 3px -2px rgba(0, 0, 0, .1) inset;
        /*overflow: hidden;*/
    }
    .password{
        background-color:#fff;
        border:1px solid #d1d1d1;
        border-top:none;
        border-radius:0 0 .06rem .06rem;
        box-shadow:0 3px 5px -4px rgba(0, 0, 0, .4) inset, -1px 0 3px -2px rgba(0, 0, 0, .1) inset;
        /*overflow: hidden;*/
    }
    .input{
        width:3.49rem;
        border-top:0;
        height:.44rem;
        position:relative;
        overflow:hidden;
    }
    .input input{
        padding:0 .1rem;
        /*height:.44rem;*/
        border:none;
        outline:none;
        box-sizing:border-box;
        background:0 0;
        font-size:.14rem;
        height:100%;
        width:100%;
        position:absolute;
        top:0;
        left:0;
        cursor:text;
    }
    .remember{
        margin:.14rem .12rem .2rem;
        height:.14rem;
        overflow:visible;
        line-height:.14rem;
        font-size:.14rem;
    }
    .autoLogin{
        margin-left:.05rem;
    }
    .autoWrap{
        display:inline-block;
        margin-left:.1rem;
    }
    .aturn{
        float:right;
        text-decoration:none;
        color:#7f7f7f;
        font-size:.14rem;
        margin:0 .1rem;
        cursor:pointer;
    }
    .toLogin{
        width:100%;
        height:.53rem;
        line-height:.53rem;
        text-align:center;
        background:linear-gradient(#6788d0, #4364bb);
        padding:1px;
        box-sizing:border-box;
        border-radius:.06rem;
        /*cursor: pointer;*/
        display:inline-block;
        overflow:hidden;
        border:none;
        color:#ffffff;
        box-shadow:0 1px 1px -1px rgba(0, 0, 0, .8);
        margin-top:.24rem;
    }
    .interTel{
        margin-top:.14rem;
        padding-top:0;
    }
    .interTel a{
        float:right;
        text-decoration:none;
        color:#7f7f7f;
        font-size:.14rem;
        margin-right:.15rem;
    }
    .otherLogin{
        position:fixed;
        margin:0 auto;
        width:1.24rem;
        margin-right:-.62rem;
        right:50%;
        bottom:.24rem;
    }
    .otherLogin ul li{
        float:left;
        width:.42rem;
        height:.4rem;
        margin:0 .10rem !important;
        color:#999;
        font-size:12px;
        line-height:17px;
        background-size:auto .4rem;
    }
    .weibo{
        background-image:url("../hammer-img/loginImage/otherLogin.png");
        background-position:-.59rem 0;
    }
    .qq{
        background-image:url("../hammer-img/loginImage/otherLogin.png");
        background-position:-1.19rem 0;
    }
</style>
