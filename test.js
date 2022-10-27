

const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: false})
const express = require("express")
const app = express()
const fs = require("fs")
const open = require("open")
let {a, href, p, li, ul, Page, div, span, createMenu} = require("./src")
app.use(express.static("./tmp"))
app.use("/docs", express.static("./docs"))

let menu = createMenu({
	home: "index.html",
	test: "test.html",
	docs: "docs/index.html"
})

let page = new Page({
	debug: true,
	title: "js2html",
	css: {
		html: {
			"font-family": "helvetica",
			// "margin": "20px"
		}
	},
	header: "js2html",
	section: "Section Name",
	footer: menu

})


createIndexPage()
createTestPage()
open("./tmp/index.html")


function createIndexPage() {
	page.section = "this is a section heading"
	page.content = "this is page content"
	page.save("/tmp/index.html")
}
function createTestPage() {
	page.section = "Hello"
	page.content = [p("hello"), div(menu)]
	page.save("/tmp/test.html")
}


const listener = app.listen(80, () => {
	let port = listener.address().port
	let host = `http://localhost:${port}`
	logger.log(`js2html server listening @ ${host}`)
	open(host)
})




