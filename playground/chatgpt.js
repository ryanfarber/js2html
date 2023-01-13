// chatgpt.js
const htmlTags = require("html-tags");






function convert(obj) {
    let html = '';

    for (let key in obj) {
        if (htmlTags.indexOf(key) === -1) {
            if (key === 'style') {
                let styles = obj[key];
                let styleString = '';
                for (let cssProp in styles) {
                    styleString += `${cssProp}:${styles[cssProp]};`;
                }
                this.lastStyle = ` style="${styleString}"`;
            } else {
                this.lastAttribute = ` ${key}="${obj[key]}"`;
            }
        } else {
            let attributes = this.lastStyle || "";
            let content = '';
            this.lastStyle = "";
            if (typeof obj[key] === 'string') {
                content = obj[key];
            } else if (typeof obj[key] === 'object') {
                for (let attr in obj[key]) {
                    if (htmlTags.indexOf(attr) === -1) {
                        if (attr === 'style') {
                            let styles = obj[key][attr];
                            let styleString = '';
                            for (let cssProp in styles) {
                                styleString += `${cssProp}:${styles[cssProp]};`;
                            }
                            attributes += ` style="${styleString}"`;
                        } else {
                            attributes += ` ${attr}="${obj[key][attr]}"`;
                        }
                    } else {
                        content += convert({ [attr]: obj[key][attr] });
                    }
                }
            }
            html += `<${key}${attributes}${this.lastattribute}>`;
            this.lastattribute = "";
            html += content;
            html += `</${key}>`;
        }
    }
    return html;
}


function convertCSS(styleObject) {
    let cssString = '';
    for (let prop in styleObject) {
        cssString += `${prop}:${styleObject[prop]};`;
    }
    return cssString;
}





// let obj = {
// 	div: {
// 		class: "test",
// 		id: "booper",
// 		content: "bope",
// 		span: {
// 			span: {
// 				span: "hellos"
// 			}
// 		}
// 	}

// }

console.log(convertCSS({
	test: "100px 80px",
	length: 8
}))

console.log(convert({
	// div: "hello",
	img: {
		style: {
			width: "100px"
		}
	}
}))