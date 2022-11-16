/** horizontal rule
 * @name hr
 * @function
 * @description horizontal rule
 * @param {number} num - number of horizontal rules to generate
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (num) => {
    let str = tag("hr")
    if (num) return str.repeat(num)
    else return str
}
