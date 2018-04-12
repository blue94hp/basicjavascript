/**

 * Created by anhtuan on 28/03/2018
 */
// var age =10;
// const pi = 3.14;
//
// if (parseInt(age)){
//     console.log("Age is number");
// }
//
// var my_age = "23";
// var my_age_2 = parseInt(my_age);
// var person = {name:"Anh Tuan", age:23};
// console.log(person["name"]);
// var name = `B'ba`
// console.log(name);

var quotes = "Darkness cannot drive out darkness; " +
    "only light can do that. " +
    "Hate cannot drive out hate; " +
    "only love can do that.";
console.log(quotes);

var first_index = quotes.indexOf("only");
var last_index = quotes.lastIndexOf("only");
var reg_index = quotes.search("ca..");
console.log(reg_index);

var contact = "phone 01228473599 Tuan";
console.log(contact.split(" ")[1].split("")[0]);
console.log(contact.search(/[0-9]+/));

var iLove = "I love PHP,php";
console.log(iLove.replace(/PHP/ig,"Nodejs"));
// console.log(iLove.splice(2,1));

String.prototype.reverse = function () {
    var result = "";
    for (let i = this.length; i >=0; i--) {
        result += this.charAt(i);
    }
    return result;
};
console.log("LOVE".reverse());
console.log(Math.round(Math.random()*100%4));
