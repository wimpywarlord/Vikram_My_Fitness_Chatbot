/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module normalize-space-x
 */

'use strict';

var trim = require('trim-x');
var Rx = require('cached-constructors-x').RegExp;
var reNormalize = new Rx('[' + require('white-space-x').string + ']+', 'g');
var replace = ''.replace;

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string.
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 * @example
 * var normalizeSpace = require('normalize-space-x');
 *
 * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
 */
module.exports = function normalizeSpace(string) {
  return replace.call(trim(string), reNormalize, ' ');
};
