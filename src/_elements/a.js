/** defines a hyperlink, which is used to link from one page to another
 * @name a
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {html}
 */
 
const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("a", content, attr)