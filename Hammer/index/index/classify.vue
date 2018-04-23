<template>
   <div>
       <xheader></xheader>
       <div class="con">
       <div _ngcontent-c19="" class="title-header box-line"> <div _ngcontent-c19="" class="title-wrapper"> <h2 _ngcontent-c19="">{{title}}</h2> </div> </div>
           <ul _ngcontent-c12="" class="box-products-items">
               <li _ngcontent-c23="" class="vertical-item box-line" v-for="k in list">
                <a @click="session" href="#"><img _ngcontent-c23="" class="box-item-img" :src="k.img" style="opacity: 1; transition: opacity 0.3s ease-in-out;"></a>
                <div _ngcontent-c23="" class="box-item-content">
                <h5 _ngcontent-c23="" v-text="k.name"></h5>
                <p _ngcontent-c23="" class="jieshao" v-text="k.des"></p> <!---->
                <div _ngcontent-c23="" class="attr-container"> <!----><ul _ngcontent-c23="" class="style-label"> <!----><li _ngcontent-c23="" class="box-border"> <span _ngcontent-c23="">4G + 32GB</span> </li><li _ngcontent-c23="" class="box-border"> <span _ngcontent-c23="">4G + 64GB</span> </li><li _ngcontent-c23="" class="box-border"> <span _ngcontent-c23="">6G + 64GB</span> </li><li _ngcontent-c23="" class="box-border"> <span _ngcontent-c23="">6G + 128GB</span> </li><li _ngcontent-c23="" class="box-border"> <span _ngcontent-c23="">6G + 256GB</span> </li> </ul> <!----> <!----> <!----><ul _ngcontent-c23="" class="color-switch"> <!----><li _ngcontent-c23=""> <div _ngcontent-c23="" class="outer"> <span _ngcontent-c23="" style="background-image: url(&quot;https://resource.smartisan.com/resource/attr/v2/1000351/6CF45CDABAF3B549B82C10A50BDBEF39/origin.png&quot;); background-repeat: no-repeat; background-position: center center; background-size: contain;"></span> </div> </li><li _ngcontent-c23=""> <div _ngcontent-c23="" class="outer"> <span _ngcontent-c23="" style="background-image: url(&quot;https://resource.smartisan.com/resource/attr/v2/1000351/97BBF007C06CF961411BC376A98C586D/origin.png&quot;); background-repeat: no-repeat; background-position: center center; background-size: contain;"></span> </div> </li><li _ngcontent-c23=""> <div _ngcontent-c23="" class="outer"> <span _ngcontent-c23="" style="background-image: url(&quot;https://resource.smartisan.com/resource/attr/v2/1000351/6835AD084B4CE188877FFAFA10339944/origin.png&quot;); background-repeat: no-repeat; background-position: center center; background-size: contain;"></span> </div> </li><li _ngcontent-c23=""> <div _ngcontent-c23="" class="outer"> <span _ngcontent-c23="" style="background-image: url(&quot;https://resource.smartisan.com/resource/e647e77234f9ed0fde9dd4084d35ff57.jpg&quot;); background-repeat: no-repeat; background-position: center center; background-size: contain;"></span> </div> </li> </ul> </div> <div _ngcontent-c23="" class="price-container"> <p _ngcontent-c22="" class="price"> <i _ngcontent-c22="">¥</i> <span _ngcontent-c22="" class="pie" v-text="k.pie"></span> <!----> </p>  </div> </div> </li>
           </ul>
       </div>
   </div>

</template>


<script>
	import xheader from "./header.vue"
	export default {
		data(){
			return {
				list:{},
			}
		},
		components:{
			xheader
		},
		computed: {
		title() {
		return this.$store.state.title
		}
		},
		methods:{
			session:function (eve) {
				var parent=$(eve.target).parents("li")
				var src=parent.find("img").attr("src")
				var name=parent.find("h5").text()
				var des=parent.find(".jieshao").text()
				var pie=parent.find(".pie").text()
				sessionStorage.setItem("index", JSON.stringify({src,name,des,pie}));
				console.log(src, name,des,pie);
			}
        },
		mounted() {
			var href=this
			$.ajax({
				url:"http://localhost:8888/list",
				type: "get",
                data:{
					list:this.$store.state.title
                }
			}).then((res) => {
				href.list=JSON.parse(res)
			})
		}
	}
</script>

<style scoped>
  .con{
      padding-top:50px;
  }
  .title-wrapper {
      position: relative;
      padding: 0 .6rem;
  }
   h2 {
      height: 2rem;
      line-height: 2rem;
      font-size: .75rem;
      font-weight: 700;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
   .box-products-items{
       padding-bottom: 55px;
   }
  .vertical-item[_ngcontent-c23] {
      display: -webkit-box;
      display: flex;
      padding: .6rem;
      position: relative;
      -webkit-box-align: center;
      align-items: center;
      border-top: solid 1px #e5efff;
  }
  .promotion-tag-container[_ngcontent-c23] {
      position: absolute;
      top: .6rem;
      left: .6rem;
      font-size: .4rem;
  }
  .box-item-img[_ngcontent-c23] {
      width: 6.05rem;
      height: 6.05rem;
      box-sizing: border-box;
      flex-shrink: 0;
      margin-right: 1.55rem;
  }
  .box-item-content[_ngcontent-c23] {
      position: relative;
      overflow: hidden;
  }
  .box-item-content[_ngcontent-c23] h5[_ngcontent-c23] {
      overflow: hidden;
      font-weight: 700;
      font-size: .6rem;
      color: #333;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .box-item-content[_ngcontent-c23] p[_ngcontent-c23] {
      color: #7f7f7f;
      font-size: .5rem;
      line-height: 1.2;
      /*overflow-x: hidden;*/
      margin: .3rem 0 .25rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      transform-origin: 0 50%;
  }
  .style-label {
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-flow: row wrap;
      margin: -.05rem -.1rem;
  }
  .style-label li {
      background: #e5efff;
      border-radius: .1rem;
      padding: 2px .3rem;
      margin: .05rem .1rem;
      color: #3965cc;
      font-size: .4rem;
      font-weight: 700;
      line-height: 1;
      border: solid 1px #94b3f7 ;
  }
  .box-border:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: -42.85714%;
      left: 0;
      right: -42.85714%;
      -webkit-transform: scale(.7);
      transform: scale(.7);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
  }
  .style-label li span {
      position: relative;
      display: block;
      line-height: 1;
      white-space: nowrap;
  }
  .color-switch[_ngcontent-c23] {
      font-size: 0;
      margin-top: .4rem;
  }
  .color-switch[_ngcontent-c23] li[_ngcontent-c23] {
      display: inline-block;
      margin-right: .3rem;
  }
  .color-switch[_ngcontent-c23] li[_ngcontent-c23] .outer[_ngcontent-c23] {
      width: 10px;
      height: 10px;
      border: 1px solid #ccc;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      vertical-align: middle;
      text-align: center;
  }
  .color-switch[_ngcontent-c23] li[_ngcontent-c23] span[_ngcontent-c23] {
      width: 6px;
      height: 6px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      display: inline-block;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: #c20428;
      background-size: 100%;
      background-origin: border-box;
      border: 1px solid rgba(0,0,0,.1);
      background-image: url(https://resource.smartisan.com/resource/attr/v2/1000351/6CF45CDABAF3B549B82C10A50BDBEF39/origin.png);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
  }
  .price-container[_ngcontent-c23] {
      margin-top: .4rem;
  }
  .price[_ngcontent-c22] {
      color: #d44d44;
      display: inline-block;
      white-space: nowrap;
      font-weight: 700;
  }
  .price[_ngcontent-c22] i[_ngcontent-c22] {
      font-style: normal;
      font-size: .5rem;
  }
  .price[_ngcontent-c22] > span[_ngcontent-c22] {
      font-size: .6rem;
  }
</style>