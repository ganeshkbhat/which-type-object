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


describe('[is typed array tests] index.js Tests to check the type of an object using TagTester', () => {
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
  // TagTester

  it('should get String type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isString = TagTester('String');
    expect(isString("tester")).to.equal(expected);
  });

  it('should get Number type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isNumber = TagTester('Number');
    expect(isNumber(1)).to.equal(expected);
  });

  it('should get Boolean type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isBoolean = TagTester('Boolean');
    expect(isBoolean(true)).to.equal(expected);
  });

  it('should get Date type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isDate = TagTester('Date');
    expect(isDate(Date.now())).to.equal(!expected);
    expect(isDate(new Date(Date.now()))).to.equal(expected);
  });

  it('should get Array type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isArray = TagTester('Array');
    expect(isArray([1, 2, 3])).to.equal(expected);
  });
  it('should get Array type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isRegExp = TagTester('RegExp');
    expect(isRegExp(new RegExp(/^d/g))).to.equal(expected);
    expect(isRegExp(/^d/)).to.equal(expected);
  });

  it('should get Error type checker using TagTester', () => {
    let actual = true;
    let expected = true;
    var isError = TagTester('Error');
    expect(isError(Error)).to.equal(!expected); // false not instantiated class
    expect(isError(new Error("Tester"))).to.equal(expected);
  });

  it('should get Symbol type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isSymbol = TagTester('Symbol');
    expect(isSymbol(Symbol("Tester"))).to.equal(expected);
  });

  it('should get ArrayBuffer type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isArrayBuffer = TagTester('ArrayBuffer');
    expect(isArrayBuffer([])).to.not.equal(expected); // false // is an array not ArrayBuffer
    expect(isArrayBuffer(Buffer.from([]))).to.not.equal(expected);
    expect(isArrayBuffer(new ArrayBuffer([]))).to.equal(expected);
  });

  it('should get Function type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isFunction = TagTester('Function');
    expect(isFunction(() => { })).to.equal(expected);
  });

  it('should get DataView type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var isDataView = TagTester('DataView');
    expect(isDataView([])).to.equal(!expected);
  });

  it('should get Object type checker using TagTester', () => {
    let actual = true;
    let expected = true;

    var hasObjectTag = TagTester('Object');
    expect(hasObjectTag({ "sc": 10 })).to.equal(expected);
  });

});
