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

var supportsArrayBuffer = () => typeof ArrayBuffer !== 'undefined',
  ObjProto = Object.prototype,
  toString = ObjProto.toString,
  supportsDataView = () => typeof DataView !== 'undefined',
  nativeIsArrayBufferView = supportsArrayBuffer() && ArrayBuffer.isView;

// Sample Usage for 
var isArrayBuffer = tagTester('ArrayBuffer');
var isFunction = tagTester('Function');
var isDataView = tagTester('DataView');
var hasObjectTag = tagTester('Object');

function alternateIsDataView(obj) {
  return obj != null && isFunction$1(obj.getInt8) && isArrayBuffer(obj.buffer);
}

var hasDataViewBug = (
  supportsDataView() && (!/\[native code\]/.test(String(DataView)) || hasObjectTag(new DataView(new ArrayBuffer(8))))
)

var isValidDataView = (hasDataViewBug ? alternateIsDataView : isDataView);

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

if (!isBrowser()) {
  
  module.exports = {
    tagTester,
    isArrayBuffer,
    isFunction,
    isDataView,
    hasDataViewBug,
    isValidDataView,
    hasObjectTag,
    isBufferLike
  }

  module.exports.default = {
    tagTester,
    isArrayBuffer,
    isFunction,
    isDataView,
    hasDataViewBug,
    isValidDataView,
    hasObjectTag,
    isBufferLike
  }
}
