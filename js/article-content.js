$(document).ready(function () {
    preCode();
})
function preCode() {
    // 给每个pre包裹一层div
    $('pre').wrap('<div class="language-wrap"></div>');
    // 添加按钮
    $('.language-wrap').append('<button class="copy-code-button iconfont icon-fuzhi"></button>');
    // 遍历pre
    $('pre').each(function () {
        // 获取pre的data属性
        var type = $(this).data('lang');
        // 拼接类型
        var lang_type = '<div class="lang-type">' + type + '</div>';
        // 在父元素插入类型标注
        $(this).parent().append(lang_type)
    })
    // 遍历所有按钮
    $('.copy-code-button').each(function () {
        // 添加监听器
        $(this).bind('click', function () {
            // 获取要复制的文本，按钮父元素下pre的text
            var code = $(this).parent().find('pre').text();
            // 写入剪贴板
            navigator.clipboard.writeText(code);
            // 更改按钮状态
            copied($(this));
        })
    })
}
function copied(button) {
    var unpress = 'icon-fuzhi';
    var pressed = 'icon-baocun';
    button.removeClass(unpress).addClass(pressed).css('color','#15ff00');
    setTimeout(function () {
        button.removeClass(pressed).addClass(unpress).css('color','#222222');
    },1000)
}