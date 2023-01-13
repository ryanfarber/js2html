/** description
 * @name span
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {html}
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("tag", content, attr)