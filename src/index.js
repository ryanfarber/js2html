// module.exports = require("./src.js")

let elements = require("./elements.js")
let helpers = require("./helpers.js")

module.exports = {
	Page: require("./page.js"),
	Table: require("./table.js"),
	...elements,
	...helpers
}