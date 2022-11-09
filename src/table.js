// table.js

const {tag, createAttr} = require("./helpers.js")



function Table(config = {}) {
	const headers = config.headers
	const data = config.data || []
	let attr = config.attr

	this.headers = headers
	this.data = data
	this.attr = attr

	this.generate = function() {
		let rowData = []
		// attr = createAttr(attr)

		this.headers = this.headers.map(x => tag("th", x, {style: "text-align: left; padding: 5px;"})).join("")
		this.data.forEach(x => {
			let vals = Object.values(x).map(x => tag("td", x, {style: "text-align: left; padding: 5px;"})).join("")
			rowData.push(vals)
		})

		let rows = rowData.map(x => tag("tr", x))
		this.headers = tag("tr", this.headers)
		rows.unshift(this.headers)
		rows = rows.join("")

		let table = tag("table", rows, attr)
		return table
	}
}



// let table = new Table({
// 	headers: ["a", "b", "c"],
// 	data: [
// 		{a: "heyw", b: "aboper", c: "asdf"}

// 	]
// })

// console.log(table)
// console.log(table.generate())


module.exports = Table