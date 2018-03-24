// html-reduce

const sanitize = require('sanitize-html')

const allowedTags = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'li',
  'b', 'i', 'strong', 'em', 'code', 'br', 'div', 'pre'
]

module.exports = function (html) {
  return sanitize(html, {
    allowedTags: allowedTags
  })
}
