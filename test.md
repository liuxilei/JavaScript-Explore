# ES6实际应用和介绍

## 变量的解构赋值
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这种称为解构。

数组的解构赋值
```javascript
//交换两个变量的值
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b); //2，1
```

对象的解构赋值
```javascript
let o = {p: 42,q: true}
let {p,q} = o;
console.log(p,q); //42 true
//实际应用场景就比如在react中经常把state/props对象的值解构出来
```
---
## 字符串的扩展
- 模板字符串
```javascript
let name = 'lxl';
let info = 'hello world';
let m = `i am ${name},${info}`;
console.log(m); //i am lxl,hello world
//实际应用的话：比如react中动态添加多个class名可以用到
```

- 字符串补全
```javascript
console.log('1'.padStart(2,'0')); //01
console.log('1'.padEnd(2,'0')); //10
```
---
## 数组的扩展
### 扩展运算符
```javascript
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```
```javascript
//深拷贝
let obj = {a: 1, b: 2};
let copyObj = {...obj};
console.log(obj == copyObj); //false
let arr = [4, 5, 6];
let copyArr = [...arr];
console.log(arr == copyArr); //false
```

#### Array.includes
一般情况可能存在某个值等于某项，需要我们用`||`去一个个补充上
```javascript
/**
 * @description 判断水果类型
 * @method test
 * @param {string} fruit 水果名
 **/
function test(fruit) {
    if (fruit == "apple" || fruit == "strawberry") {
        console.log("red");
    }
}
```
如果我们有更多水果
```javascript
/**
 * @description 判断水果类型
 * @method test
 * @param {string} fruit 水果名
 **/
function test(fruit) {
    const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
    if (redFruits.includes(fruit)) {
        console.log("red");
    }
}
```
---
## 对象的扩展
#### 属性的简洁表示法
ES6允许直接写入变量和函数，作为对象的属性和方法
```javascript
//简介表达法
let o = 1;
let k = 2;
let es5 = {
    o: o,
    k: k
};
let es6 = {
    o,
    k
}
console.log(es5,es6); //{o: 1,k: 2}  {o: 1,k: 2}

let es5_method = {
    hello: function() {
        console.log('hello');
    }
};
let es6_method = {
    hello() {
        console.log('hello');
    }
};
es5_method.hello(); //hello
es6_method.hello(); //hello
```

#### Object.assign

`Object.assign`方法用于对象的合并，将源对象的所有可枚举属性，复制到目标对象。
```javascript
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

//扩展运算符也可以合并对象属性
const test = {...target, ...source1, ...source2};
console.log(test == target); //false
```
```javascript
//深拷贝
let obj = {name: 'liuxilei', sex: '男'};
let copyObj = Object.assign({}, obj);
console.log(copyObj == obj); //false
```

---


## Set简介
`Set`对象允许你存储任何类型的唯一值，无论是原始值或者对象引用
#### 语法
> new Set([iterable])

##### 参数
**iterable**
如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的`Set`中。如果不指定此参数或其值为null，则新的`Set`为空。

##### 返回值
一个新的`Set`对象

```javascript
//Set实例
let mySet = new Set();
//属性 size:返回Set对象的值的个数
console.log(mySet.size); //0

//方法
//add 在Set对象尾部添加一个元素。返回该Set对象。
mySet.add(1);
mySet.add(5);
console.log(mySet); //Set(2) {1, 5}

//has 返回一个布尔值，表示该值在Set中存在与否。
console.log(mySet.has(1)); //true

//delete 移除Set的中与这个值相等的元素
mySet.delete(1);
console.log(mySet); //Set(1) {5}
``` 

#### Set与去重
ES6提供了新的数据结构。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set本身是一个构造函数，用来生成Set数据结构。
数组去重
```javascript
const arr = [1,2,3,2,3,5];
const newArr = [...new Set(arr)];//[1,2,3,5]
```
`Array.from`方法可以将Set结构转为数组。我们可以专门编写使用一个去重的函数
```javascript
/**
 * @description 去重的方法
 * @method unique
 * @param {Array} array
 * @return {Array} 一个去重的数组对象
 **/
function unique(array) {
    return Array.from(new Set(array));
}
unique([1, 1, 2, 3]); //[1, 2, 3]
```
另外一种去重方法，利用对象key不重复的特性
```javascript
//去掉数组中的重复项
//把数组转换为对象
function toObject(arr) {
    let obj = {};
    let j;
    for (let i = 0,j = arr.length;i < j;i++) {
        obj[arr[i]] = true;
    }
    return obj;
};
//把对象转为数组
function keys(obj) {
    let arr = [];
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            arr.push(attr);
        }
        
    }
    return arr;
}
//综合
function uniq(newArr) {
    return keys(toObject(newArr));
}
let arr = [1,2,3,2,4,5];
console.log(uniq(arr)); //['1', '2', '3', '4', '5']
```
字符去重
```javascript
let str = [...new Set("ababbc")].join("");
console.log(str); //"abc"
```

## Promise