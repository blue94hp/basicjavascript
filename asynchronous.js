/**
 * Created by anhtuan on 31/03/2018
 */

var fs = require("fs");

fs.readFile("text.txt",function (err,data) {
    if(!err){
        console.log(data.toString());
    }
});

console.log(">>> End reading file");