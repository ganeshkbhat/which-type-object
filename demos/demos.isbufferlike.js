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


console.log("isBufferLike: Number", false, isBufferLike(12));
console.log("isBufferLike: Number String", false, isBufferLike("23"));
console.log("isBufferLike: String", false, isBufferLike("23Test"));
console.log("isBufferLike: NaN", false, isBufferLike(NaN));
console.log("isBufferLike: undefined", false, isBufferLike(undefined));
console.log("isBufferLike: true", false, isBufferLike(true));
console.log("isBufferLike: false", false, isBufferLike(false));
console.log("isBufferLike: `test`", false, isBufferLike(`test`));
console.log("isBufferLike: [1,2,3,4]", false, isBufferLike([1,2,3,4]));
console.log("isBufferLike: [1.2, 4, 6, 10]", false, isBufferLike([1.2, 4, 6, 10]));
console.log("isBufferLike: {}", false, isBufferLike({}));
console.log("isBufferLike: { test: 10 }", false, isBufferLike({ test: 10 }));
console.log("isBufferLike: new Set()", false, isBufferLike(new Set()));
console.log("isBufferLike: new Set([])", false, isBufferLike(new Set([])));
console.log("isBufferLike: new Set([1,2,3])", false, isBufferLike(new Set([1,2,3])));
console.log("isBufferLike: () => 1", false, isBufferLike(() => 1));
console.log("isBufferLike: (s) => s", false, isBufferLike((s) => s));
console.log("isBufferLike: () => {}", false, isBufferLike(() => {}));
console.log("isBufferLike: function() {}", false, isBufferLike(function() {}));
console.log("isBufferLike: function test() {}", false, isBufferLike(function test() {}));
console.log("isBufferLike: new ArrayBuffer(10)", true, isBufferLike(new ArrayBuffer(10)));
console.log("isBufferLike: new ArrayBuffer([])", true, isBufferLike(new ArrayBuffer([])));
console.log("isBufferLike: new ArrayBuffer(new Int16Array(6))", true, isBufferLike(new ArrayBuffer(new Int16Array(6))));
console.log("isBufferLike: new ArrayBuffer(new Uint32Array(6))", true, isBufferLike(new ArrayBuffer(new Uint32Array(6))));
console.log("isBufferLike: new ArrayBuffer(new BigInt64Array(6))", true, isBufferLike(new ArrayBuffer(new BigInt64Array(6))));
console.log("isBufferLike: new ArrayBuffer(new BigUint64Array(6))", true, isBufferLike(new ArrayBuffer(new BigUint64Array(6))));
console.log("isBufferLike: new ArrayBuffer(new Float32Array(6))", true, isBufferLike(new ArrayBuffer(new Float32Array(6))));
console.log("isBufferLike: new ArrayBuffer('test')", true, isBufferLike(new ArrayBuffer("test")));
console.log("isBufferLike: new ArrayBuffer('')", true, isBufferLike(new ArrayBuffer("")));
// console.log("isBufferLike: ", false, isBufferLike());
// console.log("isBufferLike: ", false, isBufferLike());

