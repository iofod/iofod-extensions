var express = require('express')
var cors = require('cors')
var fs = require('fs')
var app = express()
var port = 3001

app.get('/:path', cors(), function (req, res) {
  var path = __dirname + '/src/' + req.params.path

  try {
    if (fs.statSync(path).isFile()) {
      res.sendFile(path)
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    res.sendStatus(404)
  }
})

app.listen(port, function () {
  console.log('listening on port ' + port)
})