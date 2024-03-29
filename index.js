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
 * CREDITS: Some sections of the code has been extracted from underscore JS and modified
 * https://underscorejs.org/docs/modules/isDataView.html
 * https://underscorejs.org/docs/modules/_tagTester.html
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

function TagTester(name) {
  var tag = '[object ' + name + ']';
  return function (obj) {
    return toString.call(obj) === tag;
  };
}

function TypeTester(name) {
  return TagTester(name) || TagTester(name) === TagTester(Function("return " + name + ";")(name));
}

// Sample Usage for 
var isTagArrayBuffer = TagTester('ArrayBuffer');
var isTagFunction = TagTester('Function');
var isTagDataView = TagTester('DataView');
var isTagObject = TagTester('Object');

var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

var supportsArrayBuffer = () => typeof ArrayBuffer !== 'undefined',
  ObjProto = Object.prototype,
  toString = ObjProto.toString,
  supportsDataView = () => typeof DataView !== 'undefined',
  nativeIsArrayBufferView = supportsArrayBuffer() && ArrayBuffer.isView;

var nativeIsArray = Array.isArray,
  nativeKeys = Object.keys,
  nativeCreate = Object.create;

var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

var hasDataViewBug = (
  supportsDataView() && (!/\[native code\]/.test(String(DataView)) || isTagObject(new DataView(new ArrayBuffer(8))))
)

if (!nativeIsArrayBufferView) {
  // add polyfill here
}

function getShallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
}

// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function (collection) {
    var sizeProperty = getSizeProperty(collection);
    return (
      typeof sizeProperty == 'number' &&
      sizeProperty >= 0 &&
      sizeProperty <= MAX_ARRAY_INDEX
    );
  };
}

var getByteLength = getShallowProperty('byteLength');
var isBufferLike = createSizePropertyCheck(getByteLength);

function isTypedArray(obj) {
  return (supportsArrayBuffer) ?
    (
      nativeIsArrayBufferView ? (nativeIsArrayBufferView(obj) && !isTagDataView(obj)) :
        isBufferLike(obj) && typedArrayPattern.test(toString.call(obj))
    ) : false;
}

function alternateIsDataView(obj) {
  return obj != null && isTagFunction(obj.getInt8) && isTagArrayBuffer(obj.buffer);
}

var isValidDataView = (hasDataViewBug ? alternateIsDataView : isTagDataView);

if (!isBrowser()) {

  module.exports = {
    TagTester,
    TypeTester,
    isTagArrayBuffer,
    isTagFunction,
    isTagDataView,
    nativeIsArrayBufferView,
    nativeIsArray,
    nativeKeys,
    nativeCreate,
    hasDataViewBug,
    hasEnumBug,
    isValidDataView,
    isTagObject,
    isBufferLike,
    isTypedArray
  }

  module.exports.default = {
    TagTester,
    TypeTester,
    isTagArrayBuffer,
    isTagFunction,
    isTagDataView,
    nativeIsArrayBufferView,
    nativeIsArray,
    nativeKeys,
    nativeCreate,
    hasDataViewBug,
    hasEnumBug,
    isValidDataView,
    isTagObject,
    isBufferLike,
    isTypedArray
  }

}
