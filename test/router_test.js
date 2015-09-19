'use strict';
var Router = require(__dirname + './../lib/router');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP)
var expect = chai.expect;
var fs = require('fs');
var http = require('http');
var url = 'localhost:3000';
var app = require('./../lib/app');

var myRouter = new app.Router(); // appending app with Router object

myRouter.get('/test', function(req, res) { // giving method values to myRouter framework
	res.send(200, 'this is a test'); //setting the send params
});

app.createServer(myRouter);	// creating the server from the app framework

app.start(3030, function() {
	console.log('server was started on port 3030');
})	
// then run the expects here
//expect

console.log(myRouter);

// describe('the server started', function() {
// 	before(function() {
// 		app.createServer(myRouter);
// 	})
// })

//describe('the basic router functions', function() {
// 	// beforeEach(function() {
// 	// 	http.createServer(router.route).listen(3000, function(){
// 	// 		console.log('server running at port 3000');
// 	// 	});
// 	// 	router.get('/test', function(req, res) { //sets up get response
// 	// 		console.log('type of res.header' + typeof res.header);
// 	// 		res.header;
// 	// 		console.log('res.header ' +res.header)
// 	// 		res.send('testing 1, 2, 3');
// 	// 	});

// 	// 	router.post('/test', function(req, res) { //sets up post request
// 	// 		res.json(req);// needs work
// 	// 	});	
// 	// });

// 	it('should be able to respond to a get request', function(done) {
// 		chai.request(url) //undefined is not a function?
// 			.get('/test') 
// 			.end(function(err, res){
// 			console.log('res.header in chai request ' +JSON.stringify(res.header))
// 				expect(res.status).to.eql(200);
// 				// expect(res.header).to.eql({'content-type': 'text/plain'});
// 				expect(res.body).to.eql('testing 1, 2, 3');
// 			done();	
// 		});
// 	});
// });		

// 	it('should be able to set up post request', function(){
// 		var testReq = { 
// 			method: 'POST', 
// 			url: '/test'
// 		};
// 		router.post('/test', function(req, res) {
// 			expect(res.test).to.eql('testing 1, 2, 3');
// 		});
// 		this.router.route(testReq, testRes); 
// 	});		
// });