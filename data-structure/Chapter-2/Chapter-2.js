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
numbers.shift();
console.log(numbers);  //[9, 9, 0, 1, 3, 4, 4, 6, 7]
numbers.pop();
console.log(numbers);  //[9, 9, 0, 1, 3, 4, 4, 6]
//splice方法参数一为截取索引位置开头部分，参数二表示截取元素个数
numbers.splice(3,2);
console.log(numbers);  //[9, 9, 0, 4, 4, 6]
//再把删除的[1,3]重新插入进去
numbers.splice(3,0,1,3);
console.log(numbers);  //[9, 9, 0, 1, 3, 4, 4, 6]
numbers.splice(5,3,2,3,4);
console.log(numbers);  //[9, 9, 0, 1, 3, 2, 3, 4] 从第六位数字开始截取，截取3个数字，然后用[2，3，4]从索引为5的地方插入
