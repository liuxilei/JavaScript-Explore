var area = document.getElementById('moocBox');
var con1 = document.getElementById('con1');
var con2 = document.getElementById('con2');
var time = 50;
con2.innerHTML = con1.innerHTML;
function scrollUp() {
    if (area.scrollTop >= con1.offsetHeight) {
        area.scrollTop = 0;
    } else {
        area.scrollTop++;
    }    
}
var myScroll = setInterval(scrollUp,time);
area.onmouseover = function() {
    clearInterval(myScroll);
};
area.onmouseout = function() {
    myScroll = setInterval(scrollUp,time);
};