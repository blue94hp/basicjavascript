/**
 * Created by anhtuan on 31/03/2018
 */

var fs = require('fs');

try {
    console.log(fs.readFileSync("text.txt").toString());
    console.log(">>>> end read file");

} catch (err) {
    console.log(">>>> Error: ", err);
}