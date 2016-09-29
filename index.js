'use strict';
const path = require('path');
const isPathInside = require('is-path-inside');

module.exports = str => {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof str}\``);
	}

	return process.env.PATH.split(path.delimiter).some(pth => isPathInside(str, pth) || str === pth);
};
