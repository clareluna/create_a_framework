'use strict'
var fs = require('fs');

function Get(data) {
	this.output = data;
};

Get.prototype.text = function(text_res) {
	this.output.writeHead(200, 'Content-Type': 'text/plain');
	this.output.write(text_res); 
	this.output.end();
};

Get.prototype.json = function(json_res) {
	this.output.writeHead(200, 'Content-Type': 'application/json');
	this.output.write(JSON.stringify(json_res));
	this.output.end()
}

//will most likely omit