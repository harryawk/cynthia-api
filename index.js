var express = require('express')
var bodyParser = require('body-parser')
var the_request = require('request')
var formidable  = require('formidable')
var app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.get('/', (req, res) => {

  console.log('=========== / =============')
  console.log(req)
  console.log('=========== / =============')
  res.json({
    try: "Coba API",
    request: "data",
    data: "the_data"
  })
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/postrequest', (req, res) => {
  
  console.log('=========== /postrequest =============')
  console.log(req)
  console.log('=========== /postrequest =============')
  
  
  console.log('=========== /postrequest HEADERS =============')
  console.log(req.headers)
  console.log('=========== /postrequest HEADERS =============')
  
  console.log('=========== /postrequest HEADERS =============')
  console.log(req.body)
  console.log('=========== /postrequest HEADERS =============')
  
  console.log('=========== /postrequest FILES =============')
  console.log(req.files)
  console.log('=========== /postrequest FILES =============')
  
  var form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    res.write('file uploaded')
    res.end()
  })

  res.json({
    test: 'POST REQUEST',
    request: 'POST REQ'
  })
})