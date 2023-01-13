// index.js
const fs = require("fs")
const path = require("path")

let files = fs.readdirSync(__dirname)
files = files.filter(x => !["index.js", ".DS_Store", "_template"].includes(x))

files.forEach(x => {
	let name = path.parse(x).name
	let filepath = path.join(__dirname, x)
	module.exports[name] = require(filepath)
})




