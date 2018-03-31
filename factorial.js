/**
 * Created by anhtuan on 29/03/2018
 */

function factorial(n) {
    if(typeof (n) != "number"){
        return NaN;
    }
    if(n === parseInt(n)) {
        if (n <= 1){
            return 1;
        }else{
            return n * factorial(n-1);
        }
    }
}

console.log(factorial(3,1));
console.log(4.43 === parseInt(4.43));