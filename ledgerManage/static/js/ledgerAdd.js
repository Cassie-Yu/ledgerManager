$(function(){
    ledgerAdd.submit();//点击提交按钮时出现的错误提示
    ledgerAdd.purchasingUnit();//采购单位table的添加与删除
    ledgerAdd.countMeg();//页面中关于计算相关的js
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
    });
}

//采购单位table的添加与删除
ledgerAdd.purchasingUnit = function(){
    $(document).on("click","#addTr",function(){
       //动态的添加单元格
        $("#addTab").append("<tr class='buyMsg'><td><input type='text' readonly> </td><td><input type='text'value='' > </td><td> <input type='text' value=''></td><td><input type='text' value='' class='num isInteger'></td><td><input type='text' value=''></td><td><input type='text' value='' class='price isNum'></td><td><input type='text' value='' readonly></td><td><a class='del' id='del'>删除</a></td></tr>");
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
    });
}

//页面中关于计算相关的js
ledgerAdd.countMeg = function(){
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
    
    var trueMon = 0;
    
    $(document).on("click",".payed",function(e){
         $(this).parents('.tr_item').children('td:eq(5)').children('.changeTime').addClass('form_datetime');
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
        $(this).css("display","none").siblings().css("display","inline-block");
        trueMon = parseFloat($(this).parents('.tr_item').children('td:eq(3)').children('.preMon').val()).toFixed(2);
        $(this).parents('.tr_item').children('td:eq(6)').children('.trueMon').val(trueMon);
        var overMon = parseFloat($('.overMon').val())+parseFloat(trueMon); 
        $('.overMon').val(overMon);
        var nonMon =parseInt(parseFloat($('.allMon').val())-parseFloat(overMon));
        $('.nonMon').val(nonMon);   
        $(document).on('keyup','.allMon',function(){
            var nonMon =parseInt(parseInt($('.allMon').val())-parseInt(overMon));
            $('.nonMon').val(nonMon);            
        })
        $(this).parents('.tr_item').children('td:eq(7)').children('.controlInp').removeAttr('readonly');
        $(this).parents('.tr_item').children('td:eq(8)').children('.controlInp').removeAttr('readonly');
    });
    
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