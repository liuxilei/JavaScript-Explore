//在es6之前，es5有两个作用域:全局作用域和函数作用域
//function test() {
//    for (var i = 1;i < 3;i++) {
//        console.log(i);
//    }
//    console.log(i);
//}
//test();
//输出结果1 2 3

//function test() {
//    for (let i = 1;i < 3;i++) {
//        console.log(i);
//    }
//    console.log(i);
//}
//test(); //报错:ReferenceError: i is not defined
//es6的块级作用域 es6中一段代码是用{}包起来的，这个大括号里面就是一个块级作用域，在这个作用域里面声明的变量在这个外面就不存在了，可以理解成这个变量的生命周期结束了;es6中强制开启了严格模式, es5中"use strict";来开启严格模式

//function test() {
//    let a = 1;
//    let a = 2;
//}
//test();//报错:Error:Duplicate declaration(重复声明)
//let 声明变量不能再次声明

//function test() {
//    const PI = 3.1415926;
//    PI = 8;
//    console.log(PI);
//}
//test();//报错："PI" is read-only(PI是一个只读属性)
//const声明的常量是不能修改的

//function test() {
//    const PI;
//    PI = 3.1415926;
//}
///报错:Error:Unexpected token(代码不完整)
//const声明时必须赋值

//const声明的常量是不能修改的，这句话不严谨
function test() {
    const PI = 3.1415926;
    const k = {
        a: 1
    }
    k.b = 3;
    console.log(PI,k);
}
test();
//const声明的k对象是引用类型，返回值是对象存储内存中的指针，声明的k是指向对象中存储的指针 ，这个指针是不变的，但是对象本身是可变的。