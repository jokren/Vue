<template>
    <div id="classify">

        <xheader />
        <xmobilephone />
        <xairclear />
        <xshell />
        <xcharge />
        <xheadset />
        <xclothing />
        <xstationery />
        <xbrand />
        <xbooks />
        <xprojector />
        <xfooter />


    </div>


</template>


<script>
    import xheader from "./classify/header.vue";
    import xmobilephone from "./classify/mobilephone.vue";
    import xairclear from "./classify/airclear.vue";
    import xshell from "./classify/shell.vue";
    import xcharge from "./classify/charge.vue";
    import xheadset from "./classify/headset.vue";
    import xclothing from "./classify/clothing.vue";
    import xbrand from "./classify/brand.vue";
    import xbooks from "./classify/books.vue";
    import xstationery from "./classify/stationery.vue";
    import xprojector from "./classify/projector.vue";
    import xfooter from "./classify/footer.vue";


    export default {
        //注册组件
        components : {
            xmobilephone,
            xairclear,
            xshell,
            xcharge,
            xheadset,
            xclothing,
            xbrand,
            xbooks,
            xstationery,
            xprojector,
            xfooter,
            xheader
        }
    }
</script>

<style scoped>

</style>