/** displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.
 * @name code
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 */
 
const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("code", content, attr)