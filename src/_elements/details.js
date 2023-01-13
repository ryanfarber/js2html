/** creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.
 * @name details
 * @function
 * @param {string} summary
 * @param {object} attr - attributes
 * @returns {html}
 * @example
 * details("expand to reveal the hint", "here is the hint")
 */

const {tag} = require("../helpers.js")
module.exports = (summary, content, attr) => {
    content = tag("summary", summary) + content
    return tag("details", content, attr)
}