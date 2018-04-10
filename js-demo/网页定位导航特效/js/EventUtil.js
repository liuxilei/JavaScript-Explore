/* 单体模式 */
/* 跨浏览器处理添加和删除事件处理程序 */
/* 跨浏览器的事件对象*/
var EventUtil = {
    /* 添加事件 */
    addHandler: function(element,type,handler) {
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }else if (element.attachEvent) {
            element.attachEvent("on" + type,handler);
        }else {
            element["on" + type] = handler;
        }
    },
    /* 删除事件 */
    removeHandler: function(element,type,handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if (element.detachEvent) {
            element.detachEvent("on" + type,handler);
        }else {
            element["on" + type] = null;
        }
    },
    /* 返回对event对象的引用 */
    getEvent: function(event) {
        return event ? event : window.event;   
    },
    /* 返回事件的目标 */
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    /* 取得相关元素*/
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        }else if (event.toElement) {
            return event.toElement;
        }else if (event.formElement) {
            return event.formElement;
        }else {
            return null;
        }
    },
    /* 取消事件的默认行为 */
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },
    /* 阻止事件流 */
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    },
    /* button属性 */
    getButton: function(event) {
        if (document.implementation.hasFeature("MouseEvents","2.0")) {
            return event.button;
        }else {
            switch(event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    /* 鼠标滚轮滚动时显示detail属性的值 */
    getWheelDelta: function(event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        }else {
            return -event.detail * 40;
        }
    },
    /* 取得字符编码 */
    getCharCode: function(event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}