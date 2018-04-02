/**
 * Created by anhtuan on 31/03/2018
 */
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require("../module/StringUtils.js");

// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1,2,3].indexOf(4), -1);
//         });
//     });
// });

describe('String',function () {
    describe('reverse',function () {
        it('reverse string "love"', function () {
            expect("love".reverse()).equal("evol");
        });
    });
    describe('reverse',function () {
        it('reverse string "hello"', function () {
            expect("hello".reverse()).equal("olleh");
        });
    });
    describe('camelcase',function () {
        it('camelcase string "hello world"', function () {
            expect("hello world".camelcase()).equal("Hello World");
        });
    })
})