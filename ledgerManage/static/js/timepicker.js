var timepicker = new Object();
//时间选择器js控制
var iDay;

timepicker.changed = function(){
    var yesterday;
    Date.prototype.Format = function(fmt) { // author: meizz
        var o = {
            "M+" : this.getMonth() + 1, // 月份
            "d+" : this.getDate(), // 日
            "h+" : this.getHours(), // 小时
            "m+" : this.getMinutes(), // 分
            "s+" : this.getSeconds(), // 秒
            "q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
            "S" : this.getMilliseconds()
        // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
                    .substr(4 - RegExp.$1.length));
        for ( var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                        : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


    /**
     * 设定时间选择器的点击方式
     */
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
        initialDate: iDay
    });

    /**
     * 为时间选择器设定默认值
     */
//    $(document).ready(function() {
//        var dateNow = new Date();
//        dateNow = dateNow.valueOf();
//        dateNow = dateNow - ( 24 * 60 * 60 * 1000);
//        dateNow = new Date(dateNow);
//        yesterday =  dateNow.Format("yyyy-MM-dd");
//        $('.form_datetime_yesterday').each(function(index,ele){
//            $(ele).val(yesterday);//设定时间为昨天
//        });
//
//
//        var dateNow = new Date();
//        iDay =  dateNow.Format("yyyy-MM-dd");
//        $('.form_datetime').each(function(index,ele){
//            $(ele).val(iDay);
//        });
//    });
};

$(function(){
    timepicker.changed();
})