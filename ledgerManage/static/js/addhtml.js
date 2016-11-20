var demo = new Object();

$(function() {
    //初次加载台账列表页面
    demo.addHtml('../pages/ledgerList.html', 'main_container');    
    //点击加载台账添加页面
   $(document).on("click", "[data-show='add']", function() {
       demo.addHtml('../pages/ledgerAdd.html', 'main_container');
       $('.menu,.main-container').css('padding-right','0');
       $('.user').css('right','20px');
    });
    //点击加载台账列表页面
    $(document).on('click','[data-show="item"]',function(){
        demo.addHtml('../pages/ledgerList.html', 'main_container');
        $('.user').css('right','40px');
    })
    //点击加载台账管理页面（并初次默认添加一版数据）
    $(document).on('click','[data-show="edit"]',function(){
        demo.addHtml('../pages/ledgerEdit.html', 'main_container');
        $('.user').css('right','40px');
    })
});

demo.addHtml = function(sourceUrl, targetId) {
    $.ajax({
        url: sourceUrl,
        type: 'GET',
        data: {},
        async: false,
        success: function(data) {
            $("#" + targetId).html(data);
        },
        error: function() {
            console.log('加载页面出错');
        }
    });
}