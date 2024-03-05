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


const { expect } = require('chai');
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


describe('[is typed array tests] index.js Tests to check the type of an object using tagTester', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  // isTypedArray,
  // isBufferLike,
  // supportsArrayBuffer,
  // toString,
  // supportsDataView,
  // nativeIsArrayBufferView,
  // isTypedArrayUsingPattern,
  // toBufferView,
  // getShallowProperty,
  // tagTester

  it('should get String type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isString = tagTester('String');
    expect(isString("tester")).to.equal(expected);
  });

  it('should get Number type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isNumber = tagTester('Number');
    expect(isNumber(1)).to.equal(expected);
  });

  it('should get Boolean type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isBoolean = tagTester('Boolean');
    expect(isBoolean(true)).to.equal(expected);
  });

  it('should get Date type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isDate = tagTester('Date');
    expect(isDate(Date.now())).to.equal(!expected);
    expect(isDate(new Date(Date.now()))).to.equal(expected);
  });

  it('should get Array type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isArray = tagTester('Array');
    expect(isArray([1,2,3])).to.equal(expected);
  });
  it('should get Array type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isRegExp = tagTester('RegExp');
    expect(isRegExp(new RegExp(/^d/g))).to.equal(expected);
    expect(isRegExp(/^d/)).to.equal(expected);
  });

  it('should get Error type checker using tagTester', () => {
    let actual = true;
    let expected = true;
    var isError = tagTester('Error');
    expect(isError(Error)).to.equal(!expected); // false not instantiated class
    expect(isError(new Error("Tester"))).to.equal(expected);
  });

  it('should get Symbol type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isSymbol = tagTester('Symbol');
    expect(isSymbol(Symbol("Tester"))).to.equal(expected);
  });

  it('should get ArrayBuffer type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isArrayBuffer = tagTester('ArrayBuffer');
    expect(isArrayBuffer([])).to.not.equal(expected); // false // is an array not ArrayBuffer
    expect(isArrayBuffer(Buffer.from([]))).to.not.equal(expected);
    expect(isArrayBuffer(new ArrayBuffer([]))).to.equal(expected);
  });

  it('should get Function type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isFunction = tagTester('Function');
    expect(isFunction(()=>{})).to.equal(expected);
  });

  it('should get DataView type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var isDataView = tagTester('DataView');
    expect(isDataView([])).to.equal(!expected);
  });

  it('should get Object type checker using tagTester', () => {
    let actual = true;
    let expected = true;

    var hasObjectTag = tagTester('Object');
    expect(hasObjectTag({"sc": 10 })).to.equal(expected);
  });

});
