//栈：后进先出
//push(element(s)):添加一个(或几个)新元素到栈顶
//pop():移除栈顶的元素，同时返回被移除的元素
//peek():返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)
//isEmpty():如果栈里没有任何元素就返回true,否则返回false
//clear():移除栈里的所有元素
//size():返回栈里的元素个数。这个方法和数组的length属性很类似
function Stack () {
	//各种属性和方法的声明
	let items = [];
	this.push = function(element) {
		items.push(element);
	};
	this.pop = function() {
		return items.pop();
	};
	this.peek = function() {
		return items[items.length - 1];
	};
	this.isEmpty = function() {
		return items.length == 0;
	};
	this.size = function() {
		return items.length;
	}
	this.clear = function() {
		items = [];
	}
	//辅助方法
	this.print = function() {
		console.log(items.toString());
	}
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();

//实际应用
//从十进制到二进制
function divideBy2(decNumber) {
	let remStack = new Stack();
	let rem;
	let binaryString = '';
	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);   //Math.floor方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}
	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}
//另外请注意：JavaScript有数字类型，但是它不会区分究竟是整数还是浮点数。因此，要使用Math.floor函数让除法的操作仅返回整数部分
console.log(divideBy2(233)); //11101001
console.log(divideBy2(10)); //1010
console.log(divideBy2(1000)); //1111101000

function baseConverter(decNumber,base) {
	let remStack = new Stack();
	let rem;
	let baseString = '';
	let digits = '0123456789ABCDEF';
	while (decNumber > 0) {
		rem = Math.floor(decNumber % base);  
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while (!remStack.isEmpty()) {
		baseString += digits[remStack.pop()];
	}
	return baseString;
}
console.log(baseConverter(100345,2));
console.log(baseConverter(100345,8));
console.log(baseConverter(100345,16));
