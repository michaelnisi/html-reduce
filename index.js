// html-reduce

const sanitize = require('sanitize-html')

const opts = {
  allowedTags: [
    'a',
    'br',
    'h1',
    'p'
  ],
  allowedAttributes: {
    a: ['href']
  },
  allowedSchemes: [
    'http',
    'https',
    'mailto'
  ],
  transformTags: {
    'h2': 'h1',
    'h3': 'h1',
    'h4': 'h1',
    'h5': 'h1',
    'h6': 'h1',
    'li': 'br',
    'ol': 'p',
    'ul': 'p'
  }
}

module.exports = (html) => {
  return sanitize(html.trim(), opts)
}
