$(document).ready(function(){
	//标签切换
	$("#tabfirst li").each(function(index){
		var liNode = $(this);
		$(this).mouseover(function(){
			timeoutid=setTimeout(function(){
				$("div.content").removeClass("content");
		        $("#tabfirst li.tabin").removeClass("tabin");
		        $("div").eq(index).addClass("content");
		        liNode.addClass("tabin");
			},300);//setTimeout()设置延迟时间
		}).mouseout(function(){
			clearTimeout(timeoutid);
		})
	});//使用添加与移除样式的方式实现

	//标签切换数据加载
	$("#realcontent").load("test.html");//必须加载到服务器上
	$("#tabsecond li").each(function(index){
		$(this).click(function(){
			$("#tabsecond li.tabin").removeClass("tabin");
			$(this).addClass("tabin");
		})
	})
});