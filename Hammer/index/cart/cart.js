module.exports = function () {
	//计算金额
	console.log(111);
	$(".btn-disabled").addClass("buy")
	$(".con-four ul li").addClass("list")
// 数量统一
	for (var i = 0; i < $(".con-four ul li").length; i++) {
		var parent=$(".con-four ul li").eq(i)
		parent.find(".sum a").text(parent.find(".redact input").val())
	}
	count()
	function count() {
		var allpic = 0, allsum = 0;
		for (var i = 0; i < $(".list").length; i++) {
			allsum = allsum + parseInt($(".list").eq(i).find(".sum a").text())
			allpic = allpic + parseInt($(".list").eq(i).find(".sum a").text()) * parseFloat($(".list").eq(i).find(".price").text())
		}
		$(".allsum").text(allsum)
		$(".allpic").text(allpic + ".00")
	}
// $(".m-blue-checkbox-new").addClass("gou")
	$(".checkbox-on").on("click",function () {
		if($(this).hasClass("gou")){//未选中时点击,切换成选中打勾,加入计算
			$(this).removeClass("gou")
			$(this).parents("li").addClass("list")
			count()
		}else {//选中时点击,切换成未选中状态,取消计算
			$(this).addClass("gou")
			$(this).parents("li").removeClass("list")
			count()
		}
		panduan()
	})
	$(".gou2").on("click",function () {
		if($(this).hasClass("gou")){//未选中时点击,切换成选中打勾,加入计算  全选
			$(this).removeClass("gou")
			$(".checkbox-on").removeClass("gou")
			$(".con-four ul li").addClass("list")
			$(".btn-disabled").addClass("buy")
			count()
		}else {//选中时点击,切换成未选中状态,取消计算  取消全选
			$(this).addClass("gou")
			$(".checkbox-on").addClass("gou")
			$(".con-four ul li").removeClass("list")
			$(".btn-disabled").removeClass("buy")
			count()
		}
	})
	function panduan() {
		var panduan=0
		for (var i = 0; i <$(".checkbox-on") .length; i++) {
			if(!$(".checkbox-on").eq(i).hasClass("gou")){
				panduan++
			}
		}
		if(panduan==$(".checkbox-on") .length){
			$(".gou2").removeClass("gou")
			$(".btn-disabled").addClass("buy")
		}else if(panduan==0){
			$(".gou2").addClass("gou")
			$(".btn-disabled").removeClass("buy")
		}else {
			$(".gou2").addClass("gou")
			$(".btn-disabled").addClass("buy")
		}
	}
}





