$(function(){
    base.menu();//主页面一级菜单的显示与隐藏
    base.icon();//页面所有按钮点击样式变化
    base.msg();//页面系统消息相关
})

var base = new Object();
//主页面一级菜单的显示与隐藏
base.menu = function(){
    $(document).on("mouseover","[data-target='menu']",function(e){        
        var $innermenu=$(this).find(".inner-menu");        
        if($innermenu.css("display")=="none"){            
            //如果子菜单为none,所有的都关闭，当前的展示；否则都关闭
            $(".inner-menu").slideUp(200);            
            $innermenu.slideDown(200);            
        }     
    });
    
    $(document).on("mouseleave","[data-target='menu']",function(e){        
        var $innermenu=$(this).find(".inner-menu");
        $innermenu.slideUp(200);
   
    });
    $(document).on("click",function(){
        //点击document,所有的子菜单都关闭        
        $(".inner-menu").slideUp(200);
    })
}
//页面所有按钮点击样式变化
base.icon = function(){
    $(document).on('mousedown','.item-btn,.tools-btn,.del,.selectBtn,.submitted,.sure,.payed,.downBtn,.delBtn,.messageBtn',function(){
        $(this).css('background-color','#67a4e6');
    })
    $(document).on('mouseup','.item-btn,.tools-btn,.del,.selectBtn,.submitted,.sure,.payed,.downBtn,.delBtn,.messageBtn',function(){
        $(this).css('background-color','#0d6ed5');
    })                
}

//页面系统消息相关
base.msg = function(){
    var n=0;
    var timer;
    $(document).on('click','.icon-youjian',function(){ 
        $('.messageContainer').animate({height:'400px'},200);
    })
    $(document).on('mouseout','.icon-youjian',function(){
        timer = setTimeout(function(){
            $('.messageContainer').animate({height:0},200);
        },200);     
    })
    $(document).on('mouseenter','.messageContainer',function(){
        clearTimeout(timer);
    })
    $(document).on('mouseleave','.messageContainer',function(){
        $('.messageContainer').animate({height:0},200);
    })
    $(document).on('click','.messageBtn',function(){
        $(this).css('display','none').siblings('.messageBtnOver').css('display','inline-block');
    })
}