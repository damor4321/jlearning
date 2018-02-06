var express = require('express');
var fs = require('fs');
var wav = require('wav');
var cmd = require('node-cmd');
var csv = require("csvtojson");
var BinaryServer = require('binaryjs').BinaryServer;

var session = require('express-session');
var credentials = require('./credentials.js');
var parseurl = require('parseurl');

var outFile = 'demo.wav';

var app = express();
app.disable('x-powered-by');
app.use(require('body-parser').urlencoded({extended: true}));
// app.set('port', process.env.PORT || 8080);
app.set('port', 8080);


app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: credentials.cookieSecret,
}));


csv({ delimiter:";" }).fromFile("sentences2.csv").on("end_parsed",function(items){ //when parse finished, result will be emitted here.
  app.set('items', items); 
});

var routes = require('./api/routes/sentencesRoutes'); //importing route
routes(app); //register the route

//Ejemplo: GET http://localhost:8080/check/10
/*
app.get('/check/:id', function(req, res, next) {
  var items = app.get('items');
  var idx=req.params.id;
  console.log('items['+idx+'] =' + JSON.stringify(items[idx]));
  res.send(items[idx]);
});
*/

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to terminate');
});


binaryServer = BinaryServer({port: 9001});
binaryServer.on('connection', function(client) {
    console.log('new connection');

    var fileWriter = new wav.FileWriter(outFile, {
        channels: 1,
        sampleRate: 48000,
        bitDepth: 16
    });

    client.on('stream', function(stream, meta) {
        console.log('new stream');
        stream.pipe(fileWriter);

        stream.on('end', function() {
            fileWriter.end();
            console.log('wrote to file ' + outFile);
        });
    });
});

