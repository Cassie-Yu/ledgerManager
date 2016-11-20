$(function(){
    ledgerEdit.flex();//三级菜单的展开与显示
    ledgerEdit.menu();//三级菜单点击样式变化
})

var ledgerEdit = new Object();
//三级菜单的展开与显示
ledgerEdit.flex = function(){
    $(document).on('click','.Item',function(){
        if($('.icon-xiangzuojiantou').hasClass('hide')){
            $('.selectMenu').animate({width:'150px'});
            $('.pagingContent').animate({'margin-left':'200px'});
            $('.icon-xiangyoujiantou').addClass('hide').siblings().removeClass('hide');
        }else if($('.icon-xiangyoujiantou').hasClass('hide')){
            $('.selectMenu').animate({width:'50px'});
            $('.pagingContent').animate({'margin-left':'100px'});
            $('.icon-xiangzuojiantou').addClass('hide').siblings().removeClass('hide');
        }        
    })
}
//三级菜单点击样式变化
ledgerEdit.menu = function(){
    $(document).on('click','.menuBox .item',function(){
        $(this).css('background-color','#ccc').siblings('.item').css('background-color','#014087');
    })
}