/** @module helpers */

const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: true})
const ERROR = require("./errors.js")


/** create a tag
 * @param {string} type - tag type i.e "p"
 * @param {string} data - data for the inner html
 * @param {object} attr - attributes
 * @returns {string}
 */
function tag(type, data, attr = {}) {
	// let type = config.type
	if (typeof attr !== "object") throw new ERROR("INVALID_ATTR")
	if (!type) throw new ERROR("MISSING_TAG_TYPE")
	data = data || ""

	if (type == "hr") return "<hr>"
	else if (type == "br") return "<br>"
	else if (type == "link") {
		attr = createAttr(data)
		if (!attr) return ""
		else return `<link${attr}>`
	} else if (type == "meta") {
		attr = createAttr(data)
		if (!attr) return ""
		else return `<meta${attr}>`
	} else if (type == "div") {
		attr = createAttr(attr)
		return `<div${attr}>\n${data}\n</div>`
	} else {
		attr = createAttr(attr)
		return `<${type}${attr}>${data}</${type}>`
	}
}

/** converts \n to line break
 * @param {string} string
 * @returns {string}
 * @example
 * format("hello\nworld")
 * // hello<br>world
 */
function format(string) {
	if (!string) return
	return string.replace(/\n/gi, "<br>") 
}


/** create the attributes in a ag
 * @param {object} config - list of attribute properties
 * @returns {string}
 */
function createAttr(config = {}) {
	logger.debug("creating attributes...")
	if (!config) return ""
	let attr = Object.entries(config)
	if (!attr.length) return ""
	let output = " " + attr.filter(x => x[1]).map(x => `${x[0]}="${x[1]}"`).join(" ")
	return output
}

/** create an html document
 * @param {object} config
 * @param {string} config.head
 * @param {string} config.body
 * @returns {string}
 */
function createDocument(config = {}) {
	logger.debug("creating document...")
	let head = config.head
	let content = config.body || config.content

	if (Array.isArray(content)) {
		content = content.join("\n")
	}
	let output = "<!DOCTYPE html>\n" + tag("html", head + tag("body", content))
	return output
}

/** create the the head
 * @param {object} config
 * @param {string} config.title - title of webpage
 * @param {object} config.style - css object
 * @returns {string}
 */
function createHead(config = {}) {
	logger.debug("creating head...")
	let title = tag("title", config.title)
	let meta = config.meta || []
	let link = config.link || []
	meta = meta.map(x => tag("meta", x)).join("")
	link = link.map(x => tag("link", x)).join("")
	let style = tag("style", createCss(config.style))
	let arr = [title, meta, link, style].join("")
	return tag("head", arr)
}

/** create css from an object
 * @param {object} config
 * @returns {string}
 * @example
 * createCss({
 * 	html: {
 * 		"font-family": "helvetica"
 * 	}
 * })
 * // html {font-family: helvetica;}
 */
function createCss(config = {}) {
	logger.debug("creating css...")
	let items = Object.entries(config)
	let arr = []
	items.forEach(x => {
		let tag = x[0]
		let props = Object.entries(x[1])
		props = props.map(x => `${x[0]}: ${x[1]};`).join("")
		arr.push(`${tag} {${props}}`)
	})
	let css = arr.join("\n")
	return css
}

/** create a menu of links
 * @param {object} items - menu items
 * @returns {string}
 * @example
 * createMenu({
 * 	home: "/index.html",
 * 	about: "/about.html"
 * })
 */
function createMenu(items) {
	// if (!Array.isArray(items)) throw new ERROR("INVALID_MENU_ITEMS")
	let array
	if (typeof items === "object") items = Object.entries(items)

	items = items.map(x => {
		let name = x[0]
		let href = x[1]
		x = tag("a", name, {href})
		return x
	}).join(" | ")
	return items
}

module.exports = {
	format,
	createAttr,
	createDocument,
	createHead,
	createCss,
	createMenu,
	tag
}