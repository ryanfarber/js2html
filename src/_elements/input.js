/**  used to create interactive controls for web-based forms in order to accept data from the user;<br>a wide variety of types of input data and control widgets are available, depending on the device and user agent.<br>The input element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 * @name input
 * @function
 * @param {object} attr - attributes. refer to <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"> for input types
 * @param {string} attr.type
 * @param {string} [attr.name]
 * @param {string} [attr.placeholder] - text that appears in the form control when it has no value set
 * @param {boolean} [attr.required] - a value is required or must be check for the form to be submittable
 * @param {string} [attr.value]
 * @param {boolean} [attr.checked] - only for <code>checkbox</code>
 * @param {boolean} [attr.readonly] - whether value is editable
 * @returns {string}
 */

const {tag} = require("../helpers.js")
module.exports = (attr) => tag("tag", null, attr)