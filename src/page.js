/** @module page */

const path = require("path")
const fs = require("fs")
const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: false})
const ERROR = require("./errors.js")
const elements = require("./elements.js")
const {tag, div, h1, h2, hr, html, script} = elements
const {createHead, createAttr, createDocument} = require("./helpers.js")

/** create a simple page
 * @constructor
 * @param {object} config
 * @param {string} config.title - title of the page. i.e. in menu/tab
 * @param {array} config.meta - an array of meta objects
 * @param {string} config.style - link to stylesheet
 * @param {string} config.header - h1 header text 
 * @param {string} config.section - h2 section text
 * @param {string} config.content - content
 * @param {string} config.footer - footer at bottom of page
 * @param {object} config.css - an object with css properties
 * @example
 * const page = new Page({
 * 	title: "page title"
 * })
 * page.generate()
 */
function Page(config = {}) {
	logger._debug = config.debug || false
	this.title = config.title
	this.meta = config.meta || []
	this.style = config.style
	this.header = config.header
	this.section = config.section
	this.content = config.content
	this.footer = config.footer
	this.css = config.css
	this.useJquery = config.useJquery || true
	this.useAxios = config.useAxios || true
	this.scripts = config.scripts || []
	let headerScripts = []
	if (this.useJquery) headerScripts.push({src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"})
	// if (this.useAxios) headerScripts.push({src:"https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.0/axios.min.js", integrity: "sha512-OdkysyYNjK4CZHgB+dkw9xQp66hZ9TLqmS2vXaBrftfyJeduVhyy1cOfoxiKdi4/bfgpco6REu6Rb+V2oVIRWg==", crossorigin: "anonymous", referrerpolicy:"no-referrer"})
	// if (this.useAxios) headerScripts.push({src:"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"})
		if (this.useAxios) headerScripts.push({src:"https://unpkg.com/axios/dist/axios.min.js"})

	let links = [
		{rel: "stylesheet", type: "text/css", href: this.style},
		{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css", integrity: "sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==", crossorigin: "anonymous", referrerpolicy: "no-referrer"}
	]


	/** generate an HTML document
	 * @returns {html}
	 */
	this.generate = function() {
		logger.debug("generating html...")
		let head = createHead({
			title: this.title,
			style: {
				...this.css
			},
			meta: [
				{name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1"},
				...this.meta
			], 
			link: links,
			script: [
				...headerScripts
			]
		})

		// create header
		if (Array.isArray(this.header)) this.header = this.header.join("")
		let header = div(h1(this.header) + hr(), {id: "header", class: "_header"})

		// create section
		if (Array.isArray(this.section)) this.section = this.section.join("")
		let section = div(h2(this.section), {id: "section", class: "_section"})

		// create content
		if (Array.isArray(this.content)) this.content = this.content.join("")
		let content = div(this.content, {id: "content", class: "_content"})

		// create footer
		if (Array.isArray(this.footer)) this.footer = this.footer.join("")
		let footer = div(this.footer, {id: "_footer", class: "_footer", 
			// style: "position: fixed; bottom: 20px; text-align: center;"
		})
		// create scripts
		let scripts = this.scripts.join("")
		let container = div([header + section, content], {class: "_container"})
		let doc = createDocument({
			head,
			body: container + footer + scripts
		})
		logger.debug("done!")
		return doc
	}

	this.render = this.generate


	

	/** save html to a file
	 * @param {string} filepath
	 */
	this.save = function(filepath) {
		logger.debug("saving html...")
		filepath = path.join(process.cwd(), filepath)
		let html = this.generate()
		let {dir, base} = path.parse(filepath)
		if (!fs.existsSync(dir)) fs.mkdirSync(dir)
		fs.writeFileSync(filepath, html)
		logger.debug(`html saved to ${filepath}`)
	}

	this.useScript = (input) => this.scripts.push(input)
	this.useExternalScript = (href) => this.scripts.push(script(null, {type: "text/javascript", src: href}))
	this.useStyle = (href) => links.push({rel: "stylesheet", type: "text/css", href})
	this.useCSS = this.useStyle
}


module.exports = Page












