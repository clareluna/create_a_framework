var http = require('http'); // needed to build server on lines 8-9
var Router = require('./router.js') // bringing in router which give functions to get
var app = module.exports = {}; // the app with methods(Router, createServer, and start attached)

app.Router = Router; //brings in router functions

app.createServer = function(router){ 
	this.server = function(){ // this returns the server including the res.send
		return http.createServer(function(req, res){
			console.log('req.method', req.method)
			console.log('req.url', req.url)
			res.send = function(num, data){

				if (typeof(data) == 'string'){
					this.writeHead(num, {'Content-Type': 'text/plain'});
					this.write(data);
					return this.end();
				} else if (typeof(data) == 'object'){
					this.writeHead(num, {'Content-Type': 'application/json'});
					this.write(JSON.stringify(data));
					return this.end();
				}
			}.bind(res);
		
			router.routes[req.method][req.url](req, res)
		})
	}()
}

app.start = function(port, callback){
	this.server.listen(port, callback)
}
