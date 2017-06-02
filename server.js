var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.send('FCL WebSite');
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
});
