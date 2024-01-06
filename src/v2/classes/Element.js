// Element.js




function Element(type) {



	Element.prototype.render = function() {
		return "tag"
	}

	return () => this.render()
}





let br = new Element("br")


console.log(br())








function tag(type, data, attr = {}) {
	// let type = config.type
	if (typeof attr !== "object") throw new ERROR("INVALID_ATTR")
	if (!type) throw new ERROR("MISSING_TAG_TYPE")
	if (Array.isArray(data)) data = data.join("")
	data = data || ""
	// if (!data || !attr) return ""

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
	} else if (type == "img") {
		attr = createAttr(attr)
		return `<img${attr}>`
	} else {
		attr = createAttr(attr)
		return `<${type}${attr}>${data}</${type}>`
	}
}