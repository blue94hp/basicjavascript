/**
 * Created by anhtuan on 01/04/2018
 */
const foo = require('./foo');
// console.log(foo);
// foo.sayHelloInEnglish();

const superString = require('./SuperString');
/*
console.log(superString.invert(''));
console.log(superString.convertToCamelCase('Hello world'));
console.log(superString.getLongestWord('Hello World I\'m JavaS'));*/

var me = new foo.Person('Tuan');
me.sayHello();

class Child extends foo.Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayHello() {
        console.log('Name: ' + this.name + ' Age: ' + this.age);
    }
}

var child = new Child('Ngoc Anh',14);
child.sayHello();