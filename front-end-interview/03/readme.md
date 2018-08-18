### 类型转换

- 显式类型转换
- 隐式类型转换(四则运算、判断语句、Native调用)

#### 显式类型转换

```javascript
//以下六个值的转化结果为false，其他的值全部为true
// undefined
// null
// -0
// +0
// NaN
// ''(空字符串)
console.log('undefined',Boolean(undefined)); //false

console.log('null',Boolean(null)); //false

console.log('0',Boolean(0)); //false

console.log('NaN',Boolean(NaN)); //false

console.log('',Boolean('')); //false
```
#### 类型转换常见题目
![类型转换常见题目](https://github.com/liuxilei/JavaScript-study/blob/master/front-end-interview/03/img/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E5%B8%B8%E8%A7%81%E9%A2%98%E7%9B%AE.png)
#### typeof
![typeof](https://github.com/liuxilei/JavaScript-study/blob/master/front-end-interview/03/img/typeof.png)