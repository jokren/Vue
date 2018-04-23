var oall = document.getElementById('con-lunbo2')
var oul = oall.children[0].children[0]
var ool = oall.children[0].children[1]
//先克隆
var width=oul.children[0].offsetWidth
console.log(width);

//创建动态轮播函数
var imgIndex = 0
var dianindex = 0

function autoplay(){
	imgIndex++
	if(imgIndex > 2){
		imgIndex = 1  //为1时 从5跳到1不会卡顿  ,如果设为0就会出现1秒的卡顿
		oul.style.left = "0px"
	}
	animate(oul, -width * imgIndex)
	//点的背景颜色跟着轮播
	
}

//开始播放
var timer = setInterval(function(){
	autoplay()
}, 3000)
//移上去暂停
oall.onmouseenter = function(){
	clearInterval(timer)
}
//鼠标离开时又继续播
oall.onmouseleave = function(){
	timer = setInterval(function(){
		autoplay()
	}, 3000)
}

function animate(obj,target){
    clearInterval(obj.timer)
    var teps=obj.offsetLeft>target?-10:10
    obj.timer=setInterval(function(){
      obj.style.left=obj.offsetLeft+teps+"px"
        if(Math.abs(obj.offsetLeft-target)<=Math.abs(teps)){
            clearInterval(obj.timer)
            obj.style.left=target+"px"
        }
    },0)
}
