# 基础知识
#### 原型 原型链
#### 作用域 闭包
#### 异步 单线程
# JS API
#### DOM操作
#### Ajax
#### 事件绑定
# 开发环境
#### 版本管理
#### 模块化
#### 打包工具
# 运行环境
#### 页面渲染
#### 性能优化
---
## 先从几道面试题说起
- JS中使用typeof能得到哪些类型？（JS变量类型）
- 何时使用=== 何时使用==？（强制类型转换）
- window.onload和DOMContentLoaded的区别？（浏览器渲染过程）
- 用JS创建10个`<a>`标签，点击的时候弹出来对应的序号（作用域）
- 简述如何实现一个模块加载器，实现类似require.js的基本功能（JS模块化）
- 实现数组的随机排序 （JS基础算法）
---
# 基础知识
- JS中使用typeof能得到哪些类型？

 ``答：undefined、number、boolean、string、object、function(补充：typeof可以分清值类型，引用类型不行只能判断函数。)``
- 何时使用=== 何时使用==？
    ```javascript
    if (obj.a == null) {
        //这里相当于obj.a === null || obj.a === undefined,简写形式
        //这是jquery源码中推荐的写法
    }
    ```
- JS中有哪些内置函数(数据封装类对象)

    `答：Object、Array、Boolean、Number、String、Function、 Date、RegExp、Error`
- JS变量按照存储方式区分为哪些类型，并描述其特点
```javascript
// 值类型
var a = 10;
var b = a;
a = 11;
console.log(b); //10
// 引用类型
var obj1 = {x:100}
var obj2 = obj1;
obj1.x = 200;
console.log(obj2.x) //200
//下面是自己做的练习 以后也要注意！
var a = {
    value: '1111'
};
var b = a;
console.log(b); //{value:'1111'}
console.log(a); //{value:'1111'}
var a = {
    value: 1111
};
console.log(b); //{value:'1111'} //这里b还是之前的对象，因为a重新赋予了一个对象指针，所以b的value没发生改变
console.log(b === a); //false
```
`值类型可以把数值分块存储在内存中，引用类型是好几个变量共用一个内存块，达到节省内存空间目的；值类型的值赋值之后不会相互干涉，引用类型赋值是变量指针的赋值，并不是真正值的拷贝，它们值的修改是相互干预的。`

- 如何理解JSON

    `JSON只不过是一个JS对象而已;一种数据格式`

    ```javascript
JSON.stringify({a:10,b:20});
JSON.parse('{"a":10,"b":20}');
    ```

## 变量类型
- 值类型 vs 引用类型
```javascript
/* 值类型 */
var a = 100;
var b = a;
a = 200;
console.log(b); //100
```
```javascript
/* 引用类型 （对象、数组、函数）*/
var a = {age:20}
var b = a;
b.age = 21;
console.log(a.age) //21
//引用类型有个特点：可以扩展属性，自己做例子发现写函数，函数的name属性为函数名，name无法更改。
```

- typeof运算符详解
```javascript
typeof undefined //undefined
typeof 'abc' //string
typeof 123 //number
typeof true //boolean
typeof {} //object
typeof [] //object
typeof null //object
typeof console.log //function
```
typeof只能区分出值类型的详细类型，引用类型区别不出来。

## 变量计算
#### 强制类型转换（值类型）

- 字符串拼接
- ==运算符
- if语句
- 逻辑运算

##### 字符串拼接
```javascript
var a = 100 + 10; //110
var b = 100 + '10';//'10010'
```
##### ==运算符
```javascript
100 == '100' //true
0 == '' //true
null == undefined //true
```
##### if语句
```javascript
var a = true;
if (a) {
    //...
}
var b = 100;
if (b) {
    //...
}
var c = '';
if (c) {
    //...
}
```
##### 逻辑运算符
```javascript
console.log(10 && 0); //0
console.log('' || 'abc'); //'abc'
console.log(!window.abc); //true
//判断一个变量会被当做true还是false
var a = 100;
console.log(!!a);
```
---
## 原型和原型链
- 如何准确判断一个变量是数组类型
```javascript
var arr = [];
console.log(arr instanceof Array);
typeof arr //object,typeof是无法判断是否是数组的
```
- 写一个原型链继承的例子
```javascript
//动物
function Animal() {
    this.eat = function() {
        console.log('animal eat');
    };
}
//狗
function Dog() {
    this.bark = function() {
        console.log('dog bark');
    };
}
Dog.prototype = new Animal();
//哈士奇
var hashiqi = new Dog();
```
```javascript
// 接下来代码演示时，会推荐更加贴近实战的原型继承实例
function Elem(id) {
    this.elem = document.getElementById(id);
}
Elem.prototype.html = function(val) {
    var elem = this.elem;
    if (val) {
        elem.innerHTML = val;
        return this; //链式操作
    } else {
        return elem.innerHTML;
    }
};
Elem.prototype.on = function(type,fn) {
    var elem = this.elem;
    elem.addEventListener(type,fn);
    return this;
};
var div1 = new Elem('div1');
console.log(div1.html());
div1.html('<p>hello world!</p>');
div1.on('click',function() {
    alert('clicked');
});
```
- 描述new一个对象的过程
```
1.创建一个新对象
2.this指向这个新对象
3.执行代码，即对this赋值
4.返回this
```
- zeptp(或其他框架)源码中如何使用原型链
      阅读源码是高效提高技能的方式
      但不能"埋头苦钻"有技巧在其中
      慕课网搜索"zepto设计和源码分析"

### 知识点：
#### 构造函数
```javascript
function Foo(name,age) {
    this.name = name;
    this.age = age;
    this.class = 'class-1';
    //return this //默认有这一行
}
var f = new Foo('zhangsan',20);
//var f1 = new Foo('lisi',22);//创建多个对象
```
#### 构造函数 - 扩展
    - var a = {} 其实是 var a = new Object()的语法糖
    - var a = [] 其实是 var a = new Array()的语法糖
    - function Foo(){...} 其实是var Foo = new Function(...)
    - 使用instanceof判断一个函数是否是一个变量的构造函数

#### 原型规则和示例

- 所有的引用类型(数组、对象、函数)，都具有对象特性，即可自由扩展属性(除了"null"意外)
```javascript
var obj = {};
obj.a = 100;
console.log(obj); //{a:100}
var arr = [];
arr.a = 100;
console.log(arr); //[a:100]
function fn() {}
fn.a = 100;    
```
- 所有的引用类型(数组、对象、函数)，都有一个`__proto__`(隐式原型)属性，属性值是一个普通的对象
```javascript
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
```
- 所有的函数，都有一个prototype(显式原型)属性，属性值也是一个普通的对象
```javascript
console.log(fn.prototype);
```
- 所有的引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值
```javascript
console.log(obj.__proto__ === Object.prototype); //true
```
- 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`(即它的构造函数的prototype)中寻找。
```javascript
//构造函数
function Foo(name,age) {
    this.name = name;
}
Foo.prototype.alertName = function() {
    alert(this.name);
};
//创建实例
var f = new Foo('zhangsan');
f.printName = function() {
    console.log(this.name);
};
//测试
f.printName();
f.alertName();
```
`this:指向调用者`
```javascript
//循环对象自身的属性
for (var item in f) {
    //高级浏览器已经在for in 中屏蔽了来自原型的属性
    //但是这里建议大家还是加上这个判断，保证程序的健壮性
    if (f.hasOwnProperty(item)) {
        console.log(item);
    }
}
```
#### 原型链
```javascript
//构造函数
function Foo(name,age) {
    this.name = name;
}
Foo.prototype.alertName = function() {
    alert(this.name);
};
//创建实例
var f = new Foo('zhangsan');
f.printName = function() {
    console.log(this.name);
};
//测试
f.printName();
f.alertName();
f.toString(); //要去f.__proto__.__proto__中查找
```

#### instanceof
``用于判断引用类型属于哪个构造函数的方法``

- f instanceof Foo的判断逻辑是：
- f的`__proto__`一层一层往上，能否对应到Foo.prototype
- 再试着判断f instanceof Object

---
## 作用域和闭包
#### 函数声明和函数表达式
```javascript
//全局
fn(); //函数声明提升
function fn() {
    //声明
}
fn1(); //报错
console.log(fn1); //undefined 变量提升
var fn1 = function() {
    //表达式
};
//var命令会发生变量提升
console.log(a); //undefined
var a = 2;
```
```javascript
fn('zhangsan'); //zhangsan 20
function fn(name) {
    age = 20;
    console.log(name,age);
    var age;
}

fn1('zhangsan');
//zhangsan 20
//100
function fn1(name) {
    //函数
    console.log(this);
    console.log(arguments);
    age = 20;
    console.log(name,age);
    var age;

    bar(100);
    function bar(num) {
        console.log(num);
    }
}
```
#### 题目
- 说一下对变量提升的理解
    - 变量定义
    - 函数声明（注意和函数表达式的区别）
- 说明this几种不同的使用场景
	- 作为构造函数执行
	- 作为对象属性执行
	- 作为普通函数执行
	- call apply bind
- 创建10个`<a>`标签，点击的时候弹出来对应的序号
```javascript
//这是一个错误的写法！
var i,a;
for (i = 0;i < 10;i++) {
    a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener('click',function(e) {
        e.preventDefault();
        alert(i);
    });
    document.body.appendChild(a);
}
//这是正确的写法
var i;
for (i = 0;i < 10;i++) {
    (function(i) {
        var a = document.createElement('a');
        a.innerHTML = i + '<br>';
        a.addEventListener('click',function(e) {
            e.preventDefault();
            alert(i);
        });
        document.body.appendChild(a);
    })(i)
}
```
- 如何理解作用域
	- 自由变量
	- 作用域链，即自由变量的查找
	- 闭包的两个场景
- 实际开发中闭包的应用
```javascript
//闭包实际应用中主要用于封装变量，收敛权限
function isFirstLoad() {
    var _list = [];
    return function(id) {
        if (_list.indexOf(id) >= 0) {
            return false;
        } else {
            _list.push(id);
            return true;
        }
    }
}
//使用
var fristLoad = isFirstLoad();
firstLoad(10); //true
firstLoad(10); //false
firstLoad(20); //true
```

### 知识点
- 执行上下文
- this
- 作用域
- 作用域链
- 闭包

#### 执行上下文

- 范围：一段`<script>`或者一个函数
- 全局：变量定义、函数声明
- 函数：变量定义、函数声明、this、arguments

#### this

- this要在执行时才能确认值，定义时无法确认
```javascript
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name);
    }
};
a.fn(); //A  this === a
a.fn.call({name:'B'}) //B this === {name:'B'}
var fn1 = a.fn;
fn1(); //this === window
```
场景

- 作为构造函数执行
```javascript
function Foo(name) {
    this.name = name;
}
var f = new Foo('zhangsan');
```
- 作为对象属性执行
```javascript
var obj = {
	name: 'A',
	printName: function() {
	    console.log(this.name);
	}
};
obj.printName();
```
- 作为普通函数执行
```javascript
function fn() {
    console.log(this);
}
fn(); //this === window
```
- call apply bind
```javascript
function fn1(name,age) {
	alert(name + "," + age);
	console.log(this);
}
fn1.call({x:100},'zhangsan',22);
```
```javascript
var fn1 = function(name,age) {
	alert(name + "," + age);
	console.log(this);
}.bind({x:100});
fn1('zhangsan',22);
```

#### 作用域
- 没有块级作用域
```javascript
if (true) {
	var name = 'zhangsan';
}
console.log(name);
等同于
var name;
if (true) {
    name = 'zhangsan';
}
console.log(name);
//尽量不要在块里声明变量，因为也是全局的，为了可读性，直接在外面声明它是一个全局变量，这样会易于理解。
```
- 只有函数和全局作用域
```javascript
var a = 100;
function fn() {
	var a = 200;
	console.log('fn',a);
}
console.log('global',a);
fn();
```

#### 作用域链
```javascript
var a = 100;
function fn() {
    var b = 200;
    //当前作用域没有定义的变量，即"自由变量"
    console.log(a);
    console.log(b);
}
fn();
```
```javascript
var a = 100;
function F1() {
    var b = 200;
    function F2() {
        var c = 300;
        console.log(a); //a是自由变量
        console.log(b); //b是自由变量
        console.log(c);
    }
    F2();
}
F1();
```

#### 闭包
```javascript
function F1() {
    var a = 100;
    //返回一个函数（函数作为返回值）
    return function() {
        console.log(a);
    }
}
//f1得到一个函数
var f1 = F1();
var a = 200;
f1();
```

#### 闭包的使用场景
- 函数作为返回值（上一个demo）
- 函数作为参数传递（自己思考）
```javascript
function F1() {
    var a = 100;
    return function() {
        console.log(a); //自由变量，父作用域寻找
    }
}
var f1 = F1();
function F2(fn) {
    var a = 200;
    fn();
}
F2(f1);        
```
---
## 异步和单线程
#### 题目
- 同步和异步的区别是什么？分别举一个同步和异步的例子
    - 同步会阻塞代码执行，而异步不会
    - alert是同步，setTimeout是异步
- 一个关于setTimeout的笔试题
```javascript
console.log(1);
setTimeout(function() {
    console.log(2);
},0);
console.log(3);
setTimeout(function() {
    console.log(4);
},1000);
console.log(5);
```
- 前端使用异步的场景有哪些
    - 定时任务：setTimeout,setInterval
    - 网络请求：ajax请求，动态<img>加载
    - 事件绑定
#### 知识点
- 什么是异步（对比同步）
```javascript
console.log(100);
setTimeout(function() {
    console.log(200);
},1000);
console.log(300);
//对比同步
console.log(100);
alert(200);
console.log(300);
```
- 何时需要异步
    - 在可能发生的等待的情况
    - 等待过程中不能像alert一样阻塞程序运行
    - 因此，所有的''等待的情况"都需要异步
- 前端使用异步的场景
    - 定时任务：setTimeout,setInterval
    - 网络请求：ajax请求，动态<img>加载
    - 事件绑定
```javascript
//ajax请求代码示例
console.log('start');
$.get('./data1.json',function(data1) {
    console.log(data1);
});
console.log('end');
//<img>加载示例
console.log('start');
var img = document.createElement('img');
img.onload = function() {
    console.log('loaded');
}
img.src = '/xxx.png';
console.log('end');
//事件绑定示例
console.log('start');
document.getElementById('btn1').addEventListener('click',function() {
    alert('clicked');
});
console.log('end');
```
- 异步和单线程
```javascript
console.log(100);
setTimeout(function() {
    console.log(200);
});
console.log(300);
//执行第一行，打印100
//执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行（单线程的特点，不能同时干两件事）
//执行最后一行，打印300
//待所有程序执行完，处于空闲状态时，会立马看有没有暂存起来的要执行
//发现暂存起来的setTimeout中的函数无需等待时间，就立即拿过来执行
```
---
#### 其他知识
题目

- 获取2017-06-10格式的日期
```javascript
function formatDate(dt) {
    if (!dt) {
        dt = new Date();
    }
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var date = dt.getDate();
    if (month < 10) {
        //强制类型转换
        month = '0' + month;
    }
    if (date < 10) {
        //强制类型转换
        date = '0' + date;
    }
    //强制类型转换
    return year + '-' + month + '-' + date;
}
var dt = new Date();
var formatDate = formatDate(dt);
console.log(formatDate);
```
- 获取随机数，要求是长度一致的字符串格式
```javascript
var random = Math.random();
random = random + '0000000000'; //后面加上10个零
random = random.slice(0,10);
console.log(random);
```
- 写一个能遍历对象和数组的通用forEach函数
```javascript
function forEach(obj,fn) {
    var key;
    if (obj instanceof Array) {
        //准确判断是不是数组
        obj.forEach(function(item,index) {
            fn(index,item);
        });
    } else {
        // 不是数组就是对象
        for (key in obj) {
		    fn(key,obj[key]);
        }
    }
}
var arr = [1,2,3];
//注意，这里参数的顺序换了，为了和对象的遍历格式一致
forEach(arr,function(index,item) {
    console.log(index,item);  
});
var obj = {x:100,y:200};
forEach(obj,function(key,value) {
    console.log(key,value);
});
```

知识点：

- 日期
- Math
- 数组API
- 对象API
#### 日期
```javascript
Date.now(); //获取当前时间毫秒数
var dt = new Date();
dt.getTime(); //获取毫秒数
dt.getFullYear(); //年
dt.getMonth(); //月 （0 - 11）
dt.getDate(); //日 （0 - 31）
dt.getHours(); //小时 （0 - 23）
dt.getMinutes(); //分钟 （0 - 59）
dt.getSeconds(); //秒 （0 - 59）
```
#### Math
- 获取随机数 Math.random()
#### 数组API
- forEach 遍历所有元素
- every 判断所有元素是否都符合条件
- some 判断是否有至少一个元素符合条件
- sort 排序
- map 对元素重新组装，生成新数组
- filter 过滤符合条件的元素
```javascript
//forEach
var arr = [1,2,3];
arr.forEach(function(item,index) {
    //遍历数组的所有元素
    console.log(index,item);
});
```
```javascript
//every
var arr = [1,2,3];
var result = arr.every(function(item,index) {
    //用来判断所有的数组元素，都满足一个条件
    if (item < 4) {
	    return true;
    }
});
console.log(result);
```
```javascript
//some
var arr = [1,2,3];
var result = arr.some(function(item,index) {
    //用来判断所有的数组元素，只要有一个满足条件即可
    if (item < 2) {
        return true;
    }
});
console.log(result);
```
```javascript
//sort
var arr = [1,4,2,3,5,10,16,25];
var arr2 = arr.sort(function(a,b) {
    //从小到大排序
    return a - b;
    //从大到小排序
    //return b - a;
});
console.log(arr2);
```
```javascript
//map
var arr = [1,2,3,4];
var arr2 = arr.map(function(item,index) {
    //将元素重新组装，并返回
    return '<b>' + item + '</b>';
});
console.log(arr2);
```
```javascript
//filter
var arr = [1,2,3];
var arr2 = arr.filter(function(item,index) {
    //通过某一条件过滤数组
    if (item >= 2) {
        return true;
    }
});
console.log(arr2);
```
#### 对象API
```javascript
var obj = {
    x: 100,
    y: 200,
    z: 300
};
var key;
for (key in obj) {
    //注意这里的hasOwnProperty,再讲原型链时候讲过了,判断该属性是对象自身的属性，以防是来源于__proto__的
    if (obj.hasOwnProperty(key)) {
        console.log(key,obj[key]);
    }
}
```
---
### 回顾JS基础知识
- 变量类型和计算
- 原型和原型链
- 闭包和作用域
- 异步和单线程
- 其他（如日期、Math、各种常用API）

---
- 特点：表面看来并不能用于工作中开发代码
- 内置函数：Object Array Boolean String ...
- 内置对象：Math JSON ...
- 我们连在网页弹出一句hello world都不能实现

---
- JS基础知识：ECMA 262标准
- JS-Web-API：W3C标准
- W3C标准中关于JS的规定有：
- DOM操作
- BOM操作
- 事件绑定
- ajax请求(包括http协议)
- 存储
- 页面弹框是window.alert(123),浏览器需要做：
- 定义一个window全局变量，对象类型
- 给它定义一个alert属性，属性值是一个函数
- 获取元素document.getElementById(id),浏览器需要：
- 定义一个document全局变量，对象类型
- 给它定义一个getElementById的属性，属性值是一个函数
- 但是W3C标准没有规定任何JS基础相关的东西
- 不管什么变量类型、原型、作用域和异步
- 只管定义用于浏览器中JS操作页面的API和全局变量

---
- 全面考虑，JS内置的全局函数和对象有哪些?
- 之前讲过的Object Array Boolean String Math JSON等
- 刚刚提到的 window document
- 接下来还要继续讲到的所有未定义的全局变量，如navigator.userAgent

---
- 常说的JS（浏览器执行的JS）包含两个部分：
- JS基础知识（ECMA262标准）
- JS-Web-API（W3C标准）

---
# JS-Web-API
#### DOM操作
题目

- DOM是哪种基本的数据结构？

    `树`
- DOM操作的常用API有哪些？

    `获取DOM节点，以及节点的property和Attribute`
    
    `获取父节点，获取子节点`
    
    `新增节点，删除节点`
- DOM节点的attr和property有何区别

    `property只是一个JS对象的属性的修改`
    
    `Attribute是对html标签属性的修改`
知识点

- DOM本质
- DOM节点操作

    ``浏览器把拿到的html代码，结构化一个浏览器能识别并且js可操作的一个模型而已。``
- DOM结构操作

#### DOM节点操作
- 获取DOM节点
```javascript
var div1 = document.getElementById('div1'); //元素
var divList = document.getElementsByTagName('div'); //集合
console.log(divList.length);
console.log(divList[0]);
var containerList = document.getElementsByClassName('.container'); //集合
var pList = document.querySelectorAll('p'); //集合
```
- property
```javascript
var pList = document.querySelectorAll('p');
var p = pList[0];
console.log(p.style.width); //获取样式
p.style.width = '100px'; //修改样式
console.log(p.className); //获取class
p.className = 'p1'; //修改class
// 获取nodeName 和 nodeType
console.log(p.nodeName);
console.log(p.nodeType);
```
- Attribute
```javascript
var pList = document.querySelectorAll('p');
var p = pList[0];
p.getAttribute('data-name');
p.setAttribute('data-name','imooc');
p.getAttribute('style');
p.setAttribute('style','font-size:30px;');
```
### DOM结构操作

- 新增节点
```javascript
var div1 = document.getElementById('div1');
//添加新节点
var p1 = document.createElement('p');
p1.innerHTML = 'this is p1';
div1.appendChild(p1); //添加新创建的元素
//移动已有节点
var p2 = document.getElementById('p2');
div1.appendChild(p2);
```
- 获取父节点
```javascript
var div1 = document.getElementById('div1');
var parent = div1.parentElement;
```
- 获取子节点
```javascript
var child = div1.childNodes;
```
- 删除节点
```javascript
div1.removeChild(child[0]);
```
---

#### BOM操作
题目

- 如何检测浏览器类型
```javascript
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(isChrome);
```
- 拆解url的各部分
```javascript
// location
console.log(location.href);
console.log(location.protocol); // 'http:' 'https:'
console.log(location.pathname); // '/learn/199'
console.log(location.search);
console.log(location.hash);
```
知识点

- navigator
```javascript
//navigator
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log(isChrome);
```
- screen
```javascript
//screen
console.log(screen.width);
console.log(screen.height);
```
- location
```javascript
// location
console.log(location.href);
console.log(location.protocol); // 'http:' 'https:'
console.log(location.pathname); // '/learn/199'
console.log(location.search);
console.log(location.hash);
```
- history
```javascript
history.back();
history.forward();
```
---
#### 事件
题目

- 编写一个通用的事件监听函数
```javascript
function bindEvent(elem,type,selector,fn) {
    if (fn == null) {
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,function(e) {
        var target;
        if (selector) {
            target = e.target;
            if (target.matches(selector)) {
                fn.call(target,e);
            }
        } else {
            fn(e);
        }
    });
}
```
- 描述事件冒泡流程

    `DOM树形结构`

    `事件冒泡`

    `阻止冒泡`

    `冒泡的应用`
- 对于一个无限下拉加载图片的页面，如何给每个图片绑定事件

    `使用代理`

    `知道代理的两个优点`

知识点

- 通用事件绑定
```javascript
var btn = document.getElementById('btn1');
btn.addEventListener('click',function(event) {
    console.log('clicked');
});
function bindEvent(elem,type,fn) {
    elem.addEventListener(type,fn);
}
var a = document.getElementById('link1');
bindEvent(a,'click',function(e) {
    e.preventDefault(); //阻止默认行为
    alert('clicked');
});
```
- 事件冒泡
```javascript
//html部分
<body>
    <div class='div1'>
        <p id='p1'>激活</p>
        <p id='p2'>取消</p>
        <p id='p3'>取消</p>
        <p id='p4'>取消</p>
    </div>
    <div id='div2'>
	    <p id='p5'>取消</p>
	    <p id='p5'>取消</p>
    </div>
</body>
//js部分
var p1 = document.getElementById('p1');
var div1 = document.getElementsByClassName('div1')[0];
var div2 = document.getElementById('div2');
bindEvent(p1,'click',function(e) {
    e.stopPropagation();
    alert('激活');
});
bindEvent(div1,'click',function(e) {
    alert('取消');  
});
bindEvent(div2,'click',function(e) {
    alert('取消');  
});
```
- 代理
```javascript
//html代码
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
    <!--会随时新增更多a标签-->
</div>
//js部分
var div1 = document.getElementById('div1');
div1.addEventListener('click',function(e) {
    var target = e.target;
    if (target.nodeName === 'A') {
        alert(target.innerHTML);
    }
});
```
完善通用绑定事件的函数
```javascript
function bindEvent(elem,type,selector,fn) {
    if (fn == null) {
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type,function(e) {
        var target;
        if (selector) {
            target = e.target;
            if (target.matches(selector)) {
                fn.call(target,e);
            }
        } else {
            fn(e);
        }
    });
}
//使用代理
var div1 = document.getElementById('div1');
bindEvent(div1,'click','a',function(e) {
    console.log(this.innerHTML);
});
//不使用代理
var a = document.getElementById('a1');
bindEvent(a,'click',function(e) {
    console.log(a.innerHTML);
});
```
#### 代理的好处

- 代码简洁
- 减少浏览器内存占用

---
#### **Ajax**
题目

- 手动编写一个ajax，不依赖第三方库
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET","/api",false);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responseText);
        }
    }
};
xhr.send(null);
```
- 跨域的几种实现方式
`JSONP`
`服务器端设置http header`
知识点

- XMLHttpRequest
- 状态码说明
- 跨域
#### readyState
- 0 -(未初始化)还没有调用send()方法
- 1 -(载入)已调用send()方法，正在发送请求
- 2 -(载入完成)send()方法执行完成，已经接收到全部响应内容
- 3 -(交互)正在解析响应内容
- 4 -(完成)响应内容解析完成，可以在客户端调用了
#### status
- 2xx - 表示成功处理请求。如200
- 3xx - 需要重定向，浏览器直接跳转
- 4xx - 客户端请求错误，如404
- 5xx - 服务器端错误

---
#### 跨域
- 什么是跨域
`浏览器有同源策略，不允许ajax访问其他域接口`
`跨域条件：协议、域名、端口，有一个不同就算跨域`
- JSONP
- 服务器端设置http header
#### 可以跨域的三个标签
- 但是有三个标签允许跨域加载资源
- `<img src=xxx>`
- `<link href=xxxx>`
- `<script src=xxx></script>`
#### 三个标签的场景
- `<img>`用于打点统计，统计网站可能是其他域
- `<link><script>`可以使用CDN,CDN也可以是其他域
- `<script>`可以用于JSONP
#### 跨域注意事项
- 所有的跨域请求都必须经过信息提供方允许
- 如果未经允许即可获取，那是浏览器同源策略出现漏洞
#### JSONP实现原理
- 加载`http://coding.m.imooc.com/classindex.html`
- 不一定服务器端真正有一个classindex.html文件
- 服务端可以根据请求，动态生成一个文件，返回
- 同理于`<script src="http://coding.m.imooc.com/api.js"></script>`
- 例如你的网站要跨域访问慕课网的一个接口
- 慕课给你一个地址`http://coding.m.imooc.com/api.js`
- 返回内容格式如callback({x:100,y:200})(可动态生成)
```javascript
<script>
window.callback = function(data) {
    //这是我们跨域得到信息
    console.log(data);
};
</script>
<script src="http://coding.m.imooc.com/api.js"></script>
<!--以上返回callback({x:100,y:200}) -->
```
#### 服务器端设置http header
- 另外一个解决跨域的简洁方法，需要服务器端来做
- 但是作为交互方，我们必须知道这个方法
- 是将来解决跨域问题的一个趋势
```javascript
//注意：不同后端语言的写法可能不一样
//第二个参数填写允许跨域的域名称，不建议直接写"*"
response.setHeader("Access-Control-Allow-Origin","http://a.com,http://b.com");
response.setHeader("Access-Control-Allow-Header","X-Requested-With");
response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials","true");
```
#### 存储
题目

- 请描述cookie，sessionStorage和localStorage的区别？

    `容量`

    `是否会携带到ajax中`

    `API易用性`

知识点

- 本身用于客户端和服务器端通信
- 但是它有本地存储的功能，于是就被"借用"
- 使用document.cookie = ...获取和修改即可

cookie用于存储的缺点

- 存储量太小，只有4KB
- 所有的http请求都带着，会影响获取资源的效率
- API简单，需要封装才能用document.cookie = ...

locationStorage和sessionStorage

- HTML5专门为存储而设计，最大容量5M
- API简单易用
- localStorage.setItem(key,value); localStorage.getItem(key);

坑：

- iOS safari隐藏模式下
- localStorage.getItem会报错
- 建议统一使用try-catch封装

---
# 开发环境

- 面试官想通过开发环境了解面试者的经验
- 开发环境，最能体现工作产出的效率
- 会以聊天的形式为主，而不是出具体的问题

关于开发环境

- IDE(写代码的效率)
- git(代码版本管理，多人协作开发)
- JS模块化
- 打包工具
- 上线回滚的流程

IDE

- webstorm
- sublime
- vscode
- atom
- 插件

Git

- 正式项目都需要代码版本管理
- 大型项目需要多人协作开发
- Git和linux是一个作者
- 网络Git服务器如`coding.net github.com`
- 一般公司代码非开源，都有自己的Git服务器
- 搭建Git服务器无需你了解太多
- Git的基本操作必须要熟练

#### 常用Git命令

- git add .   (.把所有项目上传，也可以加文件名)
- git checkout xxx  （改错了，想还原回去）
- git commit -m "xxx"  （git commit把项目弄到本地 -m 加备注）
- git push origin master （提交给远程仓库）
- git pull orgin master （别人把你提交的pull下来）
- git branch （多人协作 切换到当前分支）
- git checked -b xxx/git checkout xxx （git checked -b新建分支/git checkout 切换到已有分支）
- git merge xxx

#### 模块化

- 不使用模块化的情况
- 使用模块化
- AMD
- CommonJS

不使用模块化

- util.js getFormatDate函数
- a-util.js aGetFormatDate函数 使用getFormatDate
- a.js aGetFormatDate
```javascript
//util.js
function getFormatDate(data,type) {
    // type === 1 返回 2017-06-15
    // type === 2 返回 2017年6月15日 格式
    // ...
}
//a-util.js
function aGetFormatDate(date) {
    //要求返回 2017年6月15日 格式
    return getFormatDate(date,2);
}
//a.js
var dt = new Date();
console.log(aGetFormatDate(dt));
```
```html
<script src="util.js"></script>
<script src="a-util.js"></script>
<script src="a.js"></script>
<!-- 1.这些代码中的函数必须是全局变量，才能暴露给使用方。全局变量污染 -->
<!-- 2.a.js知道要引用a-util.js,但是他知道还需要依赖于util.js吗？ -->
```
#### AMD
- require.js
- 全局define函数
- 全局require函数
- 依赖JS会自动、异步加载

使用require.js
```javascript
//util.js
define(function() {
    return {
        getFormatDate: function(data,type) {
            if (type === 1) {
                return '2017-06-15';
            }
            if (type === 2) {
                return '2017年6月15日';
            }
        }
    }
})；
//a-util.js
define(['./util.js'],function(util) {
    return {
        aGetFormatDate: function(date) {
            return util.getFormatDate(date,2);
        }
    }
});
//a.js
define(['./a-util.js'],function() {
    return {
        printDate: function(date) {
            console.log(aUtil.aGetFormatDate(date));
        }
    }
});
//main.js
require(['./a.js'],function(a) {
    var date = new Date();
    a.printDate(date);
});
```
CommonJS
- nodejs模块化规范，现在被大量用前端，原因：
- 前端开发依赖的插件和库，都可以从npm中获取
- 构建工具的高度自动化，使得使用npm的成本非常低
- CommonJS不会异步加载JS，而是同步一次性记载出来
```javascript
//util.js
module.exports = {
    getFormatDate: function(data,type) {
        if (type === 1) {
            return '2017-06-15';
        }
        if (type === 2) {
            return '2017年6月15日'；
        }
    }
};
//a-util.js
var util = require('util.js');
module.exports = {
    aGetFormatDate: function() {
        return util.getFormatDate(date,2);
    }
}
```
AMD和CommonJS的使用场景

- 需要异步加载JS，使用AMD
- 使用了npm之后建议使用CommonJS

#### 上线和回滚
知识点：

- 上线和回滚的基本流程
- linux基本命令

上线回滚流程介绍

- 是非常重要的开发环节
- 各个公司的具体流程不同
- 由专门的工具后者系统完成，我们无需关心细节
- 如果你没有参与过，面试时也要说出要点
- 只讲要点，具体实现无法讲解

上线流程要点

- 将测试完成的代码提交到git版本库的master分支
- 将当前服务器的代码全部打包并记录版本号，备份
- 将master分支的代码提交覆盖到线上服务器，生成新版本号

回滚流程要点

- 将当前服务器的代码打包并记录版本号，备份
- 将备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号

#### linux基本命令
- 服务器使用linux居多，server版，只有命令行
- 测试环境要匹配线上环境，因此也是linux
- 经常需要登录测试机来自己配置、获取数据

---
# 运行环境

- 浏览器就可以通过访问链接来得到页面的内容
- 通过绘制和渲染，显示出页面的最终的样子
- 整个过程中，我们需要考虑什么问题？

知识点

- 页面加载过程
- 性能优化
- 安全性

#### 页面加载
题目

- 从输入url到得到html的详细过程

    `浏览器根据DNS服务器得到域名的IP地址`
    
    `向这个IP的机器发送http请求`
    
    `服务器收到、处理并返回http请求`
    
    `浏览器得到返回内容`

- window.onload 和 DOMContentLoaded的区别

    `页面的全部资源加载完才会执行，包括图片、视频等`
    
    `DOM渲染完即可执行，此时图片、视频还没有加载完`

知识点

- 加载资源的形式
- 加载一个资源的过程
- 浏览器渲染页面的过程

加载资源的形式

- 输入url（或跳转页面）加载html
- 加载html中的静态资源
- `<script src="xxx.js"></script>`

加载一个资源的过程

- 浏览器根据DNS服务器得到域名的IP地址
- 向这个IP的机器发送http请求
- 服务器收到、处理并返回http请求
- 浏览器得到返回内容

浏览器渲染页面的过程

- 根据HTML结构生成DOM Tree
- 根据CSS生成CSSOM
- 将DOM和CSSOM整合形成RenderTree
- 根据RenderTree开始渲染和展示
- 遇到`<script>`时，会执行并阻塞渲染

window.onload和DOMContentLoaded
```javascript
window.addEventListener('load',function() {
    //页面的全部资源加载完才会执行，包括图片、视频等
});
document.addEventListener('DOMContentLoaded',function() {
    //DOM渲染完即可执行，此时图片、视频还可能没有加载完
});
```
#### 性能优化
原则

- 多使用内存、缓存或者其他方法
- 减少CPU计算、较少网络

从哪里入手

- 加载页面和静态资源
- 页面渲染

加载资源优化

- 静态资源的压缩合并
- 静态资源缓存
- 使用CDN让资源加载更快
- 使用SSR后端渲染，数据直接输出到HTML中

渲染优化

- CSS放前面，JS放后面
- 懒加载（图片懒加载、下拉加载更多）
- 减少DOM查询，对DOM查询做缓存
- 减少DOM操作，多个操作尽量合并在一起执行
- 事件节流
- 尽早执行操作（如DOMContentLoaded）

缓存

- 通过了解名称控制缓存
- `<script src="abc_1.js"></script>`
- 只有内容改变的时候，链接名称才会改变
- `<script src="abc_2.js"></script>`

使用SSR后端渲染

- 现在Vue React提出了这样的概念
- 其实jsp php asp都属于后端渲染

懒加载
```javascript
<img src="img1" src="preview.png" data-realsrc="abc.png"/>
<script type="text/javascript">
    var img1 = document.getElementById('img1');
    img1.src = img1.getAttribute('data-realsrc');
</script>
```
缓存DOM查询
```javascript
//未缓存DOM查询
var i;
for (i = 0;i < document.getElementsByTagName('p').length;i++) {
    //todo
}
//缓存了DOM查询
var pList = document.getElementsByTagName('p');
var i;
for (i = 0;i < pList.length;i++) {
    //todo
}
```
合并DOM插入
```javascript
var listNode = document.getElementById('list');
//要插入10个li标签
var frag = document.createDocumentFragment();
var x,li;
for (x = 0;x < 10;x++) {
    li = document.createElement("li");
    li.innerHTML = "List item " + x;
    frag.appendChild(li);
}
listNode.appendChild(frag);
```
事件节流
```javascript
var textarea = document.getElementById('text');
var timeoutId;
textarea.addEventListener('keyup',function() {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function() {
        //触发change事件
    },100);
});
```
#### 安全性

- XSS跨站请求攻击
- XSRF跨站请求伪造

XSS

- 在新浪博客写一篇文章，同时偷偷插入一段`<script>`
- 攻击代码中，获取cookie，发送自己的服务器
- 发布博客，有人查看博客内容
- 会把查看者的cookie发送到攻击者的服务器

如何预防

- 前端替换关键字，例如替换<为`&lt;`>为`&gt;`
- 后端替换

XSRF

- 你已登录一个购物网站，正在浏览商品
- 该网站付费接口是`xxx.com/pay?id=100`但是没有任何验证
- 然后你收到一封邮件，隐藏着`<img src=xxx.com/pay?id=100>`
- 你查看邮件的时候，就已经悄悄的付费购买了

解决方案

- 增加验证流程，如输入指纹、密码、短信验证码

----
## 技巧

- 简历
- 面试过程中...

简历

- 简洁明了，重点突出项目经历和解决方案
- 把个人博客放在简历中，并且定期维护更新博客
- 把个人的开源项目放在简历中，并维护开源项目
- 简历千万不要造假，要保持能力和经历上的真实性

面试过程中

- 如何看待加班？加班就像借钱，救急不救穷
- 千万不可挑战面试官，不要反考面试官
- 学会给面试官惊喜，但不要太多
- 遇到不会回答的问题，说出你知道的也可以
- 谈谈你的缺点---说一下你最近正在学什么就可以了
