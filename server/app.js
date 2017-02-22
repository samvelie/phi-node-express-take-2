console.log('Starting the server!!!!');

var express = require('express'); //this takes in the express folder which returns a function
var app = express();    //calling this function returns an object with many useful properties

app.use(express.static('server/public'));

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}];

app.get('/fish', function(req, res){
  console.log('req:', req);
  res.send(fishiesList);
});

app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});

app.get('/fish/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

app.get('/fish/last', function(req, res){
  res.send(fishiesList[fishiesList.length-1]);
});

app.get('/fish/last/name', function(req, res){
  var lastFishIndex = fishiesList.length-1;
  res.send(fishiesList[lastFishIndex].name);
});

app.listen(5000);
