'use strict';
var expect = require('chai').expect;
var Router = require(__dirname + './../lib/router');

describe('the router', function() {
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
	it('should be able to set up put request', function(){
		var testReq = { 
			method: 'PUT', 
			url: '/test'
		};
		this.router.put('/test', function(req, res) {
			expect(res.test).to.eql('testing 1, 2, 3');
		});
		this.router.route(testReq, testRes); 
	});
	it('should be able to set up patch request', function(){
		var testReq = { 
			method: 'PATCH', 
			url: '/test'
		};
		this.router.patch('/test', function(req, res) {
			expect(res.test).to.eql('testing 1, 2, 3');
		});
		this.router.route(testReq, testRes); 
	});	
	it('should be able to set up delete request', function(){
		var testReq = { 
			method: 'DELETE', 
			url: '/test'
		};
		this.router.delete('/test', function(req, res) {
			expect(res.test).to.eql('testing 1, 2, 3');
		});
		this.router.route(testReq, testRes); 
	});			
});
