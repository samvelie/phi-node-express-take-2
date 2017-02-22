console.log('Starting the server!!!!');

var express = require('express'); //this takes in the express folder which returns a function
var app = express();    //calling this function returns an object with many useful properties

app.use(express.static('server/public'));

app.listen(5000);
