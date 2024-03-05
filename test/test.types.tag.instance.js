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


const { expect } = require('chai');
const { TagTester,
  TypeTester,
  isBufferLike 
} = require('../index');


describe('[is typed array tests] index.js Tests to check the type of an object using TypeTester', () => {
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
  // TypeTester

  it('should get String type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isString = TypeTester('String');
    expect(isString("tester")).to.equal(expected);
  });

  it('should get Number type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isNumber = TypeTester('Number');
    expect(isNumber(1)).to.equal(expected);
  });

  it('should get Boolean type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isBoolean = TypeTester('Boolean');
    expect(isBoolean(true)).to.equal(expected);
  });

  it('should get Date type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isDate = TypeTester('Date');
    expect(isDate(Date.now())).to.equal(!expected);
    expect(isDate(new Date(Date.now()))).to.equal(expected);
  });

  it('should get Array type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isArray = TypeTester('Array');
    expect(isArray([1, 2, 3])).to.equal(expected);
  });
  it('should get Array type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isRegExp = TypeTester('RegExp');
    expect(isRegExp(new RegExp(/^d/g))).to.equal(expected);
    expect(isRegExp(/^d/)).to.equal(expected);
  });

  it('should get Error type checker using TypeTester', () => {
    let actual = true;
    let expected = true;
    var isError = TypeTester('Error');
    expect(isError(Error)).to.equal(!expected); // false not instantiated class
    expect(isError(new Error("Tester"))).to.equal(expected);
  });

  it('should get Symbol type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isSymbol = TypeTester('Symbol');
    expect(isSymbol(Symbol("Tester"))).to.equal(expected);
  });

  it('should get ArrayBuffer type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isArrayBuffer = TypeTester('ArrayBuffer');
    expect(isArrayBuffer([])).to.not.equal(expected); // false // is an array not ArrayBuffer
    expect(isArrayBuffer(Buffer.from([]))).to.not.equal(expected);
    expect(isArrayBuffer(new ArrayBuffer([]))).to.equal(expected);
  });

  it('should get Function type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isFunction = TypeTester('Function');
    expect(isFunction(() => { })).to.equal(expected);
  });

  it('should get DataView type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var isDataView = TypeTester('DataView');
    expect(isDataView([])).to.equal(!expected);
  });

  it('should get Object type checker using TypeTester', () => {
    let actual = true;
    let expected = true;

    var hasObjectTag = TypeTester('Object');
    expect(hasObjectTag({ "sc": 10 })).to.equal(expected);
  });

});
