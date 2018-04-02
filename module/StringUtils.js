/**
 * Created by anhtuan on 31/03/2018
 */
String.prototype.reverse = function () {
    var result = "";
    for (let i = this.length; i >= 0; i--) {
        result += this.charAt(i);
    }
    return result;
};

String.prototype.camelcase = function () {
    var result = "";
    var preChar = undefined;
    for (let i = 0; i < this.length; i++) {
        var curChar = this.charAt(i);
        if (i == 0 || preChar == " ") {
            result += curChar.toUpperCase();
        } else {
            result += curChar;
        }
        preChar = curChar;
    }
    return result;
};

module.exports = String;