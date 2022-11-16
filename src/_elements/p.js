/** paragraph
 * @name p
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 * @example
 * p("hello world")
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("p", content, attr)