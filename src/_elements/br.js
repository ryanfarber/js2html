/** line break
 * @name br
 * @function
 * @param {number} num - number of line breaks
 * @returns {html}
 */
 
const {tag} = require("../helpers.js")
module.exports = (num) => {
    let str = tag("br")
    if (num) return str.repeat(num)
    else return str
}
