// doc.js


const {tag} = require("../helpers.js")





/** create a HTML document
 * @constructor
 */
function Doc(config = {}) {
	this.title = config.title
	this.useJquery = config.useJquery || true
	this.head = config.head
	this.scripts = config.scripts
	this.body = config.body


	this.generate = function() {

	}
}




let doc = new Doc()





console.log(doc)