{
    console.log(0b111110111);
    console.log(0o767);
}

{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));
    console.log('NaN',Number.isNaN(NaN));
}

{
    console.log('25',Number.isInteger(25));//判断这个数是不是一个整数
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25.1字符串',Number.isInteger('25.1'));
}

{
    console.log('最大上限:',Number.MAX_SAFE_INTEGER,'最小下限:',Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
    console.log('a',Number.isSafeInteger('a'));
}

{
    console.log('4.1',Math.trunc(4.1));//取小数的整数部分
    console.log('4.9',Math.trunc(4.9));
}

{
    //判断是否为正数、负数、0 返回值分别为1、-1、0
    console.log('-5',Math.sign(-5));
    console.log('0',Math.sign(0));
    console.log('5',Math.sign(5));
    console.log('50',Math.sign('50'));//自动把'50'字符串转换为数值再进行判断
    console.log('foo',Math.sign('foo'));
}

{
    //立方根
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}