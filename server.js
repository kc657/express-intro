// server.js
// SERVER-SIDE JAVASCRIPT
var express = require('express')
var app = express()

var albums = [{
  title: 'Cupid Deluxe',
  artist: 'Blood Orange'
},
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
]

// server.js

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function (req, res) {
  console.log(__dirname)
  res.sendFile('views/index.html' , { root : __dirname});
})

app.use(express.static('public'))

app.get('/albums', function (req, res) {
  res.sent(res.json(albums));
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/')
})
