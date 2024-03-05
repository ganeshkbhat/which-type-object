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

function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function (obj) {
    return toString.call(obj) === tag;
  };
}

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

// Sample Usage for 
var isArrayBuffer = tagTester('ArrayBuffer');
var isFunction = tagTester('Function');
var isDataView = tagTester('DataView');
var isTagObject = tagTester('Object');

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
      nativeIsArrayBufferView ? (nativeIsArrayBufferView(obj) && !isDataView(obj)) :
        isBufferLike(obj) && typedArrayPattern.test(toString.call(obj))
    ) : false;
}

function alternateIsDataView(obj) {
  return obj != null && isFunction(obj.getInt8) && isArrayBuffer(obj.buffer);
}

var hasDataViewBug = (
  supportsDataView() && (!/\[native code\]/.test(String(DataView)) || isTagObject(new DataView(new ArrayBuffer(8))))
)

var isValidDataView = (hasDataViewBug ? alternateIsDataView : isDataView);

if (!isBrowser()) {

  module.exports = {
    tagTester,
    isArrayBuffer,
    isFunction,
    isDataView,
    nativeIsArrayBufferView,
    hasDataViewBug,
    isValidDataView,
    isTagObject,
    isBufferLike,
    isTypedArray
  }

  module.exports.default = {
    tagTester,
    isArrayBuffer,
    isFunction,
    isDataView,
    nativeIsArrayBufferView,
    hasDataViewBug,
    isValidDataView,
    isTagObject,
    isBufferLike,
    isTypedArray
  }
}
