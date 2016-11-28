$(function(){
//    ledgerAdd.submit();//点击提交按钮时出现的错误提示
    ledgerAdd.purchasingUnit();//table的添加与删除
    ledgerAdd.countMeg();//页面中关于计算相关的js
//    ledgerAdd.sub();//文件上传js
})

var ledgerAdd = new Object();
//点击提交按钮时出现的错误提示
ledgerAdd.submit = function(){
    $(document).on("click","[data-target='#tijiao']",function(){        
        var inputVal=$("[data-target='input']");        
        for(var i=0;i<inputVal.length;i++){
            //判断是否为select
            if($(inputVal[i]).is("select")){
            //获取select里的值
                var eVal = $(inputVal[i]).children('option:selected').text();                
                if(eVal==""){                    
                   $(inputVal[i]).next().css("display","inline-block");                   
                   $(inputVal[i]).css("border"," 1px solid red");                    
                }else{                    
                   $(inputVal[i]).next().css("display","none");                    
                   $(inputVal[i]).css("border"," 1px solid #ccc"); 
                }
            //判断为input的情况
            }else if($(inputVal[i]).is("input")){                 
               if($.trim($(inputVal[i]).val())==""){                
                $(inputVal[i]).next().css("display","inline-block");
                $(inputVal[i]).css("border"," 1px solid red");                
            }else{                 
                 $(inputVal[i]).next().css("display","none");                
                 $(inputVal[i]).css("border"," 1px solid #ccc");                
              }
            }
        }
        $(document).on('change','input,select',function(){
            var inputVal=$("[data-target='input']");               
            for(var i=0;i<inputVal.length;i++){
                //判断是否为select
                if($(inputVal[i]).is("select")){
                //获取select里的值
                    var eVal = $(inputVal[i]).children('option:selected').text();                
                    if(eVal==""){                    
                       $(inputVal[i]).next().css("display","inline-block");                   
                       $(inputVal[i]).css("border"," 1px solid red");                    
                    }else{                    
                       $(inputVal[i]).next().css("display","none");                    
                       $(inputVal[i]).css("border"," 1px solid #ccc"); 
                    }
                //判断为input的情况
                }else if($(inputVal[i]).is("input")){                 
                   if($.trim($(inputVal[i]).val())==""){                
                    $(inputVal[i]).next().css("display","inline-block");
                    $(inputVal[i]).css("border"," 1px solid red");                
                }else{                 
                     $(inputVal[i]).next().css("display","none");                
                     $(inputVal[i]).css("border"," 1px solid #ccc");                
                  }
                }
            }
        });
    });
}

ledgerAdd.purchasingUnit = function(){
    //采购单位table的添加与删除
    $(document).on("click","#addTr",function(){
       //动态的添加单元格
        $("#addTab").append("<tr class='buyMsg'></tr>");
        $(".buyMsg:last").append("<td><input type='text' readonly></td>");
        $(".buyMsg:last").append("<td><input type='text'value='' ></td>");
        $(".buyMsg:last").append("<td><input type='text' value=''></td>");
        $(".buyMsg:last").append("<td><input type='text' value='' class='num isInteger'></td>");
        $(".buyMsg:last").append("<td><input type='text' value=''></td>");
        $(".buyMsg:last").append("<td><input type='text' value='' class='price isNum'></td>");
        $(".buyMsg:last").append("<td><input type='text' value='' readonly></td>");
        $(".buyMsg:last").append("<td><a class='del'>删除</a></td>");
        for(var n=0;n<$('.buyMsg').length;n++){
            $('.buyMsg').eq(n).children('td:eq(0)').children('input').val(n+1);
        }
    });
    //当输入错误的时候，点击删除按钮，删除当前行
    $(document).on('click','.del',function(){        
        $(this).parent().parent().remove();
        for(var n=0;n<$('.buyMsg').length;n++){
            $('.buyMsg').eq(n).children('td:eq(0)').children('input').val(n+1);
        }
//        console.log($('.buyMsg').size());
    });
    //付款信息table的添加与删除
    $(document).on('click','#addTrTwo',function(){
        $("#addTabTwo").append('<tr class="tr_item actualTr"></tr>');
        $(".actualTr:last").append('<td><select name="actualfukuanContent" class="actualfukuanContent"><option value=""></option><option value="">预付款</option><option value="">到货款</option><option value="">账期款</option><option value="">质保金</option></select></td>');
        $(".actualTr:last").append('<td><input type="text" value="" class="order"></td>');
        $(".actualTr:last").append('<td><input type="text" value="" class="form_datetime" readonly></td>');
        $(".actualTr:last").append('<td><input type="text" value="" class="trueMon"></td>');
        $(".actualTr:last").append('<td><select name="actualfukuanMethod" class="actualfukuanMethod">      <option value=""></option><option value="">电汇</option><option value="">承兑</option><option value="">电汇和承兑</option></select></td>');
        $(".actualTr:last").append('<td><input type="text" value="" class="remark"></td>');
        $(".actualTr:last").append('<td><span class="payed">确认</span><span class="yizhifu">已支付</span><span class="del">删除</span></td>');
        $('.form_datetime').datepicker({
            format: "yyyy-mm-dd",
            language: 'zh-CN',
            weekStart: 7, //一周从那一天开始
            todayBtn: 0,
            autoclose: 1,
            todayHighlight: 1,
            startView: 'month',
            minView: 2,
            forceParse: 0,
        });
    })
}

//页面中关于计算相关的js
ledgerAdd.countMeg = function(){
    //输入百分比跳出预付款金额
    $(document).on("click", "[data-show='add']",function(){
        $(document).on('keyup','.percent',function(){
            if(!$(this).val()==''){
                var Mon = parseFloat(parseFloat($('.allMon').val()).toFixed(2)*parseFloat($(this).val())/100).toFixed(2);
                $(this).parents('.tr_item').children('td:eq(3)').children('.preMon').val(Mon);
            }else{
                $(this).parents('.tr_item').children('td:eq(3)').children('.preMon').val('');
            }                
        })
    })
    //点击付款按钮，按钮替换为已付款
    $(document).on("click",".payed",function(e){
        $(this).css("display","none").siblings().css("display","inline-block");
        $(this).siblings('.del').remove();
    });
    //采购相关信息中关于数量和单价的计算
    $(document).on('keyup','.price',function(){
        var Num = $(this).parents('.buyMsg').children('td:eq(3)').children('input').val();
        console.log(Num);
        var Price = $(this).val();
        if(Num==''||Price==''||!val.isInteger(Num)||!val.isNumber(Price)){
            $(this).parents('td').next('td').children('input').val('');
        }else{
            $(this).parents('td').next('td').children('input').val(parseFloat(Num).toFixed(2)*parseFloat(Price).toFixed(2));            
        }      
    })
    $(document).on('keyup','.num',function(){
        var Price = $(this).parents('.buyMsg').children('td:eq(5)').children('input').val();
        var Num = $(this).val();
        if(Num==''||Price==''||!val.isInteger(Num)||!val.isNumber(Price)){
            $(this).parents('.buyMsg').children('td:eq(6)').children('input').val('');
        }else{
            $(this).parents('.buyMsg').children('td:eq(6)').children('input').val(parseFloat(Num).toFixed(2)*parseFloat(Price).toFixed(2));            
        }      
    })
}