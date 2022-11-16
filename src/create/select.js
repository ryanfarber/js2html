// select.js

const {tag, createAttr} = require("../helpers.js")


/** create a select element
 * @constructor
 * @param {object} config
 * @param {array} config.options - an array of objects representing options
 * @para {object} [config.attr] - attributes
 * @example
 * const select = new Select({
 * 	options: [
 *		{name: "Apple", value: "apple"},
 *		{name: "Orange", value: "orange"}
 *	]
 * })
 * select.generate()
 */
function Select(config = {}) {

	this.options = config.options || []
	this.attr = config.attr || {}

	this.generate = function() {

		let options = this.options.map(x => {
			let attr = x
			let name = x.name || x.value
			if (!attr.name) attr.name = attr.value
			if (!attr.value) attr.value = attr.name

			return tag("option", name, attr)
		}).join("\n")

		return tag("select", options, this.attr)
	}
}





module.exports = Select