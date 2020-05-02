### 学习目标
- 了解javascript组成部分
- 认识javascript解析机制
- 如何使用javascript

> javascript是一种专为与网页交互设计的脚本语言，由三部分组成：
- ECMAScript(ECMA-262定义)提供核心语言功能
- 文档对象模型（DOM）提供访问和操作网页内容的方法和接口
- 浏览器对象模型（BOM）提供与浏览器交互的方法和接口


1. 对JavaScript是一种可以与HTML标记语言混合使用的脚本语言，其编写的程序可以直接在浏览器中解释执行
2. JavaScript是一种解释型语言（预编译、执行）
3. JavaScript的国际标准是ECMAScript.
    - 语法、类型、语句、关键字、保留字、操作符、对象
4. 如何使用javascript
    - 在HTML文档中插入脚本语言可以使用`<script>`标记
    - `<script>`标记可以置与页面任意位置，一般定义在`<head>`标签中`<script>`标记属性
    - type、src、defer、charset

```javascript
window.alert('hello world');
document.write('hello world');
console.log('hello world');
```