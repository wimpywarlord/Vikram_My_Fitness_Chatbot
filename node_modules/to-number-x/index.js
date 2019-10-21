/**
 * @file Converts argument to a value of type Number.
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-number-x
 */

'use strict';

var constructors = require('cached-constructors-x');
var castNumber = require('cached-constructors-x').Number;
var Rx = constructors.RegExp;
var toPrimitive = require('to-primitive-x');
var trim = require('trim-x');
var $parseInt = require('parse-int-x');
var pStrSlice = ''.slice;
var NAN = require('nan-x');

var binaryRegex = /^0b[01]+$/i;
// Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
var test = binaryRegex.test;
var isBinary = function _isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;
var isOctal = function _isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex = new Rx('[\u0085\u200b\ufffe]', 'g');
var hasNonWS = function _hasNonWS(value) {
  return test.call(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

/**
 * This method converts argument to a value of type Number.

 * @param {*} argument - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 * @example
 * var toNumber = require('to-number-x');
 *
 * toNumber('1'); // 1
 * toNumber(null); // 0
 * toNumber(true); // 1
 * toNumber('0o10'); // 8
 * toNumber('0b10'); // 2
 * toNumber('0xF'); // 16
 *
 * toNumber(' 1 '); // 1
 *
 * toNumber(Symbol('')) // TypeError
 * toNumber(Object.create(null)) // TypeError
 */
module.exports = function toNumber(argument) {
  var value = toPrimitive(argument, Number);
  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber($parseInt(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber($parseInt(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    var trimmed = trim(value);
    if (trimmed !== value) {
      return toNumber(trimmed);
    }
  }

  return castNumber(value);
};
