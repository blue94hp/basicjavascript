/**
 * Created by anhtuan on 09/04/2018
 */
var fs = require('fs');
var data = {
    'nodejs': 'http://techmaster.vn/khoa-hoc/nodejs',
    'php': 'http://techmaster.vn/khoa-hoc/php'
};

// fs.open('demo.html', 'r', function (err, fd) {
//     if (err) {
//         return console.log(err);
//     }
//     fs.close(fd);
// });

// fs.readFile('demo.html', {encoding: 'utf8'}, function (err, result) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(result);
// })

// fs.writeFile('text.txt', 'Hello', function (err, result) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('done');
// })

function getIndexsOfKey(input,key,percent){
    var arrIndex = [];
    var index = 0;
    while (true) {
        index = input.indexOf(key, index);
        if (index == -1)
            break;
        arrIndex.push(index);
        index += key.length;
    }
    var max = arrIndex.length - 1;
    for (let i = 0; i < arrIndex.length * percent/100; i++) {
        arrIndex.splice(Math.round(Math.random() * 100 % max), 1);
        max--;
    }
    // console.log(arrIndex.reverse());
    return arrIndex.reverse();
}

fs.readFile('text.txt', {encoding: 'utf8'}, function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log(result);
    var nodeIndex = getIndexsOfKey(result,'nodejs',30);

    for (let i = 0; i < nodeIndex.length; i++) {
        result = [result.slice(0, nodeIndex[i]), data.nodejs, result.slice(nodeIndex[i] + 'nodejs'.length)].join('');
    }
    var phpIndex = getIndexsOfKey(result,'php',30);

    for (let i = 0; i < phpIndex.length; i++) {
        result = [result.slice(0, phpIndex[i]), data.php, result.slice(phpIndex[i] + 'php'.length)].join('');
    }
    console.log(result);

    // console.log(result);
    // var index = result.search("php");
    // console.log(index);
    // var words = result.split(/\s/);
    // var numOfKey = 0;
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i] === 'nodejs' || words[i] === 'php') {
    //         numOfKey++;
    //     }
    // }
    // console.log(numOfKey);
    // var index = 0;
    // var indexOfKey;
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i] === 'nodejs') {
    //         // let link = '<a href="' + data["node.js"] + '" />';
    //         // console.log(link);
    //         // result = result.replace(words[i], link);
    //         indexOfKey.push(i);
    //         index++;
    //     } else if (words[i] === 'php') {
    //         // result = result.replace(words[i], '<a href="' + data["php"] + '" />');
    //         indexOfKey.push(i);
    //         index++;
    //     }
    //     if(index>numOfKey*0.3){
    //         break;
    //     }
    // }
    // for (let i = 0; i < words.length; i++) {
    //
    // }
    // console.log(result);
})

// console.log(data.php);
