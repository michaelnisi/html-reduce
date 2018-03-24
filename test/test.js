'use strict'

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const pickup = require('pickup')
const reduce = require('../')
const test = require('tap').test

test('lists', (t) => {
  t.is(
    reduce('<ul><li>a</li><li>b</li><li>c</li></ul>'),
    '<p><p>a</p><p>b</p><p>c</p></p>'
  )
  t.is(
    reduce('<ol><li>a</li><li>b</li><li>c</li></ol>'),
    '<p><p>a</p><p>b</p><p>c</p></p>'
  )
  t.end()
})

test('podcasts', (t) => {
  const p = path.join(__dirname, 'podcasts.xml')

  const xml = fs.createReadStream(p)
  const parser = pickup({ eventMode: true })

  xml.pipe(parser)

  let prev

  parser.on('entry', (entry) => {
    if (prev) {
      assert(prev.id === entry.id)
      const wanted = prev.summary
      const found = reduce(entry.summary)
      t.is(found, wanted)
      return prev = null
    }
    prev = entry
  })

  parser.on('end', () => {
    t.end()
  })

  parser.resume()
})
