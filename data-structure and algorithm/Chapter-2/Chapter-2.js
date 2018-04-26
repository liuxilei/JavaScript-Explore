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

//向数组头部添加一个值，正常思路是，将数组中每一个值都往右移一位
{
	console.log('数组头部添加值，常规操作');
	let numbers = [0,1,2,3,4,5,6,7];
	for (let i = numbers.length;i >= 0;i--) {  //这里i>0的话，产生的值numbers[0] === numbers[1] === 0,i>=0的话，numbers[0] === undefined  
		numbers[i] = numbers[i-1];
	}
	console.log(numbers);
	numbers[0] = 'test';
	console.log(numbers);
	console.log('----------------------------');
}
//unshift把数值插入数组的首位
numbers.unshift(9);
console.log(numbers); //[9, 0, 1, 3, 4, 4, 6, 7]
numbers.unshift(9,9);
console.log(numbers); //[9, 9, 9, 0, 1, 3, 4, 4, 6, 7] 也可以添加多个值
console.log('----------------------------------------');
{
	console.log('删除数组第一个值');
	//把数组每一个值向左移一位
	//缺陷：数组长度不变，最后一位为undefined
	let numbers = [1,2,3,4,5,6,7];
	for (let i = 0;i < numbers.length;i++) {
		numbers[i] = numbers[i+1];
	}
	console.log(numbers);
	console.log('----------------------------');
}
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

//二维和多维数组
{
	//第一种写法
	let averageTemp = [];
	averageTemp[0] = [72,75,79,79,81,81];
	averageTemp[1] = [81,79,75,75,73,72];
	console.log(averageTemp);
}
{
	//第二种写法
	//day 1
	averageTemp = [];
	averageTemp[0] = [];
	averageTemp[0][0] = 72;
	averageTemp[0][1] = 75;
	averageTemp[0][2] = 79;
	averageTemp[0][3] = 79;
	averageTemp[0][4] = 81;
	averageTemp[0][5] = 81;
	averageTemp[1] = [];
	averageTemp[1][0] = 81;
	averageTemp[1][1] = 79;
	averageTemp[1][2] = 75;
	averageTemp[1][3] = 75;
	averageTemp[1][4] = 73;
	averageTemp[1][5] = 72;
	console.log(averageTemp);
	
	//遍历输出二维数组函数
	function printMatrix(myMatrix) {
		for (let i = 0;i < myMatrix.length;i++) {
			for (let j = 0;j < myMatrix[i].length;j++) {
				console.log(myMatrix[i][j]);
			}
		}
	}
	printMatrix(averageTemp);
}
{
	//假如我们要创建一个3x3的矩阵，每一格里包含矩阵的i(行)、j(列)、及z(深度)之和:
	let matrix3x3x3 = [];
	for (let i = 0;i < 3;i++) {
		matrix3x3x3[i] = [];
		for (let j = 0;j < 3;j++) {
			matrix3x3x3[i][j] = [];
			for (let z = 0;z < 3;z++) {
				matrix3x3x3[i][j][z] = i + j + z;
			}
		}
	}
	console.log(matrix3x3x3);
	//遍历输出
	for (let i = 0;i < matrix3x3x3.length;i++) {
		for (let j = 0;j < matrix3x3x3[i].length;j++) {
			for (let z = 0;z < matrix3x3x3[i][j].length;z++) {
				console.log(matrix3x3x3[i][j][z]);
			}
		}
	}
}
{
	//数组合并
	let zero = 0;
	let positiveNumbers = [1,2,3];
	let negativeNumbers = [-3,-2,-1];
	let numbers = negativeNumbers.concat(zero,positiveNumbers);
	console.log(numbers);
}
{
	//迭代器函数
	//JavaScript内置了许多数组可用迭代方法
	//假如有一个数组，它值是从1到15，如果数组里的元素可以被2整除(偶数)，函数就返回true，否则返回false
	let isEven = function(x) {
		//如果X是2的倍数，就返回ture
		return (x % 2 == 0) ? true : false
	};
	let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	//return (x % 2 == 0) ? true : false也可以写成return (x % 2 == 0)
	console.log(numbers.every(isEven));
	console.log(numbers.some(isEven));
	console.log('------------');
	//如果要迭代整个数组，可以用forEach方法。
	numbers.forEach(function(x) {
		console.log(x % 2 == 0);
	});
	console.log('------------');
	//JavaScript还有两个会返回新数组的遍历方法。第一个是map
	let myMap = numbers.map(isEven);
	console.log(myMap);
	//还有一个filter方法。它返回的新数组由函数返回true的元素组成:
	let evenNumbers = numbers.filter(isEven);
	console.log(evenNumbers);
	//最后是reduce方法。reduce方法接收一个函数作为参数，这个函数有四个参数：previousValue、currentValue、index和array。这个函数会返回一个将被叠加到累加器的值，reduce方法停止执行后会返回这个累加器。如果要对一个数组中的所有元素求和，这就很有用，比如:
	let sum = numbers.reduce(function(previous,current,index) {
		return previous + current;
	});
	console.log(sum);
}
{
	//搜索和排序
	//反序输出数组
	let num = [0,1,2,3,4];
	console.log(num.reverse());
	//排序
	let nums = [0,1,8,6,12,14];
	console.log(nums.sort(function(a,b) {
		return a - b;
	}));
	function compare(a,b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	}
	console.log(nums.sort(compare));
}
{
	//自定义排序(根据年龄排序)
	let friends = [
		{name: 'John',age: 30},
		{name: 'Ana',age: 20},
		{name: 'Chris',age: 25}
	];
	function comparePerson(a,b) {
		if (a.age < b.age) {
			return -1;
		}
		if (a.age > b.age) {
			return 1;
		}
		return 0;
	}
	console.log(friends.sort(comparePerson));
}
{
	//字符串排序
	let names = ['Ana','ana','john','John'];
	console.log(names.sort());
	//JavaScript在做字符串比较的时候，是根据字符对应的ASCII值来比较的
	//传入一个忽略大小写的比较函数
	console.log(names.sort(function(a,b) {
		if (a.toLowerCase() < b.toLowerCase()) {
			return -1;
		}
		if (a.toLowerCase() > b.toLowerCase()) {
			return 1;
		}
		return 1;
	}))
}
{
	//搜索
	//indexOf方法返回与参数匹配的第一个元素的索引，lastIndexOf返回与参数匹配的最后一个元素的索引。
	let num = [1,2,3,4,5,6];
	console.log(num.indexOf(5));
	console.log(num.indexOf(10));
	console.log(num.lastIndexOf(3));
}
{
	//输入数组为字符串
	//toString和join
	//如果想把数组里所有元素输出为一个字符串，可以用toString方法:
	let num = [1,42,5,3,9,12];
	console.log(num.toString());
	//如果想用一个不同的分隔符把元素隔开，可以用join方法:
	console.log(num.join('-'));
	//如果要把数组内容发送给服务器，或进行编码(知道了分隔符，解码也很容易)，这会很有用。
}