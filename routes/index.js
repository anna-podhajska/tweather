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

router.get("/post/:id", function(req, res) {
  var db = req.app.get('connection')
  db("posts").where("weather_id", req.params.id)
  .then(function(posts) {
    // console.log(posts[1]);
    res.render("posts", {posts: posts})
  })
})

module.exports = router
