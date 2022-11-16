// tag.js

const {createAttr} = require("../src/helpers.js")

function tag(type, content, attr = {}) {

	if (typeof attr !== "object") throw new ERROR("INVALID_ATTR")
	if (!type) throw new ERROR("MISSING_TAG_TYPE")
	if (Array.isArray(content)) content = content.join("")
	content = content || ""


	if (type == "hr") return "<hr>"
	else if (type == "br") return "<br>"
	else if (type == "link") {
		attr = createAttr(content)
		if (!attr) return ""
		else return `<link${attr}>`
	} else if (type == "meta") {
		attr = createAttr(content)
		if (!attr) return ""
		else return `<meta${attr}>`
	} else if (type == "div") {
		attr = createAttr(attr)
		return `<div${attr}>\n${content}\n</div>`
	} else if (type == "img") {
		attr = createAttr(attr)
		return `<img${attr}>`
	} else {
		attr = createAttr(attr)
		return `<${type}${attr}>${content}</${type}>`
	}
}





console.log(tag("booper",))
