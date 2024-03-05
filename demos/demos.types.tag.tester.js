/**
 * 
 * Package: which-type-object
 * Author: Ganesh B
 * Description: 
 * Install: npm i which-type-object --save
 * Github: https://github.com/ganeshkbhat/which-type-object
 * npmjs Link: https://www.npmjs.com/package/which-type-object
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const { 
  TagTester,
  TypeTester,
  isBufferLike 
} = require('../index');


console.log("isString: ", true, TagTester("String")("tester"));
console.log("isNumber : ", true, TagTester("Number")(1));
console.log("isBoolean : ", true, TagTester("Boolean")(true));
console.log("isDate : ", false, TagTester("Date")(Date.now()));
console.log("isDate : ", true, TagTester("Date")(new Date(Date.now())));
console.log("isArray : ", true, TagTester("Array")([1, 2, 3]));
console.log("isRegExp : ", true, TagTester("RegExp")(new RegExp(/^d/g)));
console.log("isRegExp : ", true, TagTester("RegExp")(/^d/));
console.log("isError : ", false, TagTester("Error")(Error));
console.log("isError : ", true, TagTester("Error")(new Error("Tester")));
console.log("isSymbol : ", true, TagTester("Symbol")(Symbol("Tester")));
console.log("isArrayBuffer : ", false, TagTester("ArrayBuffer")([]));
console.log("isArrayBuffer : ", false, TagTester("ArrayBuffer")(Buffer.from([])));
console.log("isArrayBuffer : ", true, TagTester("ArrayBuffer")(new ArrayBuffer([])));
console.log("isFunction : ", true, TagTester("Function")(() => { }));
console.log("isDataView : ", false, TagTester("DataView")([]));
console.log("hasObjectTag : ", true, TagTester("Object")({ "sc": 10 }));
