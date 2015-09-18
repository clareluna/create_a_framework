'use strict';
var Router = require(__dirname + './../lib/router');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
var http = require('http');
		
var router = new Router();

describe('the basic router functions', function() {
	console.log('before each');
	beforeEach(function() {
		http.createServer(router.route).listen(3000, function(){
			console.log('server running at port 3000');
		});
		router.get('/test', function(req, res) { //sets up get response
			res.header(200, {'content-type': 'text/plain'});// not sure what to put in here
			res.send('testing 1, 2, 3');
		});

		router.post('/', function(req, res) { //sets up post request
			res.json(req);
		});	
	});

	it('should be able to respond to a get request', function(done){
		chai.request('localhost:3000')
			.get('/test') // do I need to include header data here?
			.header(200, {'content-type': 'text/plain'}) //set header from routes.route
			.send('testing 1, 2, 3') //set response from router.routes
			.end(function(err, res){

			})
		this.router.get('/test', function(req, res) {
			expect(res.test).to.eql('testing 1, 2, 3');
		});
		this.router.route(testReq, testRes); 
	});	

	it('should be able to set up post request', function(){
		var testReq = { 
			method: 'POST', 
			url: '/test'
		};
		this.router.post('/test', function(req, res) {
			expect(res.test).to.eql('testing 1, 2, 3');
		});
		this.router.route(testReq, testRes); 
	});		
});

// describe('the advanced router functions', function () {
// 	beforeEach(function() {
// 		this.router = Router(); //start new router
// 	});

// 	it('should be able to add a header to a get request', function() {
// 		var testReq = {
// 			method: 'GET',
// 			url: '/test'
// 		};
// 		// var testRes.header = {'content-type': 'text/plain'};
	
// 	//this.router.get('/test', function(req, res) {
// 			//expect(res.header['Content-Type']).to.eql('text/plain'); coming back undefined in prev test
// 		// });
// 		//this.router.route(testReq, testRes); // should I be including writeHead data in testReq?
// 	});

// 	it('should be able to process post data and save the json data into req.body', function() {
// 		var testReq = {
// 			method: 'POST',
// 			url: '/test'
// 			//data? to be used as body/chunk
// 		}
// 		var testRes = { // what data I expect to become a 'file'
// 		};
// 		// this.router.post('/test', function(req, res) {
// 		// expect(__dirname + './../files').to.have(__dirname + './../files/' + body + '.txt');
// 		});
// 	});
// // });

// 			