var express = require('express');
var app = express();
app.use(express.static('.'));

var port = 8080;

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
	console.log("app listening on port "+port);
});