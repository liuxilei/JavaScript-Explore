//demo:启动和停止一个动画
//函数式编程
/* Start and stop animations using functions. */
function startAnimation() {
    //...
}

function stopAnimation() {
    //...
}
//上面代码的缺陷:无法创建可以保存状态并且具有一些仅对内部状态进行操作的方法的动画对象 


//面向对象编程
/* Anim class. */
var Anim = function() {
    //...
};
Anim.prototype.start = function() {
    //...
};
Anima.prototype.stop = function() {
    //...
}
/* Usage */
var myAnim = new Anim();
myAnim.start();
//...
myAnim.stop();

/* Anim class,with a slightly different syntax for declaring methods. */
var Anim = function() {
    //...
}
Anima.prototype = {
    start: function() {
        //...
    },
    stop: function() {
        //...
    }
};

/* Add a method to the Function object that can be used to declare methods. */
Function.prototype.method = function(name,fn) {
    this.prototype[name] = fn;
};
/* Anim class,with methods created using a convenience method. */
var Anim = function() {
    //...
};
Anim.method('strat',function() {
    //...
});
Anim.method('stop',function() {
    //...
});

/* This version allows the calls to be chained. */
Function.prototype.method = function(name,fn) {
    this.prototype[name] = fn;
    return this;
}
/* Anim class,with methods created using a covenience method and chaining. */
var Anim = function() {
    //...
};
Anim.
    method('start',function() {
        //...
    }).
    method('stop',function() {
        //..
    });


//原始类型:布尔型、数值型和字符型; 其他:（对象、函数类型），还有空类型(null)和undefined。
//原始类型按值传送，其他按引用类型传送

/* 函数是一等对象 */
//它们可以储存在变量中，可以作为参数传给其他函数，可以作为返回值从其他函数传出，还可以在运行时进行构造。

//匿名函数
/* An anonymous function,executed immediately. */
(function() {
    var foo = 10;
    var bar = 2;
    alert(foo * bar);
})();

/* An anonymous function with arguments. */
(function(foo,bar) {
    alert(foo * bar);
})(10,2);

/* An anonymous function that returns a value. */
var baz = (function(foo,bar) {
    return foo * bar;
})(10,2);
//baz will equal 20.

/* An anonymous function used as a closure. */
var baz;
(function() {
    var foo = 10;
    var bar = 2;
    baz = function() {
        return foo * bar;
    };
})();
baz(); 
//baz can access foo and bar,even though it is executed outside of the annoymous function.


//对象的易变性
//在JavaScript中，一切都是对象(除了那三种原始数据类型。即便是这些类型，在必要的时候也会被自动包装成对象)，而且所有对象都是易变的。这意味着你能使用一些在大多数别的语言中不允许的技术，例如为函数添加属性。
function displayError(message) {
    displayError.numTimesExecuted++;
    alert(message);
}
displayError.numTimesExecuted = 0;
//这也意味着你可以对先前定义的类和实例化的对象进行修改:

/* Class Person. */
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
};
/* Instantiate the class */
var alice = new Person('Alice',93);
var bill = new Person('Bill',30);

/* Modify the class */
Person.prototype.getGreeting = function() {
    return 'Hi' + this.getName() + '!';
};
/* Modify a specific instance */
alice.displayGreeting = function() {
    alert(this.getGreeting());
};

//与对象的易变性相关的还有内省的概念。你可以在运行时检查对象所具有的属性和方法，还可以使用这种信息动态实例化类和执行其方法(这种技术成为反射)