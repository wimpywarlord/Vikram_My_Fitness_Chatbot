/**
 * @file This method removes whitespace from the right end of a string.
 * @version 2.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-right-x
 */

'use strict';

var requireCoercibleToString = require('require-coercible-to-string-x');
var Rx = require('cached-constructors-x').RegExp;
var reRight = new Rx('[' + require('white-space-x').string + ']+$');
var replace = ''.replace;

/**
 * This method removes whitespace from the right end of a string.
 *
 * @param {string} string - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 * @example
 * var trimRight = require('trim-right-x');
 *
 * trimRight(' \t\na \t\n') === ' \t\na'; // true
 */
module.exports = function trimRight(string) {
  return replace.call(requireCoercibleToString(string), reRight, '');
};
