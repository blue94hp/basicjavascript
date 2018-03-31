/**
 * Created by anhtuan on 29/03/2018
 */

function Person(first,last,sex,age) {
    this.firstName = first;
    this.lastName = last;
    this.sex = sex;
    this.age = age;
}

var me = new Person("Anh","Tuan","male",23);
console.log(me);

Person.prototype.showInfo = function () {
    console.log("name : ",this.firstName,this.lastName, "age: ",this.age, "sex :",this.sex);
}

me.showInfo();

var s = new String("Hello");
console.log(s);