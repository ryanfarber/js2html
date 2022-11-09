// create-form.js


const {form, input} = require("./elements.js")









function Form(config = {}) {
	let elements = config.elements || []
	let confirm = config.confirm
	let action = config.action
	let method = config.method
	let autoLabel = config.autoLabel || true














	this.generate = function() {


		if (autoLabel) {
			elements.forEach(e => {
				
			})
		}
		return form(elements)
	}

	return this.generate()
}



let _form = new Form({
	elements: [
		input({name: "email", type: "text", placeholder: "email", type: "email"})

	]
})


console.log(_form.generate())






module.exports = Form