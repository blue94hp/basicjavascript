/**
 * Created by anhtuan on 02/04/2018
 */
var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'text.txt');

// console.log(__dirname);
// console.log(path.dirname(filePath));
// console.log(path.basename(filePath));
// console.log(path.basename(filePath,'.txt'));
// console.log(path.extname(filePath));
// console.log(path.resolve(filePath,'..'));
//
// fs.stat(filePath,function (err,stats) {
//     if (err) {
//         return console.log("Error");
//     }
//     if(stats.isDirectory()){
//         console.log("Directory");
//     }
//     if(stats.isFile()){
//         console.log("file");
//     }
// });

// var stats = fs.statSync("../");
// console.log(stats);

// fs.readdir('./',function (err,listFiles) {
//     console.log(listFiles);
// })

var fileName = 'fs.js';
fs.readdir('./', function (err, listFiles) {
    for (let i = 0; i < listFiles.length; i++) {
        var dir = path.join(__dirname, listFiles[i]);
        if (path.basename(dir) === fileName) {
            console.log("Find file in directory");
            return;
        }
    }
    ;
    console.log("Cannot find file");
});