/**
 * @file This method removes whitespace from the left end of a string.
 * @version 2.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-left-x
 */

'use strict';

var requireCoercibleToString = require('require-coercible-to-string-x');
var Rx = require('cached-constructors-x').RegExp;
var reLeft = new Rx('^[' + require('white-space-x').string + ']+');
var replace = ''.replace;

/**
 * This method removes whitespace from the left end of a string.
 *
 * @param {string} string - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 * @example
 * var trimLeft = require('trim-left-x');
 *
 * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
 */
module.exports = function trimLeft(string) {
  return replace.call(requireCoercibleToString(string), reLeft, '');
};
