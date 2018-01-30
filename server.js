var http = require('http');

var server_port =  process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

/*
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(server_port, server_ip_address);
*/

var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});

app.get('/temperature/:value', function(req, res) {

   // Get /temperature/10.3
   console.log(req.params.value)
   // => Matt

   res.send('{"id": 1,"name":"Matt",
     "band":"BBQ Brawlers"}');
});

app.listen(server_port, server_ip_address);
console.log('Listening ...');
