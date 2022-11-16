/** div
 * @name div
 * @function
 * @param {string|array} content
 * @param {object} attr - attributes
 * @returns {string}
 * @example
 * div([p("hello world")], {
 *  id: "container",
 *  class: "container"
 * })
 */

const {tag} = require("../helpers.js")
module.exports = (content, attr) => tag("div", content, attr)