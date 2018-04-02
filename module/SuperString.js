/**
 * Created by anhtuan on 02/04/2018
 */
module.exports.invert = function (input) {
    if(input == null || input.length == 0){
        return "Empty input string";
    }
    var result = '';
    for (let i = input.length - 1; i >= 0; i--) {
        result += input.charAt(i);
    }
    return result;
};

module.exports.convertToCamelCase = function (input) {
    if(input == null || input.length == 0){
        return "Empty input string";
    }
    var result = '';
    var preChar = '';
    for (let i = 0; i < input.length ; i++) {
        if(preChar == ' ' || i == 0){
            result += input.charAt(i).toUpperCase();
        } else {
            result += input.charAt(i);
        }
        preChar = input.charAt(i);
    }
    return result;
};

module.exports.getLongestWord = function (input) {
    var words = input.split(' ');
    var maxLength = 0;
    var index = 0;
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > maxLength){
            maxLength = words[i].length;
            index = i;
        }
    }
    return words[index];
};