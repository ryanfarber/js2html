/** represents a control that provides a menu of options
 * @name select
 * @function
 * @param {array} options - an array of objects
 * @param {object} attr - attributes
 * @returns {string}
 * @example
 * select([
 *  {name: "Apple", value: "apple"},
 *  {name: "Orange", value: "orange"}
 * ])
 */

const {tag} = require("../helpers.js")
module.exports = (options, attr) => {
    options = options || []
    options = options.map(x => {
        let attr = x
        let name = x.name || x.value
        if (!attr.name) attr.name = attr.value
        if (!attr.value) attr.value = attr.name

        return tag("option", name, attr)
    }).join("")
    return tag("select", options, attr)
}