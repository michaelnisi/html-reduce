'use strict'

const fs = require('fs')
const path = require('path')
const pickup = require('pickup')
const reduce = require('../')
const test = require('tap').test
const assert = require('assert')

test('basics', (t) => {
  const p = path.join(__dirname, 'basics.xml')

  const xml = fs.createReadStream(p)
  const parser = pickup({ eventMode: true })

  xml.pipe(parser)

  let prev

  parser.on('entry', (entry) => {
    if (prev) {
      assert(prev.id === entry.id)
      const wanted = prev.summary
      const found = reduce(entry.summary)
      t.same(found, wanted)
      return prev = null
    }
    prev = entry
  })

  parser.on('end', () => {
    t.end()
  })

  parser.resume()
})
