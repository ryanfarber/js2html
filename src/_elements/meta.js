/** defines metadata about an HTML document. Metadata is data (information) about data.
 * @name meta
 * @function
 * @param {object} attr - attributes
 * @returns {html}
 */

const {tag} = require("../helpers.js")
module.exports = (attr) => tag("meta", null, attr)