// website.js

const {script} = require("../_elements")



function Website(config = {}) {

	let siteTitle = config.title
	this.title = config.title



	this.Doc = function(config = {}) {
		this.siteTitle = siteTitle
		this.title = config.title
		this.og = {
			key: "value",
			...config.og
		}
		this.scripts = []
		this.useJquery  = config.jquery || true
		this.useAxios = config.axios || true
		this.useFontAwesome = config.useFontAwesome || true

		this.useStyle
		this.useScript = (js) => this.scripts.push(script(js, {type: "text/javascript"}))
		this.render = () => {

		}
	}
}













let website = new Website({
	title: "dollarsong.com",
	og: {
		booper: "boiper"
	}
})



let doc = new website.Doc()





doc.useScript(`test`)


console.log(website)


console.log(doc)




