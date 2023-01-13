// doc.js


const {tag} = require("../helpers.js")
const {meta} = require("../elements")





/** create a HTML document
 * @constructor
 */
function Doc(config = {}) {

	this.jquery = config.jquery || true
	this.axios = config.axios || true
	this.fontAwesome = config.fontAwesome || true





	this.generate = function() {

	}
}




let doc = new Doc()





console.log(doc)