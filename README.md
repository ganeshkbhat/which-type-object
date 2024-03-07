# which-type-object
use which-type-object to detect which type or javascript class instance or object tag an object of javascript is


Demos can be found in [demos](https://github.com/ganeshkbhat/which-type-object/tree/main/demos) folder


### USAGE

```

const { 
  TagTester,
  TypeTester,
  isBufferLike 
} = require('which-type-object');


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

```
