var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function(){
    console.log('Server listening on localhost:%s', port);
});

app.use('/message', function(req, res) {
    console.log('User requested an endpoint!');
});

app.use('/users', function(req, res) {
    var app = express();
    var fs = require('fs');
    var port = 8080;
});

app.use('/users', function(req, res) {
    fs.readFile('./data1.json', 'utf-8', function(err, data) {
        res.send(data);
    });
});