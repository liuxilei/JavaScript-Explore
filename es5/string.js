//字符串操作方法
//concat(),用于将一或多个字符串拼接起来，返回拼接得到的新字符串。
//eg
var stringValue = "hello ";
var result = stringValue.concat('world');
console.log(result); //hello world
console.log(stringValue); //hello 
//实际上，concat()方法可以接受任意多个参数，也就是说可以通过它拼接多个字符串。
//eg
var stringValue = 'hello ';
var result = stringValue.concat("world","!");
console.log(result); //hello world!
console.log(stringValue); //hello 
//虽然concat()是专门用来拼接字符串的方法，但实践中使用更多的还是加号操作符(+)。而且，使用加号操作符在大多数情况下都比使用concat()方法要简便易行

//ECMAScript还提供了三个基于子符串创建新字符串的方法:slice()、substr()、和substring(),这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。。
//slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。而substr()的第二个参数指定的则是返回的字符个数。如果没有给这些方法传递第二个参数，则将字符串的末尾作为结束位置。与
//concat()方法一样，slice()、substr和substring()也不会修改字符串本身的值————它们只是返回一个基本类型的字符串值，对原始字符没有任何影响。
var stringValue = "hello world";
console.log(stringValue.slice(3)); //lo world
console.log(stringValue.substring(3)); //lo world
console.log(stringValue.substr(3)); //lo world
console.log(stringValue.slice(3,7)); //lo w
console.log(stringValue.substring(3,7)); //lo w
console.log(stringValue.substr(3,7)); //lo worl

//在传递给这些方法的参数是负值的情况下，它们的行为就不尽相同了。其中，slice()方法会将传入的负值与字符串的长度相加，substr()方法
//将负的第一个参数加上字符串的长度，而将负的第二个参数转换为0。最后，substring()方法会把所有负值参数都转换为0
var stringValue = "hello world";
console.log(stringValue.slice(-3)); //rld
console.log(stringValue.substring(-3)); //hello world
console.log(stringValue.substr(-3)); //rld
console.log(stringValue.slice(3,-4)); //lo w
console.log(stringValue.substring(3,-4)); //hel   ！！！由于这个方法会将较小的数作为开始位置，将较大的数作为结束位置，因此最终相当于调用了substring(0,3)
console.log(stringValue.substr(3,-4)); //"" (空字符串)
