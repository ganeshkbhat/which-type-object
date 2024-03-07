/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');
const { isBufferLike } = require('../index');


describe('[request tests] Tests to ', () => {
  let tst, written;
  before(() => {

  });

  after(() => { });

  it('should fail since it is a number', () => {
    let actual = isBufferLike(12)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a string number', () => {
    let actual = isBufferLike("23")
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a string', () => {
    let actual = isBufferLike("23Test")
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a NaN', () => {
    let actual = isBufferLike(NaN)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a undefined', () => {
    let actual = isBufferLike(undefined)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a boolean truthy', () => {
    let actual = isBufferLike(true)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a boolean falsy', () => {
    let actual = isBufferLike(false)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a strong with backticks', () => {
    let actual = isBufferLike(`test`)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a array number', () => {
    let actual = isBufferLike([1, 2, 3, 4])
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a array number and float', () => {
    let actual = isBufferLike([1.2, 4, 6, 10])
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a object', () => {
    let actual = isBufferLike({})
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a object with props', () => {
    let actual = isBufferLike({ test: 10 })
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a blank set', () => {
    let actual = isBufferLike(new Set())
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a set instantiated', () => {
    let actual = isBufferLike(new Set([]))
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a set with values', () => {
    let actual = isBufferLike(new Set([1, 2, 3]))
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a arrow function', () => {
    let actual = isBufferLike(() => 1)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a arrow function', () => {
    let actual = isBufferLike((s) => s)
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a arrow function', () => {
    let actual = isBufferLike(() => { })
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a normal js function', () => {
    let actual = isBufferLike(function () { })
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should fail since it is a normal named js function', () => {
    let actual = isBufferLike(function test() { })
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer', () => {
    let actual = isBufferLike(new ArrayBuffer(10))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer', () => {
    let actual = isBufferLike(new ArrayBuffer([]))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from int8array', () => {
    let actual = isBufferLike(new ArrayBuffer(new Int16Array(6)))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from int32array', () => {
    let actual = isBufferLike(new ArrayBuffer(new Uint32Array(6)))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from bigint64array', () => {
    let actual = isBufferLike(new ArrayBuffer(new BigInt64Array(6)))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from a bigunintarray', () => {
    let actual = isBufferLike(new ArrayBuffer(new BigUint64Array(6)))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from float32array', () => {
    let actual = isBufferLike(new ArrayBuffer(new Float32Array(6)))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from string', () => {
    let actual = isBufferLike(new ArrayBuffer("test"))
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should true since it is a array buffer from bank string', () => {
    let actual = isBufferLike(new ArrayBuffer(""))
    let expected = true;
    expect(actual).to.equal(expected);
  });

});
