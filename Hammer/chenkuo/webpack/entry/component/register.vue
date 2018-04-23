<template>
    <div class="wrap">
        <header id="header">
            <h4 class="regTitle">注册 Smartisan ID</h4>
        </header>
        <div class="bg">
        <div class="regWrap">
            <form class="regForm">
                <ul>
                    <li class="telphone">
                        <div class="input">
                            <input id="usertel" type="text" name="usertel" required placeholder="手机号">
                        </div>
                    </li>
                    <li class="email">
                        <div class="input">
                            <input id="useremail" type="email" name="useremail" required placeholder="邮箱">
                        </div>
                    </li>
                    <li class="password">
                        <div class="input">
                            <input id="userpwd" type="password" name="userpwd" required placeholder="密码">
                        </div>
                    </li>
                </ul>
                <div class="btn-wrapper">
                    <p class="agree">
                        <label> <input type="checkbox" checked> <span>
                                我已同意并同意遵守
                            <a href="#">法律声明</a>
                            和
                            <a href="#">隐私条款</a>
                            </span> </label>
                    </p>
                    <button class="regBtn" @click="register" type="button">注册</button>
                    <p class="tologin">
                        <a href="#/login">如果您已拥有 Smartisan ID, 则可在此<span>登录</span></a>
                    </p>
                </div>

            </form>
        </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";

    export default {
        data(){
            return {
                telphone : "",
                password : "",
                email : ""
            }
        },
        methods : {
            register(){
                var self = this;
                $.ajax({
                    type : "post",
                    url : "http://localhost:8888/register",
                    data : {
                        telphone : $("#usertel").val(),
                        password : $("#userpwd").val(),
                        email : $("#useremail").val()
                    }
                }).done(function(res){
                    // window.location.href = "login.html"
                    if(res == '1'){
                        alert("注册成功，立即登录")
                        self.$router.replace({path : "login"})
                    } else {
                        alert("手机号已存在，请重新输入")
                    }
                })
                //  return false;
            }
        }
    }
</script>

<style scoped>
    #header{
        position:fixed;
        top:0px;
        width:100%;
        left:0px;
    }
    .wrap{
        min-width:inherit;
        height:100%;

    }
  /*  body{
        width:100%;
        height:100%;
        background-image:url(../hammer-img/loginImage/bg.jpg);
        background-size:100% 100%;
    }*/
    .regTitle{
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
    .regWrap{
        margin:.14rem .12rem 0;
        padding:0;
        /*height:100%;*/
        padding-top:0.56rem;

    }
    .input{
        width:3.49rem;
        border-top:0;
        height:.44rem;
        position:relative;
        overflow:hidden;
    }
    .regForm li{
        border-radius:.06rem;
        margin-bottom:0 !important;
        background-color:#fff;
        border:1px solid #d1d1d1;
        border-bottom:none;
        box-shadow:0 3px 5px -4px rgba(0, 0, 0, .4) inset, -1px 0 3px -2px rgba(0, 0, 0, .1) inset;
        margin-top:.12rem;
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
        color:#b2b2b2;
    }
    .btn-wrapper{
        clear:both;
        overflow:hidden;
    }
    .regBtn{
        width:100%;
        height:.53rem;
        line-height:.53rem;
        text-align:center;
        background:linear-gradient(#6788d0, #4364bb);
        padding:1px;
        box-sizing:border-box;
        border-radius:.06rem;
        display:block;
        overflow:hidden;
        border:none;
        color:#ffffff;
        box-shadow:0 1px 1px -1px rgba(0, 0, 0, .8);
    }
    .agree{
        margin:.1rem 0 .2rem;
        padding:0 .11rem;
        font-size:.14rem;
        overflow:hidden;
        color:#7f7f7f;
        line-height:.18rem;
    }
    .agree a{
        text-decoration:none;
    }
    .tologin{
        margin:.35rem 0 0;
        padding-bottom:.2rem;
        color:#7f7f7f;
        font-size:.14rem;
        line-height:.18rem;
        text-align:center;
        color:#7f7f7f;
    }
    .tologin span{
        background:0 0;
        color:#5079d9;
        margin:0;
        padding:0 .04rem;
        border-radius:0;
        font-weight:400;
    }
</style>