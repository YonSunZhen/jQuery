$(document).ready(function(){
	//向下遍历
	/*$("#div1").children().css({
		border:"3px solid black"
	});//1、只能遍历直接子类(参数可选)
	$("#div1").find("p").css({
		border:"3px solid black"
	});//2、用于找到指定的子元素(参数必选)*/

	//向上遍历
    /*$("a").parent().css({
    border:"3px solid purple"
    });//1、只能遍历直接父类(一层遍历)
    /$("a").parents().css({
     	border:"3px solid purple"
    });//2、向上遍历所有父类
    $("a").parentsUntil("#div1").css({
    	border:"3px solid purple"//3、a元素到div1之间的元素都改变，不包括两端
    });*/

    //同级遍历
    $("h2").siblings().css({
    	border:"3px solid #FF0000"
    });//除去自身,同级元素全部修改
    $("h2").next().css({
    	border:"3px solid black"
    });//只能改变h2的直接下一个元素修改(prev()相反)
    $("h2").nextAll().css({
    	border:"3px solid purple"
    });//下面的全部元素修改(preAll()相反)
    $("h2").nextUntil("h4").css({
    	border:"3px solid red"
    });//下面元素区间修改(preUntil()相反)

    //过滤
    $(".div3 p").first().css("background-color","red");//第一个改变
    $(".div3 p").last().css("background-color","red");//最后一个改变
    $(".div3 p").eq(1).css("background-color","red");//指定位置改变(从0开始算)
    $(".div3 p").filter(".pclass").css("background-color","red");//与pclass类对应的改变
    $(".div3 p").not(".pclass").css("background-color","red");//与filter()相反
});