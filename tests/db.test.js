var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('connect to a DB', (t) => {
  var db = t.context.connection
  db('weather')
    .then(function(weatherSheep){
      t.is(weatherSheep.length, 6)
    })
})
