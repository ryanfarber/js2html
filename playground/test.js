
const util = require("util")

function element(type, content, attr) {
	if (!(this instanceof element)) return new element(...arguments)
	this.type = type
	this.content = content
	this.attr = attr
	this.toStr = () =>`${this.content}`

}


function tag(type, content, attr) {
	if (!(this instanceof tag)) return new tag(...arguments)

	element.call(this, ...arguments)

	return this.toStr()
}

util.inherits(tag, element)

console.log(tag("booper", "booasdf"))