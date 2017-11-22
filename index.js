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
  
  // var form = new formidable.IncomingForm()
  // var cloudinary = require('cloudinary');
  // cloudinary.config({
  //   cloud_name: 'df32bpcj6',
  //   api_key: '336891974495423',
  //   api_secret: '7Tj9z2MYUCLclPiVtImYIVjT5xU'
  // });
  // form.parse(req, (err, fields, files) => {
  //   console.log(files['pic'])
  //   var fs = require('fs')

  //   fs.readFile(files['pic'], 'utf8', (err, data) => {
  //     if (err) {
  //       console.error('error')
  //       console.error(err)
  //     }
  //     console.log(data)
  //   })
    // cloudinary.uploader.upload(files['pi`c'], function (result) {

    //   console.log('---- Secure URL :: ' + result['secure_url'] + ' ----');
    //   var ktp_url = result['secure_url'];

    // })`
    // res.end()
    // res.send('asdf')
  // })

  // res.send('asdf')

  res.json({
    test: 'POST REQUEST',
    request: 'POST REQ'
  })
})