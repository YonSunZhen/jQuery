//额外扩展的库(自定义)

/*$.myjq = function(){
	alert("hello myjQuery");
}*/

$.fn.myjq = function(){
	$(this).text("Hello");
}
