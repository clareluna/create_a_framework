var app = require('http');
var fs = require('fs'); //only need if I build the post file safe system 

var routes = { 
	'GET': {},
};

var Router = function() { //Router will take the THIS routes object and set the get and post methods to them
	this.routes = routes; //Router will be exported on line 34 with module.exports = Router -- whole object gets exported
};

Router.prototype.get = function(route, callback) { 
	routes.GET[route] = callback;
};

Router.prototype.route = function(req, res) {
	if (typeof routes[req.method][req.url] === 'function') {
		routes[req.method][req.url](req, res);		
	}
	else {
		res.writeHead(404, {'content-type': 'text/plain'});
		res.write('page not found');
		res.end();
	};	
};

module.exports = Router;
