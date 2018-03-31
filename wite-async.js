/**
 * Created by anhtuan on 31/03/2018
 */

var addSync = function (a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid Input");
    }
    return a + b;
};

var addAsync = function (a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        return callback(new Error("Invalid Input"), null);
    }
    return callback(null, a + b);
};

console.log(addSync(3,4));
addAsync(3,4,function (err,data) {
    if(err){
        console.log(err.message);
    }
    console.log(data);
})

