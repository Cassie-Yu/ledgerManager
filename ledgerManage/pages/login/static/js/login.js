$(function(){
    login.signBtn();
})

var login = new Object();

login.signBtn = function(){
    $(document).on('mousedown','.login-btn',function(){
        $(this).css('background-color','#1070c1');
    })
    $(document).on('mouseup','.login-btn',function(){
        $(this).css('background-color','#22559f');
    })
}