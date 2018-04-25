$(document).ready(function(){
   //第一种设置方式
   /*$("div").css("width","100px");
   $("div").css("height","100px");
   $("div").css("background-color","red");*/

   //第二种设置方式
   /*$("div").css({
       width:"100px",
       height:"100px",
       backgroundColor:"yellow"
   });*/

   //第三种设置方式
   $("#div1").addClass("style");//使用外联样式表
   $("#div1").click(function(){
   	//$(this).addClass("style1");//实现点击之后更换样式表
   	//$(this).removeClass("style");//实现点击之后移除样式表
    $(this).toggleClass("style1");//实现点击之后来回切换样式表
   });

   //盒子模型
   alert($("#div2").height());//height()表示div本身的大小
   alert($("#div2").innerHeight());//innerHeight()表示div本事加上内边距(padding)
   alert($("#div2").outerHeight());//outerHeight()表示本身+内边距+边框
   alert($("#div2").outerHeight(true));//有true输出整个的高度
});