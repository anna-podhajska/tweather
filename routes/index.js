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

//ania - added a route to view single post and comment on it:
router.get("/post-comment/:id", function (req, res) {
  var db = req.app.get('connection')

  db('posts').where("id", req.params.id).first()
  .then(function (post) {
    db('comments').where("post_id", req.params.id)
      .then(function (comments_array) {
        post.comments = comments_array
          res.render("post-comment", post)
      })
  })
})
router.post("/post-comment/:id", function (req, res) {
    var db = req.app.get('connection')
    var newComment = req.body
    db("comments").insert(newComment)
    .then(function(newCommId) {
      var id = req.params.id
      res.redirect("/post-comment/"+id)
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
