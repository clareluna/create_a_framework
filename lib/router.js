var app = require('http');
var fs = require('fs'); //only need if I build the post file safe system 

var routes = { 
	'GET': {},
	'POST': {},
};

var Router = function() { //Router will take the THIS routes object and set the get and post methods to them
	this.routes = routes; //Router will be exported on line 34 with module.exports = Router -- whole object gets exported
};

Router.prototype.get = function(route, callback) { 
	routes.GET[route] = callback;
};


Router.prototype.post = function(route, callback) {
	routes.POST[route] = callback;		
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

// Code for building post files recorders
// callback(req, res);
// 		var body = '';  //clears body of text
// 		var counter = 1; // starts tracking post requests at 1 
// 		res.jsonBody = function(err, req) {
// 			if(err) console.log(err); 
// 			this.setHeader(200, {'content-type': 'application/json'});
// 			req.on('data', function(chunk) {
// 				body += chunk; // starts collecting data from request
// 				var file = fs.createWriteStream(body); // streams body into file var
// 				return req;
// 			});
// 			req.on('end', function(){ //end of chunking data
// 				fs.writeFileSync(__dirname + '/../files/' + counter + '.txt', file); // creates a file with increment number, fills body with 'file'
// 				counter ++; // moves counter up for next function
// 				return req;
// 			});
// 			this.send(JSON.stringify({msg: 'stored file'})); //send response that file stored
// 			console.log('connection closed');
// 		};
// 		res.end();
