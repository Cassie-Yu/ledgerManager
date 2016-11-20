$(function(){
    vali.password();//重置密码模态框内部表单验证
    vali.addPages();//台账添加页面内部input验证
});

var vali = new Object();

vali.password = function(){
    $("#reset-password").validate({
        errorClass:"input-msg",
        errorPlacement:function(error,element) {  
            var errortxt=error.text();
            element.parent().next().children(".input-msg").html(errortxt).css("color","#e22");
            if(val.isNull(errortxt)){
              element.css("border","1px solid #bbb");
            }else{
              element.css("border","1px solid #e22");
            }
            if($.trim($(element).val())==""){
                element.parent().next().children(".input-msg").html("");
                element.css({"border":"1px solid #bbb","color":"#000"});                       
            }
        },        
        success:function(label){
            label.text('');
        },
        rules:{
           oldPassword:{
                required:true,
                minlength:6,
                maxlength:20
                     },
           newPassword:{
                required:true,
                minlength:6,
                maxlength:20
            },
            confirmPassword:{
                equalTo:"#newPassword",
            },
        },//rule
        messages:{
               oldPassword:{
                required:"请输入之前的密码",
                minlength:"长度只能在6-20个字符之间",
                maxlength:"长度只能在6-20个字符之间"
                     },
                newPassword:{
                    required:"请输入密码",
                    minlength:"长度只能在6-20个字符之间",
                    maxlength:"长度只能在6-20个字符之间"
                },
                confirmPassword:{
                    equalTo:"两次密码输入不一致",
                },
        }//message
    });
}



var val=new Object();

val.isNull=function(str){
    return str == '' || str == undefined || str == NaN ? true : false;
}

// 是否是数字
val.isNumber = function(str) {
	var reg = new RegExp("^[0-9]+([.]{1}[0-9]+){0,1}$");
	return reg.test(str);
}

//是否是整数
val.isInteger = function(str) {
	var reg = new RegExp("^[0-9]*$");
	return reg.test(str);
}

vali.addPages = function(){
    $(document).on('blur','.isInteger',function(){
        var content = $(this).val();
        if(!val.isInteger(content)){
            $(this).css('color','#f00');
        }else{
            $(this).css('color','#000');
        }
    })
    $(document).on('blur','.isNum',function(){
        var content = $(this).val();
        if(!val.isNumber(content)){
            $(this).css('color','#f00');
        }else{
            $(this).css('color','#000');
        }
    })
}