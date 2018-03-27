[![Build Status](https://secure.travis-ci.org/michaelnisi/html-reduce.svg)](http://travis-ci.org/michaelnisi/html-reduce)
[![Coverage Status](https://coveralls.io/repos/github/michaelnisi/html-reduce/badge.svg?branch=master)](https://coveralls.io/github/michaelnisi/html-reduce?branch=master)

# html-reduce

The **html-reduce** [Node.js](http://nodejs.org/) package provides a single function that boils down HTML to the simplest, obviously opinionated, form. The initial use case of **html-reduce** is normalizing [RSS item-level descriptions](http://cyber.harvard.edu/rss/encodingDescriptions.html) and [atom:summary elements](https://tools.ietf.org/html/rfc4287#section-4.2.13) to a simple form that can be easily rendered by a naïve client, with very limited HTML parsing capabilities, producing homgenous output.

**html-reduce** is a [sanitize-html](https://github.com/punkave/sanitize-html) configuration.

## Specification

Reduce all HTML to `<h1>`, `<p>`, `<a>`, and `<br />`, while retaining newline formatting of HTML and plain text input. Keep
text of ignored tags.

## License

[MIT License](https://github.com/michaelnisi/html-reduce/blob/master/LICENSE)
