var express = require('express');
var os = require("os");

// Constants
var PORT = 8080;
var HOSTNAME = os.hostname();

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world from container: ' + HOSTNAME + '\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
