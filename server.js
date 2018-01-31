var http = require('http');

var server_port =  process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

var express = require('express');
var app = express();

app.get('/temperature/:value', function(req, res) {

   console.log(req.params.value)

   t_celsius = req.params.value;

   //  Celsius to Fahrenheit conversion
   // T(F) = T(C) * 9 / 5.0 + 32

   // t_fahrenheit = .... TO BE COMPLETED
  
   t_fahrenheit  = t_celsius * 9 /5.0  + 32;

   //
   res.send('{"fahrenheit": '+ t_fahrenheit +'}');
});

app.listen(server_port, server_ip_address);
console.log('Listening ...');
