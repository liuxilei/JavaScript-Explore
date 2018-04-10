window.onload = function() {
    waterfall('main','box');
    var dataInt = {"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'},{"src":'11.jpg'},{"src":'12.jpg'},{"src":'13.jpg'},{"src":'14.jpg'},{"src":'15.jpg'},{"src":'16.jpg'},{"src":'17.jpg'},{"src":'18.jpg'},{"src":'19.jpg'},{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'},{"src":'37.jpg'},{"src":'38.jpg'},{"src":'39.jpg'}]}
    window.onscroll = function() {
        if (checkScrollSlide（）) {
            //将数据块渲染到页面的尾部
            for (var i = 0;i < dataInt.data.length;i++) {
                var oBox = document.createElement('div');
                oBox.className = 'box';
                var oParent = document.getElementById('main');
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className = 'pic';
                oBox.appendChild(oPic);
                var oImg = document.createElement('img');
                oImg.src = 'img/' + dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterfall('main','box');
        }   
    };
};
function waterfall(parent,box) {
    var oParent = document.getElementById(parent);
    //将main下的class为box的元素取出来
    var oBoxs = oParent.getElementsByClassName(box);
    //计算整个页面显示的列数(页面的宽/box的宽)
    var oBoxW = oBoxs[0].offsetWidth;
    //Math.floor取整
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置main的宽度
    oParent.style.cssText = 'width:' + oBoxW * cols + 'px;margin:0 auto';
    //存放每一列高度的数组
    var hArr = [];
    for (var i = 0;i < oBoxs.length;i++) {
        if (i < cols) {
            hArr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null,hArr);
            var index = getMinhIndex(hArr,minH);
            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            //oBoxs[i].style.left = oBoxW*index + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            hArr[index] += oBoxs[i].offsetHeight; 
        }
    }
}
//获取最小值在数组中的索引
function getMinhIndex(arr,val) {
    for (var i = 0;i < arr.length;i++) {
        if (arr[i] == val) {
            return i;
        }
    }
}
//检测是否具备了滚条加载数据的条件
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    var oBoxs = oParent.getElementsByClassName('box');
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop + height) ? true:false;
}
