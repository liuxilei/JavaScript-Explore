var area = document.getElementById('moocBox');
var iLiheight = 24;
var time = null;
var speed = 50;
var delay = 2000;
area.innerHTML += area.innerHTML;
area.scrollTop = 0;
function startMove() {
    area.scrollTop++;
    time = setInterval(scrollUp,speed); 
}
function scrollUp() {
    if (area.scrollTop % iLiheight == 0) {
        clearInterval(time);
        setTimeout(startMove,delay);
    } else {
        area.scrollTop++;
        if (area.scrollTop >= area.scrollHeight/2) {
            area.scrollTop = 0;
        }
    }
}
setTimeout(startMove,delay);