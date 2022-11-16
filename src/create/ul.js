
const {tag} = require("../helpers.js")

/** create a UL element.
 * @constructor
 * @param {object} config
 * @param {array} config.items - list items
 * @param {object} [config.attr] - attributes
 * @param {string} [config.style] - refer to <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type">MDN</a> for list of styles
 * @returns {html} element
 */
function Ul(config = {}) {
	this.items = config.items || []
	this.attr = config.attr || {}
	this.style = config.type || "inside"
	https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
	this.generate = function() {
		let items = this.items.map(x => tag("li", x))
		let attr = {
			"list-style": this.style,
			...this.attr
		}
		let output = tag("ul", items, attr)
		return output
	}
}




console.log(ul.generate())