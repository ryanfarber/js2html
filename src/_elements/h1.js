/** heading
 * @name h1
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("h1", content, attr)