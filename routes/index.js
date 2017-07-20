var express = require('express')
var router = express.Router()

var db = require('../db')

// router.get('/', function (req, res) {
//   db.getUsers(req.app.get('connection'))
//     .then(function (users) {
//       res.render('index', { users: users })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })


router.get("/", function (req, res) {
  var db = req.app.get('connection')
  db('weather')
  .then(function (weather) {
    res.render("home", {weather: weather})
  })

})

module.exports = router
