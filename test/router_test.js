'use strict';
var expect = require('chai').expect;
var Router = require(__dirname + './../lib/router');

describe('the router', function() {
	beforeEach(function() {
		this.router = Router();
		console.log('router ' + typeof Router);
	});
	it('should be able to set up get request', function(){
		var testReq = { //setting up the route and method we want
			method: 'GET', 
			url: '/test'
		};
		var testRes = { //testing up the response we exect
			test: 'testing 1, 2, 3'
		};
		console.log('testRes ' + typeof testRes);
		console.log('testReq ' + typeof testReq);	
		this.router.get('/test', function(req, res) {
			expect(res.test).to.eql('testing 1, 2, 3');
		});
		this.router.route(testReq, testRes); //initiating the function to that req, res
	});	
});
