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

app.createServer(myRouter);	// creating the server from the app framework


console.log(myRouter);

describe('the server testing', function() {
	before(function(done) {
		app.createServer(myRouter);
		myRouter.get('/test', function(){
			res.send(200, 'testing 1, 2, 3')
		})
		app.start(3030, function() {
			console.log('server started on port 3030');
			done();
		});
	});

	it('should be able to start the server at specific port', function() {
		myRouter.get('/test', function() {
			res.end(function(err, res) {
				if(err) console.log(err);
				expect(res.status).to.eql(200);	
			});	
		});	
	});
	
	it('should be able to write the body', function() {
		myRouter.get('/test', function(){
			res.end(function(err, res) {
				if(err) console.log(err);
				expect(res.body).to.eql('testing 1, 2, 3');
			});
		});
	});
	
	it('should write proper header', function() {
		myRouter.get('/test', function() {
			res.end(function(err, res) {
				if(err) console.log(err);
				expect(res.status).to.eql(200);
			});
		});
	});
});
