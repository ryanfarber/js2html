// textarea.js






class tag {
	constructor(type, content, attr) {
		this.type = type
		this.content = content
		this.attr = attr || {}
	}

	render() {
		return(`<${this.type}>${this.content}</${this.type}>`)
	}
}

// Tag.prototype.render = function() {
// 	return("hey")
// }




class textarea extends tag {
	constructor(content, attr) {
		super("textarea", content, attr)
		return () => this.render()
	}
}



let text = new textarea()

console.log(text("hello there"))