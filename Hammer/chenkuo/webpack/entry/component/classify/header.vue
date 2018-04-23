<template>

    <div id="header">
        <div id="head-top"></div>
        <div id="head-m"></div>

        <div id="main" class="phone">
            <p>
                <i class="iconfont icon-caidan"></i> <span>分类</span>
            </p>
        </div>

    </div>


</template>

<script>

</script>

<style scoped>
    #header{
        width:100%;
        position:fixed;
        top: 0px;
        border-bottom:1px solid #e7e7e7;
    }
    #head-top{
        height:0.02rem;
        background:#000;
    }
    .phone{
        padding:0 0.13rem;
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
    #main>p{
        font-weight:700;
    }
    #main i{
        color:#e2e2e2;
        font-size:0.24rem;
        margin-left:0.1rem;
    }
    #main span{
        font-size:0.18rem;
        display:inline-block;
        width:2.55rem;
        color:#fff;
        text-align:center;
        line-height:0.46rem;
        margin-left:0.1rem;
    }

</style>