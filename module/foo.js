/**
 * Created by anhtuan on 01/04/2018
 */
module.exports = {
    something: 123,
    sayHelloInEnglish: function () {
        console.log("hello");
    },
    sayHelloInVietnam: function () {
        console.log("Chao");
    }
};

module.exports.Person = class {
    constructor(name) {
        this.name = name;
    }
    sayHello(){
        console.log('Hello I\'m ' + this.name);
    }
};