/** unordered list
 * @name ul
 * @function
 * @param {array} items - array of strings or elements
 * @param {object} attr - attributes
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (items, attr) => {
    items = items || []
    items = items.map(x => tag("li", x)).join("")
    return tag("ul", items, attr)
}