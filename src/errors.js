// errors.js

let name = "JS2HTML ERROR"
let type = {
	MISSING_TAG_TYPE: "you must specfiy the [type] of tag. i.e. 'a' 'p' 'div'",
	INVALID_ATTR: "[attr] must be an object of attribute properties",
	INVALID_UL: "ul must be an array of items",
	INVALID_MENU_ITEMS: "menu items must be an array of [name, url]"
}

class ERROR extends Error {
	constructor(input) {
		super()

		this.name = name
		this.code = undefined

		if (type.hasOwnProperty(input)) {
			this.message = type[input]
			this.code = input
		} else {
			this.message = input
		}
	}
}

module.exports = ERROR