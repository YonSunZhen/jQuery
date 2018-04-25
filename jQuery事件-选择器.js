$(document).ready(function(){
	//alert("文档加载完毕");

	/*$("p").click(function(){
		$(this).hide();
	})*/

	$("button").click(function(){
		$(".p1").text("p元素被修改了");
		$("#p2").text("p元素被修改了");
		$("p").text("p元素被修改了");
	})//JQuery选择器

    /*//$("button").click(function(){ //单击事件
    //$("button").dblclick(function(){ //双击事件
    //$("button").mouseenter(function(){ //鼠标移到上面事件
    $("button").mouseleave(function(){ //鼠标移开事件
    	$(this).hide();    
    });*/

    /*$("#clickMeBtn").click(function(){
    	alert("hello");
    })*/
    $("#clickMeBtn").bind("click",clickHandler1);
    $("#clickMeBtn").bind("click",clickHandler2);//绑定事件
    $("#clickMeBtn").unbind("click",clickHandler2);//解除绑定事件

    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler);

    $("#ClickMeBtn").click(function(){ //实现点击之后创建自定义事件
    	var e = jQuery.Event("MyEvent");//自定义事件MyEvent
    	$("#ClickMeBtn").trigger(e);
    })
    $("#ClickMeBtn").bind("MyEvent",function(event){
    	console.log(event);
    })
});


function clickHandler1(e){
	console.log("clickHandler1");
}
function clickHandler2(e){
	console.log("clickHandler1");
}

function bodyHandler(event){
	console.log("body");
	event.stopImmediatePropagation();
}
function divHandler(event){
	console.log("div");
	event.stopPropagation();//阻止父级事件
	event.stopImmediatePropagation();//阻止除本身之外的所有事件(对于同个div来说)
}