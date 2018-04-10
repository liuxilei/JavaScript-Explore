$(document).ready(function() {
        //滚动条滚动
        $(window).scroll(function() {
        //在这里我们做一些事情
            var top = $(document).scrollTop();
            var menu = $("#menu");
            //jQuery用id来筛选比class筛选效率要高的多
            var items = $("#content").find(".item");
            var currentId = "";//当前所在的楼层(item) id
            items.each(function() {
                var m = $(this);
                var itemTop = m.offset().top;
                if (top > itemTop - 200) {
                    currentId = "#" + m.attr("id");
                }else {
                    return false;
                }
            });
            //给相应楼层的a 设置current，取消其他链接的current
            var currentLink = menu.find(".current");
            if (currentId && currentLink.attr("href") != currentId) {
                currentLink.removeClass("current");
                menu.find("[href=" + currentId +"]").addClass("current");
            }
        });
});