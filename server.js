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

   console.log(req.params.value)

   t_celsius = req.params.value;

   //  Celsius to Fahrenheit conversion
   // T(F) = T(C) * 9 / 5.0 + 32
  
   t_fahrenheit  = t_celsius * 9 /5.0  + 32;

   //
   res.send('{"fahrenheit": t_fahrenheit}');
});

app.listen(server_port, server_ip_address);
console.log('Listening ...');
