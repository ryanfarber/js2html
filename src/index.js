// module.exports = require("./src.js")

let elements = require("./elements.js")
let helpers = require("./helpers.js")
let create = require("./create")

module.exports = {
	Page: require("./page.js"),
	...create,
	...helpers,
	...elements,
	
}

