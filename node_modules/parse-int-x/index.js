/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module parse-int-x
 */

'use strict';

var nativeParseInt = parseInt;
var ws = require('white-space-x').string;
var toStr = require('to-string-x');

var $parseInt;
if (nativeParseInt(ws + '08') === 8 && nativeParseInt(ws + '0x16') === 22) {
  $parseInt = function parseInteger(string, radix) {
    return nativeParseInt(toStr(string), radix);
  };
} else {
  var trim = require('trim-x');
  var castNumber = require('cached-constructors-x').Number;
  var hexRegex = /^[-+]?0[xX]/;
  var test = hexRegex.test;

  $parseInt = function parseInteger(string, radix) {
    var str = trim(toStr(string));

    return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
  };
}

/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems).
 *
 * @param {string} string - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} radix - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 * @example
 * var $parseInt = require('parse-int-x');
 *
 * // The following examples all return 15
 * $parseInt(' 0xF', 16);
 * $parseInt(' F', 16);
 * $parseInt('17', 8);
 * $parseInt(021, 8);
 * $parseInt('015', 10);   // $parseInt(015, 10); will return 15
 * $parseInt(15.99, 10);
 * $parseInt('15,123', 10);
 * $parseInt('FXX123', 16);
 * $parseInt('1111', 2);
 * $parseInt('15 * 3', 10);
 * $parseInt('15e2', 10);
 * $parseInt('15px', 10);
 * $parseInt('12', 13);
 *
 * //The following examples all return NaN:
 * $parseInt('Hello', 8); // Not a number at all
 * $parseInt('546', 2);   // Digits are not valid for binary representations
 */
module.exports = $parseInt;
