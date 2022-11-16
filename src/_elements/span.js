/** an inline container used to mark up a part of a text, or a part of a document.
 * @name span
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("span", content, attr)