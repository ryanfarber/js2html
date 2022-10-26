# js2html
convert javascript to html

## usage

```javascript
const {p, a} = require("@ryanforever/js2html")

p("hello world")
// <p>hello world</p>

a("Website", {
    href: "https://example.com"
})
// <a href="https://example.com">Website<a/>
```

## elements
most elements are created using the format `element(content, attributes)`

i.e. if you want to create a `div` with a `p` element with `id` and `class` attributes:
```javascript
div(p("hello world"), {id: "container", class: "main"})
/*
<div id="container" class="main">
    <p>hello world</p>
</div>
*/
```


## create page
```javascript
const {Page, createMenu} = require("@ryanforever/js2html")

let page = new Page({
    title: "My Website",
    header: "My Page",
    section: "Section Name",
    footer: createMenu({
        home: "index.html"
    }),
    css: {
        html: {
            "font-family": "helvetica",
        }
    }
})

page.generate()
```
