$(document).ready(function(){
	general_select_p();
	general_select_c(0);
	general_select_a(0);

	$("#sel_p").change(function(){
        var p_id = $(this).val();
        general_select_c(p_id);
        var c_id = $("#sel_c").val();
        general_select_a(c_id);
	});
	$("#sel_c").change(function(){
        var c_id = $(this).val();
        general_select_a(c_id);
	});
	
});
//采用数组的形式添加数据
var arr_p = [
	    {'id':0,'text':'请选择省'},
	    {'id':1,'text':'广东'},
	    {'id':2,'text':'湖南'}
	];
	var arr_c = [
	    {'id':0,'p_id':0,'text':'请先选择省'},
	    {'id':1,'p_id':1,'text':'广州'},
	    {'id':2,'p_id':1,'text':'佛山'},
	    {'id':3,'p_id':2,'text':'长沙'},
	    {'id':4,'p_id':2,'text':'永州'}
	];
	var arr_a = [
	    {'id':0,'c_id':0,'text':'请先选择市'},
	    {'id':1,'c_id':1,'text':'广州A区'},
	    {'id':2,'c_id':1,'text':'广州B区'},
	    {'id':3,'c_id':3,'text':'长沙A区'},
	    {'id':4,'c_id':3,'text':'长沙B区'},
	    {'id':5,'c_id':2,'text':'佛山A区'},
	    {'id':6,'c_id':2,'text':'佛山B区'},
	    {'id':7,'c_id':4,'text':'永州A区'},
	    {'id':8,'c_id':4,'text':'永州B区'},
	];
	//循环添加省数据
	function general_select_p(){
		var select = $("#sel_p");
		var len = arr_p.length;
		for(var i=0; i<len; i++){
			var option = '<option value="'+arr_p[i]['id']+'">'+arr_p[i]['text']+'</option>';
			select.append(option);
		}
	}
    //循环添加市数据
    function general_select_c(p_id){
    	var select = $("#sel_c");
    	select.empty();
    	var len = arr_c.length;
    	for(var i=0; i<len; i++){
    		if(arr_c[i]['p_id']==p_id){
    			var option = '<option value="'+arr_c[i]['id']+'">'+arr_c[i]['text']+'</option>';
    			select.append(option);
    		}
    	}
    }
    //循环添加区数据
    function general_select_a(c_id){
    	var select = $("#sel_a");
    	select.empty();
    	var len = arr_a.length;
    	for(var i=0; i<len; i++){
    		if(arr_a[i]['c_id']==c_id){
    			var option = '<option value="'+arr_a[i]['id']+'">'+arr_a[i]['text']+'</option>';
    			select.append(option);
    		}
    	}
    }