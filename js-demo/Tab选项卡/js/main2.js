//js实现延迟切换
function $(id) {
    return typeof id === "string" ? document.getElementById(id) : id;
}
window.onload = function() {
    var timer = null;
    var lis = $('notice-tit').getElementsByTagName("li"),
        divs = $('notice-con').getElementsByTagName('div');
    if (lis.length != divs.length) {
        return;
    }
    //遍历所有的页签
    for (var i = 0;i < lis.length;i++) {
        lis[i].name = i;
        lis[i].onmouseover = function() {
            var _this = this;
            //如果存在准备执行的定时器，立刻清除,只有当前停留时间大于0.5s时才开始执行
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }  
            //延迟半秒执行
            timer = setTimeout(function() {
                for (j = 0;j < lis.length;j++) {
                    lis[j].className = '';
                    divs[j].style.display = 'none';
                }
                //设置当前为高亮显示
                _this.className = 'select'; 
                divs[_this.name].style.display = 'block';
            },500); 
        };
    }
};