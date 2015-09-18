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

		console.log('inside router.route 1' )
		if(req.method === "GET" && !res.header || !res.send) { 
			console.log('2 before res.head set for get request inside GET and no header')
			res.header = function(headerData) {
				res.setHead(headerData); //coming back undefined, trying writing .header info into test	
			};
			console.log('3 after res.head set for get request');
			res.send = function(data) {
				this.write(data);
			};
		}; 

		if (req.method === "POST" && !res.body) {
			var body;
			console.log('4 inside POST and no res.body');

			res.json = function(err, req) {
				if(err) console.log('5 err before json set head ');
				this.setHead(200, {'content-type': 'application/json'});
				console.log('6 req after json set head ');
				req.on('data', function(chunk) {
					body += chunk; // assigns chunk to req.body
					fs.writeFileSync(__dirname + '/../files/' + body +'.txt'); //writes file of post
				});

				this.send(JSON.stringify({msg: 'post request stored'}));
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