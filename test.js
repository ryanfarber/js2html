



const fs = require("fs")
const open = require("open")
let {a, href, p, li, ul, Page, div, span, createMenu} = require("./src")



console.log(span("hello world"))
let page = new Page({
	title: "Title",
	css: {
		html: {
			"font-family": "helvetica",
			// "margin": "20px"
		}
	},
	header: "Title",
	section: "Section Name",
	footer: createMenu({
		home: "index.html"
	}),

})

page.content = "hey"

go(page.generate())



console.log(div(p("hello world"), {id: "container", class: "main"}))


function go(input) {
	console.log(input)
	let filepath = "./tmp/index.html"
	if (!fs.existsSync("./tmp")) fs.mkdirSync("./tmp")
	fs.writeFileSync(filepath, input)
	open(filepath)
}




