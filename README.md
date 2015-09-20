SEA D49 Create a Framework
===============================

A lightweight framework that populates the writeHead either (200, {'Content-Type': 'text/plain'}) or (200, {'Content-Type': 'application/json'}) for GET requests

Additionally, starts router and server at specified ports. 

####Example
~~~Javascript

var app = require('./app');
var myRouter = new app.Router();

myRouter.get('/testRoute', function(err, res) {
	res.send(200, 'this is a test');
});

app.createServer(myRouter)

app.start(port, function() {console.log('server started on port: ' + port)});

~~~

####Functions

-__myRouter__ 
Sets the functionality to respond to get requests

-__myRouter.get([route], function(err, res) {
	res.send([statusCode], [request data])
});__
User provides route, status code, and request data to build the response from get request. If no status code provided, will default to 200.

-__app.createServer(myRouter)__
Creates the server

-__app.start([port], [callback])__
Sets the port that the server will run on. Additionally, has optional callback function to alert user that server is running 