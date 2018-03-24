// html-reduce

const sanitize = require('sanitize-html')

const opts = {
  allowedTags: [
    'a',
    'br',
    'p'
  ],
  allowedAttributes: {
    a: ['href']
  },
  allowedSchemes: [
    'http', 'https', 'mailto'
  ],
  transformTags: {
    'div': 'p',
    'h1': 'p',
    'h2': 'p',
    'h3': 'p',
    'h4': 'p',
    'h5': 'p',
    'h6': 'p',
    'li': 'p',
    'ol': 'p',
    'ul': 'p'
  }
}

module.exports = (html) => {
  return sanitize(html.replace(/\s\s+/g, ' '), opts)
}
