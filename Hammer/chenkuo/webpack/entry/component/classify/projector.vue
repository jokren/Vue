<template>
    <div id="projector">
        <div class="phone">
            <p id="p1">投影仪</p>
        </div>
        <a href="#/product" @click="gettype">
            <div class="phone" id="img1">
                <img src="../../hammer-img/7.png" alt="" style="width:100%">
            </div>
        </a>
        <div id="bod"></div>

    </div>


</template>


<script>
    export default {
        data(){
            return {
                type : "投影仪",
            }
        },
        methods : {
            gettype(){
                this.$store.state.type = this.type
                //                console.log(this.$store.state.type);
            },
        }
    }
</script>


<style scoped>
    #projector{
        margin-bottom:0.53rem;
    }
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
        border-bottom:1px solid #eaeaea;
        background:linear-gradient(#ffffff, #f7f7f7);
    }
    #bod{
        height:0.14rem;
        background:linear-gradient(#f7f7f7, #efefef);
    }

</style>