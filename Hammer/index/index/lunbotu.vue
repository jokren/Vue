<template>
    <div class="all" id='all'>
        <div class="screen">
            <ul id="ul">
                <li><img src="https://resource.smartisan.com/resource/93cef0dad066879ec1e8a1c28545ea95.png"/></li>
                <li><img src="https://resource.smartisan.com/resource/w/white25wap.png"/></li>
                <li><img src="https://resource.smartisan.com/resource/93cef0dad066879ec1e8a1c28545ea95.png"/></li>
            </ul>
            <ol>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ol>
        </div>
    </div>
</template>

<script>
	export default {
		mounted() {
			require("./fzh")()
		}
	}
</script>

<style scoped>
    .all {
        height: 7rem;
        width: calc(100% - 1.2rem);
        margin: 3.7rem .6rem .9rem;
        border-radius: .4rem;
        position: relative;
    }

    .screen {
        height: 7rem;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .screen ul li {
        height: 100%;
        width: 100%;
        overflow: hidden;
        float: left;
        /*position:absolute;*/
    }

    .screen ul {
        position: absolute;
        left: 0;
        top: 0px;
        height: 100%;
        width: 300%;
        display: flex;
        background: #fff;
        overflow: hidden;

    }

    .screen ul li img {
        flex: 1;
        width: 100%;
        height: 100%;
        border-radius: .4rem;
    }
  ol{
      position: absolute;
      bottom:10%;
      left:40%;
  }
    ol li {
        display: inline-block;
        height: 6px;
        width: 6px;
        margin: 0 3px;
        border-radius: 50%;
        background: #ebebeb;

    }
    .current{
        background:red;
    }
</style>