//什么是接口？
//接口提供了一种用以说明一个对象应该具有哪些方法的手段。
//JavaScript中模仿接口的三种方法:注释法、属性检查法和鸭式辨型法

/* 用注释描述接口 */

/*
interface Composite {
    function add(child);
    function remove(child);
    function getChild(index);
}

interface FormItem {
    function save();
}
*/
var CompositeForm = function(id,method,action) { //implements Composite,FormItem
    //...
};

//Implement the Composite interface.
CompositeForm.prototype.add = function(child) {
    //...
};
CompositeForm.prototype.remove = function(child) {
    //...
};
CompositeForm.prototype.getChild = function(index) {
    //...
};

//Implement the FormItem interface.
CompositeForm.prototype.save = function() {
    //...
};

//缺点：它没有为确保CompositeForm真正实现了正确的方法集而进行检查，也不会抛出错误以告知程序员程序中有问题。说到底它主要还是属于程序文档范畴。在这种做法中，对接口约定的遵守完全依靠自觉。
//优点：易于实现，不需要额外的类和函数。



/* 用属性检查模仿接口 */

/*
interface Composite {
    function add(child);
    function remove(child);
    function getChild(index);
}

interface FormItem {
    functionsave();
}
*/

var CompositeForm = function(id,method,action) {
    this.implementsInterfaces = ['Composite','FormItem'];
    //...
};

//...
/**
 * [addForm 检测实例化对象formInstace是否实现了所有的接口(new CompositeForm)]
 * @param {object} formInstance [实例化的对象]
 */
function addForm(formInstance) {
    if (!implements(formInstance,'Composite','FormItem')) {
        throw new Error("Object does not implement a required interface.");
    }
    //...
}

//The implements function,which checks to see if an object declares that it implements the required interfaces.
/**
 * [implements 具体检测方法]
 * @param  {[Object,string]} object [传入实例化的对象，外加实现接口的方法名]
 * @return {[Boolean]}        [是否实现]
 */
function implements(object) {
    for (var i = 1;i < arguments.length;i++) { //Looping through all arguments after the first one.
        var interface = arguments[i];
        var interfaceFound = false;
        for (var j = 0;j < object.implementsInterfaces.length;j++) {
            if (object.implementsInterfaces[j] == interface) {
                interfaceFound = true;
                break;
            }
        }
        if (!interfaceFound) {
            return false; //An interface was not found.
        }
    }
    return true; //All interface were found.
}

//优点：它对类所实现的接口提供了文档说明。如果需要的接口不在一个类宣称支持的接口之列，你会看到错误消息。
//缺点：它并未确保类真正实现了自称实现的接口。


/* 鸭式辨型法 */

//Interface
var Interface = function(name,methods) {
    if (arguments.length != 2) {
        throw new Error('this instance interface constructor must be 2 length!');
    }
    this.name = name;
    this.methods = [];
    for (var i = 0,len = methods.length;i < len;i++) {
        if (typeof methods[i] !== string) {
            throw new Error('the Interface method name is error!');    
        }
        this.methods.push(methods[i]);
    }
};
Interface.ensureImplements = function(object) {}
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with" + arguments.length + "arguments,but expected at least 2.");
    }
    for (var i = 1,len = arguments.length;i < len;i++) {
        var instanceInterface = arguments[i];
        if (instanceInterface.constructor !== Interface) {
            thorw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instaces of Interface.")   
        }
        for (var j = 0,methodsLen = instanceInterface.methods.length;j < methodsLen;j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object" + "does not implement the " + interface.name + " interface.Method" + method + "was not found.");
            }
        }
    }
};

var Composite = new Interface('Composite',['add','remove','getChild']);
var FormItem = new Interface('FormItem',['save']);

//CompositeForm class
var CompositeForm = function(id,method,action) {
    //...
};

//...

function addForm(formInstance) {
    ensureImplements(formInstance,Composite,FormItem) {
        //This function will throw an error if a required method is not implemented.
    }
}
