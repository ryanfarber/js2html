/** @module page */

const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: true})
const ERROR = require("./errors.js")
const elements = require("./elements.js")
const {tag, div, h1, h2, hr, html} = elements
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

	this.title = config.title
	this.meta = config.meta || []
	this.style = config.style
	this.header = config.header
	this.section = config.section
	this.content = config.content
	this.footer = config.footer
	this.css = config.css

	/** generate an HTML document
	 * @returns {html}
	 */
	this.generate = function() {

		let head = createHead({
			title: this.title,
			style: {
				".container": {
					"max-width": "800px",
					"margin": "auto",
					"background": "white",
					"padding": "10px",
				},
				...this.css
			},
			meta: [
				{name: "viewport", content: "width=device-width, initial-scale=1"},
				...this.meta
			], 
			link: [
				{rel: "stylesheet", type: "text/css", href: this.style}
			]
		})

		let header = div(h1(this.header), {id: "header", class: "header"})
		let section = div(h2(this.section), {id: "section", class: "section"})
		let content = div(this.content, {id: "content", class: "content"})
		let footer = div(this.footer, {id: "footer", class: "footer", style: "position: fixed; bottom: 20px; text-align: center;"})

		let container = div([header, hr(), section, content, footer], {class: "container"})
		let doc = createDocument({
			head,
			body: container
		})
		return doc
	}
}


module.exports = Page












