//创建名字数组
var arrs = [
    "代馨彤",
    "冯奕航",
    "刘梦煦",
    "潘帅",
    "王瀚文",
    "王硕",
    "王艺达",
    "张伯伦",
    "张茗侨",
    "周雨晗",
    "段广硕",
    "李书语",
    "李新高",
    "李一",
    "沈祺洋",
    "杨欣悦",
    "朱策",
    "赵畅",
    "程星策",
    "冯睿恒",
    "李天宇",
    "王思喆",
    "王一默",
    "闫立航",
    "周洪轩",
    "张震",
    "陈奇",
    "崔韶元",
    "范雨恒",
    "郝毅",
    "柳旭辉",
    "宋欣宇",
    "王昊天",
    "许英帅",
    "曹诗睿",
    "冯姗",
    "高曼泽",
    "佟欣妍",
    "魏清",
    "张敬雯",
    "张岩",
];
//获得盒子
//getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用。
var boxNode = document.getElementById("box");
for (var i = 0; i < arrs.length; i++) {
    0
    //创建新元素
    //创建指定文本的按钮你需要在按钮元素后添加文本节点
    var divNode = document.createElement("div");
    //innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
    divNode.innerHTML = arrs[i];
    //className 属性设置或返回元素的 class 属性。
    divNode.className = "name";
    //appendChild() 方法向节点添加最后一个子节点。
    //也可以使用 appendChild() 方法从一个元素向另一个元素中移动元素。
    boxNode.appendChild(divNode);
}
//点名
var btn = document.getElementById("btn");
var outPut = document.getElementById("output")
btn.onclick = function () {
    if (this.value == "开始抽奖") {
        //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
        timeId = setInterval(function () {
            //清空所有颜色
            for (var j = 0; j < arrs.length; j++) {
                //children 属性返回元素的子元素的集合
                boxNode.children[j].style.background = "";
            }
            //留下当前颜色
            var random = parseInt(Math.random() * arrs.length);
            // 避免抽到自己
            // if (random == 27){
            //     random++
            // }
            outPut.innerHTML=arrs[random]+"<span></span><span></span><span></span><span></span>";
            boxNode.children[random].style.background = "rgba(255,255,255,0.7)";
        }, 20)//随机速度
        this.value = "停止";
    } else {
        //停止循环
        clearInterval(timeId);
        this.value = "开始抽奖";
    }
}
var spanNode = document.getElementById("span");
//调用时间
getTime();
setInterval(getTime, 1000);

function getTime() {
    var day = new Date();
    var year = day.getFullYear();
    var month = day.getMonth() + 1;
    var date = day.getDate();
    var hours = day.getHours();
    var minitues = day.getMinutes();
    var second = day.getSeconds();
    spanNode.innerHTML = "时间校正： "+year + "-" + month + "-" + date + " " + hours + ":" + minitues + ":" + second;
}