/** italic text
 * @name i
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("i", content, attr)