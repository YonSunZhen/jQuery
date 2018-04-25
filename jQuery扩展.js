var myjq = $.noConflict();//将美元符号取消掉,换成myjq
//调用自定义库里面的方法
myjq(document).ready(function(){
	//$.myjq();
	//myjq("div").myjq();

	myjq("#btn").on("click",function(){
		myjq ("div").text("new Hello");
	});
});
