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


console.log("isString: ", true, TypeTester("String")("tester"));
console.log("isNumber : ", true, TypeTester("Number")(1));
console.log("isBoolean : ", true, TypeTester("Boolean")(true));
console.log("isDate : ", false, TypeTester("Date")(Date.now()));
console.log("isDate : ", true, TypeTester("Date")(new Date(Date.now())));
console.log("isArray : ", true, TypeTester("Array")([1, 2, 3]));
console.log("isRegExp : ", true, TypeTester("RegExp")(new RegExp(/^d/g)));
console.log("isRegExp : ", true, TypeTester("RegExp")(/^d/));
console.log("isError : ", false, TypeTester("Error")(Error));
console.log("isError : ", true, TypeTester("Error")(new Error("Tester")));
console.log("isSymbol : ", true, TypeTester("Symbol")(Symbol("Tester")));
console.log("isArrayBuffer : ", false, TypeTester("ArrayBuffer")([]));
console.log("isArrayBuffer : ", false, TypeTester("ArrayBuffer")(Buffer.from([])));
console.log("isArrayBuffer : ", true, TypeTester("ArrayBuffer")(new ArrayBuffer([])));
console.log("isFunction : ", true, TypeTester("Function")(() => { }));
console.log("isDataView : ", false, TypeTester("DataView")([]));
console.log("hasObjectTag : ", true, TypeTester("Object")({ "sc": 10 }));
