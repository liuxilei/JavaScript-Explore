{
    //基本定义和生成实例
    class Parent {
        constructor(name = 'onePiece') {
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('实例',v_parent);
}

{
    //继承
    class Parent {
        constructor(name = 'onePiece') {
            this.name = name;
        }
    }

    class Child extends Parent {

    }
    console.log('继承',new Child());
}

{
    //继承传递参数
    class Parent {
        constructor(name = 'onePiece') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            super(name);
            this.type = 'child';
        }
    }
    console.log('继承传递参数',new Child('hello'));
}

{
    //getter,setter
    class Parent {
        constructor(name = 'onePiece') {
            this.name = name;
        }
        get longName() {
            return 'lxl' + this.name;
        }
        set longName(value) {
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'hello';
    console.log('setter',v.longName);
}

{
    //静态方法
    class Parent {
         constructor(name = 'onePiece') {
             this.name = name;
         }
         static tell() {
             console.log('tell');
         }
    }
    //静态方法需要类去调用而不是类的实例去调用
    Parent.tell();
}

{
    //静态属性
    class Parent {
        constructor(name = 'onePiece') {
            this.name = name;
        }
        static tell() {
            console.log('tell');
        }
    }
    Parent.type = 'test';
    console.log('静态属性',Parent.type);
}
