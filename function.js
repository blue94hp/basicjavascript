/**
 * Created by anhtuan on 29/03/2018
 */

function cong(a , b) {
    return a + b;
}

var add = cong;

add.description = function () {
    console.log("Function add two numbers");
};

function arithmetic(operator){
    switch (operator){
        case "+":
            return add;
        case "-":
            return function (a,b) {
                return a-b;
            }
    }
};

var x = arithmetic("-")(20,10);
console.log(x);

var numberObj = function (val) {
    var value = parseFloat(val);
    return{
        absolute: function () {
            return value > 0 ? value : -value;
        },
        square: function () {
            return value * value;
        }
    }
};
console.log(numberObj(10).square());
