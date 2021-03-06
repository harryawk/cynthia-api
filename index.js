var express = require('express')
var bodyParser = require('body-parser')
var the_request = require('request')
var formidable  = require('formidable')
var app = express().use(bodyParser.json()); // creates express http server


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

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use('/static', express.static('./public'))

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
  var _ = require('lodash')

  the_request({
    uri: 'http://f56c7322.ngrok.io/cynthia/api/v1/predict/',
    json: {
      img: req.body['img']
    },
    method: 'POST'
  }, (err, respond, body) => {
    console.log(body)
    
    // var result = JSON.parse(body)
    var result = body

    var results = []
    var multer = require('multer');
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'public/')
      },
      filename: function (req, file, cb) {
        // cb(null, uuid.v4() + path.extname(file.originalname));
        cb(null, '0.jpg');
      }
    })
    var upload = multer({ storage: storage });

    var fs = require('fs');


    fs.writeFile('public/0.jpg', result.result[0], 'binary',
      function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
        results.push('http://f072a7ca.ngrok.io/static/' + '0' + '.jpg')
        res.json(results)
      }
    );
    
    // fs.writeFile(__dirname + '/public/' + '0' + '.jpg', 'data:image/jpeg;base64,' + result.result[0], 'binary', function(err) {
    // fs.writeFile('./public/0.jpg', 'data:image/jpeg;base64,' + result.result[0], 'binary', function(err) {
    //   if (err) console.error(err)
    //   console.log('File saved')
    //   results.push('http://f072a7ca.ngrok.io/static/' + '0' + '.jpg')
    //   console.log(result.result[0])
    //   console.log('0')
    //   // if (x == result.result.length - 1) 
    // })
    // fs.writeFile('./public/1.jpg', 'data:image/jpeg;base64,' + result.result[1], 'binary', function(err) {
    //   if (err) console.error(err)
    //   console.log('File saved')
    //   results.push('http://f072a7ca.ngrok.io/static/' + '1' + '.jpg')
    //   console.log('1')
    //   // if (x == result.result.length - 1) 
    // })
    // res.json(results)
    // for (var x = 0; x < result.result.length; x++) {
    //   // res.json(results)
    //   // results.push('data:image/jpeg;base64,' + result.result[x])
    // }

  })
  // res.json({
  //   test: 'POST REQUEST',
  //   request: 'POST REQ',
  //   gambars: [
  //     {
  //       title: 'one',
  //       image: req.body
  //     },
  //     {
  //       title: 'two',
  //       image: req.body
  //     },
  //     {
  //       title: 'three',
  //       image: req.body
  //     },
  //     {
  //       title: 'four',
  //       image: req.body
  //     },
  //     {
  //       title: 'five',
  //       image: req.body
  //     },
  //     {
  //       title: 'six',
  //       image: req.body
  //     },
  //     {
  //       title: 'seven',
  //       image: req.body
  //     },
  //     {
  //       title: 'eight',
  //       image: req.body
  //     },
  //     {
  //       title: 'nine',
  //       image: req.body
  //     },
  //     {
  //       title: 'ten',
  //       image: req.body
  //     },
  //   ]
  // })

})

app.post('/sendsms', (req, res) => {
  if (req.body.to && req.body.msg) {
    the_request({
      uri: 'https://api.mainapi.net/token/',
      auth: {
        bearer: 'OHhybWI1V3FBcGZmMzJTQ3hiY21iak9uNWtrYTpxVTk5NzA5d0FZYzNHbVBFMHliSVM5OUMxdHNh'
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      form: {
        grant_type: 'client_credentials'
      },
      method: 'POST'
    }, (err, response, body) => {
      console.log(body)
      var result = JSON.parse(body)
      console.log(result.access_token)
      if (result['access_token']) {
        var token = result['access_token']
        console.log(token)
        var the_link = 'https://api.mainapi.net/smsnotification/1.0.0/messages/'
        the_request({
          uri: the_link,
          auth: {
            bearer: token
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          form: {
            msisdn: req.body.to,
            content: "Anda berhasil login"
          },
          method: 'POST'
        }, (err, respond, body) => {
          console.log(body)
          if (JSON.parse(body)['status'] == 'SUCCESS') {
            res.send('OK')
          } else {
            res.send('NOT OK')
          }
        })
      }
    })
  } else {
    res.send('Not enough information')
  }
})

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));