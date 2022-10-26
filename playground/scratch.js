// scratch.js
// js2html.js



let tags = ["p", "a", "h1", "h2", "h3", "h4", "h5", "span", "html", "body", "title", "head", "link", "li", "br", "hr"]

function createLink(text, url) {
	return `<a href="${url}">${text}</a>`
}


const html = (...args) => tag("html", ...args)
const a = (...args) => tag("a", ...args)
const p = (...args) => tag("p", ...args)
const h1 = (...args) => tag("h1", ...args)
const h2 = (...args) => tag("h2", ...args)
const h3 = (...args) => tag("h3", ...args)
const h4 = (...args) => tag("h4", ...args)
const li = (...args) => tag("li", ...args)
const div = (...args) => tag("div", ...args)
const span = (...args) => tag("span", ...args)
const body = (...args) => tag("body", ...args)
const menu = (items) => items.map(x => a(x[0], {href: x[1]})).join(" | ")
const href = (name, link) => a(name, {href: link})
const hr = tag("hr")
const br = tag("br")
// const head = (input) => (input) ? `<head>${input}</head>` : ""



// create a tag
function tag(type, data, attr) {
	data = data || ""
	let output

	if (type == "hr") output = "<hr>"
	else if (type == "br") output = "<br>"
	else if (type == "link") {
		attr = createAttr(data)
		output = `<link${attr}>`
		if(!attr) output = ""
	} else if (type == "meta") {
		attr = createAttr(data)
		output = `<meta{attr}>`
		if(!attr) output = ""
	} else {
		attr = createAttr(attr)
		output = `<${type}${attr}>${data}</${type}>`
		if (!data) output = ""
	}
	return output
}



function createDoc(config = {}) {
	let head = config.head
	let content = config.body
	let output = "<!DOCTYPE html>" + html(head + body(content))
	return output
}

function createHead(config = {}) {
	let title = tag("title", config.title)
	let style = tag("link", config.style)
	return tag("head",title + style)
}

// creates attributes from an object
function createAttr(attr) {
	if (!attr) return ""
	attr = Object.entries(attr)
	if (!attr.length) return ""
	return " " + attr.filter(x => x[1]).map(x => `${x[0]}="${x[1]}"`).join(" ")
}


function Page(config = {}) {
	this.title = config.title
	this.style = config.style
	this.header = config.header
	this.section = config.section
	this.content = config.content
	this.footer = config.footer


	this.generate = function () {

		let style = {
			rel: "stylesheet",
			href: this.style,
			type: "text/css"
		}

		if (!this.style) style = undefined
		let head = createHead({
			title: this.title,
			style
		})

		let header = div(h1(this.header), {id: "header", class: "header"})
		let section = div(h2(this.section), {id: "section", class: "section"})
		let content = div(this.content, {id: "content", class: "content"})
		let footer = div(this.footer, {id: "footer", class: "footer"})

		let doc = createDoc({
			head,
			body: header + section + content + hr + footer
		})
		return doc
	}
}


module.exports = {a, span, h1, h2, h3, h4, li, hr, br, Page, menu, href}






