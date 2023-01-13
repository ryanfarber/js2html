// tag.js


const ERROR = require("../errors.js")
const {createAttr} = require("../helpers.js")
const kindof = require("kind-of")





function tag(_type, _content, _attr) {

	if (!_type) throw new ERROR("MISSING_TAG_TYPE")
	let type = _type
	let content = []
	let attr

	// if content is an object, it is attributes
	if (kindof(_content) === "object") _attr = _content
	else if (kindof(_content) === "string") content.push(_content)
	else if (kindof(_content) === "array") content = _content

	if (_attr) attr = createAttr(_attr)
	else attr = ""

	content = content.join("")
	
	return `<${type}${attr}>${content}</${type}>`
}	


// module.exports = tag



const i = (content, attr) => tag("i", content, attr)




console.log(i())