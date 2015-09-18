'use strict';
var expect = require('chai').expect;
var Router = require(__dirname + './../lib/router');

describe('the basic router functions', function() {
	var testRes; 
	beforeEach(function() {
		this.router = Router();
		testRes = {test: 'testing 1, 2, 3'};		
	});

	it('should be able to set up get request', function(){
		var testReq = { 
			method: 'GET', 
			url: '/test'
		};
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

describe('the advanced router functions', function () {
	beforeEach(function() {
		this.router = Router(); //start new router
	});

	it('should be able to add a header to a get request', function() {
		var testReq = {
			method: 'GET',
			url: '/test'
		};
		var testRes = {'content-type': 'text/plain'};
	
	//this.router.get('/test', function(req, res) {
			//expect(res.header['Content-Type']).to.eql('text/plain'); coming back undefined in prev test
		});
		//this.router.route(testReq, testRes); // should I be including writeHead data in testReq?
	});

	it('should be able to process post data and save the json data into req.body', function() {
		var testReq = {
			method: 'POST',
			url; '/test'
			//data? to be used as body/chunk
		}
		var testRes = { // what data I expect to become a 'file'
		};
		// this.router.post('/test', function(req, res) {
		// expect(__dirname + './../files').to.have(__dirname + './../files/' + body + '.txt');
		});
	});
});

			