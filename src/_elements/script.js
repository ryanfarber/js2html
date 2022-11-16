/** used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
 * @name script
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("tag", content, attr)