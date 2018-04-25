$(document).ready(function(){
	//捕获
	$("#btn1").click(function(){
		alert("text:"+$("#text").text());//获取元素内容，只能获取标签内的内容
	})
    $("#btn2").click(function(){
    	alert("text:"+$("#text").html());//获取全部内容
    })
    $("#btn3").click(function(){
    	alert("text:"+$("#it").val());//获取属性value的值
    })
    $("#btn4").click(function(){
    	alert("text:"+$("#aid").attr("id"));//获得指定属性值
    })
    //删除元素
    $("#btn5").click(function(){
    	$("#div").remove();//全部删除，包括那个div区域
    	$("#div").empty();//只删除div中的子元素
    })
    //添加元素
    /*append();
    prepend();
    before();
    after();*/
      //在某个标签里面添加内容
    $("#btn6").click(function(){
    	$("#p1").append("this is my webpage add content之后");//添加在前面，不换行
    	$("#p1").prepend("this is my webpage add content之前");//添加在后面，不换行
    })
    $("#btn7").click(function(){
    	$("#p2").before("你好");//换行添加在前面
    	$("#p2").after("你好");//换行添加在后面
    })
      //动态添加标签和内容
    $("#btn8").click(function appendText(){
	/*html、jQuery、DOM*/
	var text1 = "<p>iwem</p>";
	var text2 = $("<p></p>").text("ime");
	var text3 = document.createElement("p");
    text3.innerHTML = "acely";
    $("body").append(text1,text2,text3);
    })
    //设置
    $("#btn9").click(function(){
    	$("#p3").text("哈哈哈");//修改标签内容(只能单纯修改内容)
    })
    $("#btn10").click(function(){
    	$("#p4").html("<a href=''>啦啦啦</a>");//修改标签内容(换成标签)	
    })
    $("#btn11").click(function(){
    	$("#txt1").val("修改之后");//修改文本框内容
    })
    $("#btn12").click(function(){
    	$("#aid1").attr({
    		"href":"http://jikexueyuan.com",
    		"title":"现在是极客学院"
    	});//修改指定标签内容
    })
    //回调函数
    $("#btn13").click(function(){
    	$("#p5").text(function(i,ot){
    		return "old:"+ot+"new:这是新的内容"+(i);
    	})
    })
})

