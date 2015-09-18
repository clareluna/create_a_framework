'use strict';

var http = require('http');
var Router = require('./lib/router');

var server = http.createServer(Router.route).listen(3000, function(){
	console.log('the server is successfully running on port 3000');
});