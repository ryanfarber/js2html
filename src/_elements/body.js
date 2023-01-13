/** contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
 * @name body
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {html}
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("body", content, attr)