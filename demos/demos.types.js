/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { tagTester,
  isBoolean,
  isObject,
  isNull,
  isUndefined,
  isElement,
  isString,
  isNumber,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isArrayBuffer,
  isFunction,
  isDataView,
  hasDataViewBug,
  isValidDataView,
  hasObjectTag,
  isBufferLike } = require('../index');


console.log("isString: ", true, isString("tester"))
console.log("isNumber : ", true, isNumber(1))
console.log("isBoolean : ", true, isBoolean(true))
console.log("isDate : ", false, isDate(Date.now()))
console.log("isDate : ", true, isDate(new Date(Date.now())))
var isArray = tagTester("Array");
console.log("isArray : ", true, isArray([1, 2, 3]))
console.log("isRegExp : ", true, isRegExp(new RegExp(/^d/g)))
console.log("isRegExp : ", true, isRegExp(/^d/))
console.log("isError : ", false, isError(Error))
console.log("isError : ", true, isError(new Error("Tester")))
console.log("isSymbol : ", true, isSymbol(Symbol("Tester")))
console.log("isArrayBuffer : ", false, isArrayBuffer([]))
console.log("isArrayBuffer : ", false, isArrayBuffer(Buffer.from([])))
console.log("isArrayBuffer : ", true, isArrayBuffer(new ArrayBuffer([])))
console.log("isFunction : ", true, isFunction(() => { }))
console.log("isDataView : ", false, isDataView([]))
console.log("hasObjectTag : ", true, hasObjectTag({ "sc": 10 }))
