var express = require('express')
var bodyParser = require('body-parser')
var the_request = require('request')

var app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.get('/', (req, res) => {
  res.json({
    try: "Coba API",
    request: "data",
    data: "the_data"
  })
})

app.post('/postrequest', (req, res) => {
  res.json({
    test: 'POST REQUEST',
    request: 'POST REQ'
  })
})