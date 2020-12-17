/**
 * Created by Administrator on 2017/11/27.
 */


/*
*   构造函数就是一个一群对象方法和属性共享的机制
*1. prototype也就是构造函数的扩展，实现属性和方法共享
*
*
* */
function  person(name) { //基类构造函数
    this.name = name;
}

person.prototype.sayHello = function () {  //为person添加一个方法
    console.log(this.name);
}

 function Employee(name,salary) {  //子类构造函数
     person.call(this,name);  //调用基类构造函数
     this.salary = salary;
}
Employee.prototype = new person();  //建一个基类对象作为子类原型,目的通过子类对象可以调用基类的方法

Employee.prototype.showAll = function () { //为子类添加构造函数
    console.log(this.name+ '$'+this.salary);
}

var fn= new person('Bill Gates');
var p = new Employee('Steve','12345');

fn.sayHello();
p.sayHello();
p.showAll();

console.log(fn.sayHello == p.sayHello)