/** @module elements */



const {createAttr, createCss, tag, format} = require("./helpers.js")


/** meta
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const meta = (attr) => tag("meta", null, attr)

/** link
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const link = (attr = {}) => tag("link", attr)

/** style
 * @param {object} css - css object
 * @param {object} attr - attributes
 * @returns {string}
 */
const style = (css, attr) => {
	css = createCss(css)
	css = "\n" + css + "\n"
	return tag("style", css, attr)
}

/** html
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const html = (content, attr) => tag("html", content, attr)

/** body
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const body = (content, attr) => tag("body", content, attr)

/** div
 * @param {string|array} content - html content or array of elements
 * @param {object} attr - atrribute properties
 * @returns {string}
 * @example
 * div(p("hello world"), {id: "container", class: "container-a"})
 * 
/*
<div id="container" class="container-a">
<p>hello world</p>
</div>
\*
 */
const div = (content, attr) => {
	if (Array.isArray(content)) content = content.join("")
	return tag("div", content, attr)
}

/** p
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 * @example
 * p("hello world")
 * // <p>hello world</p>
 */
const p = (content, attr) => {
	content = format(content)
	return tag("p", content, attr)
}

const input = (attr) => {
    // content = format(content)
    return tag("input", null, attr)
}

/** li
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 * @example
 * li("list item")
 */
const li = (content, attr) => tag("li", content, attr)

/** ul
 * @param {array} items - an array of elements
 * @param {object} attr - atrribute properties
 * @returns {string}
 * @example
 * ul(["item 1", "item 2"])
 */
const ul = (items, attr) => {
	if (!Array.isArray(items)) throw new ERROR("INVALID_UL")
	let data = items.map(x => tag("li", x)).join("")
	return tag("ul", data, attr)
}

/** h1
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const h1 = (content, attr) => tag("h1", content, attr)

/** h2
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const h2 = (content, attr) => tag("h2", content, attr)

/** h3
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const h3 = (content, attr) => tag("h3", content, attr)

/** h4
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const h4 = (content, attr) => tag("h4", content, attr)

/** span
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 * @example
 * span("hello world")
 * // <span>hello world</span>
 */
const span = (content, attr) => tag("span", content, attr)

/** a
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns <a>
 */
const a = (content, attr) => tag("a", content, attr)

/** quicker way to make a link
 * @param {string} href - the url
 * @param {string|object} [name|attr] - name or object of attributes
 * @returns {string}
 * @example
 * href("https://google.com")
 * // <a href="https://google.com">https://google.com</a>
 * href("https://google.com", "Visit Google")
 * // <a href="https://google.com">Visit Google</a>
 */
function href(href) {
	let args = Array.from(arguments)
	let name
	let attr = {}
	if (typeof args[1] === "string") name = args[1]
	else if (typeof args[1] === "object") attr = args[1]
	if (name && args[2]) attr = args[2]
	if (!name) name = href
	return tag("a", name, {href, ...attr})
}

/** hr
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const hr = (attr = {}) => tag("hr", null, attr)

/** br
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const br = (num) => {
    let str = tag("br")
    if (num) return str.repeat(num)
    else return str
}

/** button
 * @param {string} content - html content
 * @param {object} attr - atrribute properties
 * @returns {string}
 */
const button = (content, attr) => {
	return tag("button", content, attr)
}

const form = (elements, attr) => {
    elements = elements.join("")
    return tag("form", elements, attr)
}

const label = (content, attr) => tag("label", content, attr)
const script = (content, attr) => tag("script", content, attr)
const img = (attr) => tag("img", null, attr)
const i = (content, attr) => tag("i", content, attr)
const b = (content, attr) => tag("b", content, attr)
const code = (content, attr) => tag("code", content, attr)



module.exports = {tag, p, a, li, ul, href, link, h1, h2, h3, h4, div, style, html, hr, br, span, button, input, form, script, img, label, i, b, code}




