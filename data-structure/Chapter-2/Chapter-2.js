//数组保存斐波那契数前20个
console.log("斐波那契数前20个数");
let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2;i < 20;i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);
//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]

//在JavaScript中，数组是一个可以修改的对象。如果添加对象，它就会动态增长。
console.log('----------------------------------------');
console.log('数组方法');
console.log('数组添加方法：push和unshift');
//添加元素
//push 向数组尾部添加元素
let numbers = [0,1,3,4];
numbers.push(4);
console.log(numbers); //[0, 1, 3, 4, 4]
numbers.push(6,7);
console.log(numbers); //[0, 1, 3, 4, 4, 6, 7] 可以添加多个值
//unshift把数值插入数组的首位
numbers.unshift(9);
console.log(numbers); //[9, 0, 1, 3, 4, 4, 6, 7]
numbers.unshift(9,9);
console.log(numbers); //[9, 9, 9, 0, 1, 3, 4, 4, 6, 7] 也可以添加多个值
console.log('----------------------------------------');
console.log('数组删除方法:pop和shift');
//删除元素
//pop删除元素最靠后的值
//push和pop可以模仿栈
//shift删除元素第一个元素
//shift和unshift可以模仿队列