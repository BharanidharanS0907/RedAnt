var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./api/routes/mainRoute')

  app.use( bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var server = app.listen(3000, "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("RedAnt app listening at http://%s:%s", host, port)
  
});

routes.getRoutes(app);

