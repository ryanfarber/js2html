// form.js

const {tag} = require("../helpers.js")

/** create a form element
 * @constructor
 */
function Form(config = {}) {

	this.elements = config.elements || []
	this.attr = config.attr || {}
	this.id = config.id
	this.action = config.action
	this.method = config.method

	this.generate = function() {

		let attr = {
			id: this.id,
			action: this.action,
			method: this.method,
			...this.attr
		}
		let elements = this.elements.join("")
		let output = tag("form", elements, attr)
		return output
	}
}


module.exports = Form
