'use strict';

var http = require('http');
var Router = require('./router');

module.exports = Server = function(route, port) {
	var server = http.createServer(route);
		server.listen(port, function(){
			console.log('server is running at port: ' + port);
		})

	return server;	
};