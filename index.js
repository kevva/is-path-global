'use strict';

var delimiter = require('path').delimiter;
var isPathInside = require('is-path-inside');

module.exports = function (str) {
	return process.env.PATH.split(delimiter).some(function (path) {
		return isPathInside(str, path) || str === path;
	});
};
