// 待文件加载完成开始监听是否返回顶部
$(document).ready(function () {
    $("#to-top").click(function () {
        $('body,html').animate({
            scrollTop: 0
        },
            500);
    });
})