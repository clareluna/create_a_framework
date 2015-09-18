var fs = require('fs');

var routes = {
	'GET': {},
	'POST': {},
};

var Router = function() {

};

Router.prototype.get = function(route, callback) {
	routes.GET[route] = callback;
};

Router.prototype.post = function(route, callback) {
	routes.POST[route] = callback;
};


Router.prototype.route = function(req, res) {
	if (typeof routes[req.method][req.url] === 'function'){
		routes[req.method][req.url](req, res);

		if(req.method === "GET" && !res.writeHead) {
			res.writeHead(200, {'content-type': 'text/plain'}); //coming back undefined
			console.log(writeHead);	
		}; 

		if (req.method === "POST" && !res.body) {
			var body;
			
			res.json = function(req) {
				this.writeHead(200, {'content-type': 'application/json'});
			
				req.on('data', function(chunk) {
					body += chunk; // assigns chunk to req.body
					fs.writeFile(__dirname + '/../files/' + body +'.txt'); //writes file of post
				});
			};	
		};
	}
	 
	else {
		res.writeHead(404, {'content-type': 'text/plain'});
		res.write('page not found');
		res.end();
	};	
};


module.exports = exports = function() {
return new Router();	
}