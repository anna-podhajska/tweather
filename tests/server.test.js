var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /', (t) => {
  return request(t.context.app)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      t.is($('a').first().text().trim(), 'sunny')
    })
})

test('GET /add-post', (t) => {
  return request(t.context.app)
    .get('/add-post')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      // console.log($('input').first()['0'].attribs.name, 'text' )
      t.is($('input').first()['0'].attribs.name, 'text')
    })
})
