'use strict';
var test = require('ava');
var isPathGlobal = require('./');

test('check if a path is in PATH', function (t) {
	t.assert(isPathGlobal('/bin/sh'), isPathGlobal('/bin/sh'));
	t.assert(isPathGlobal('/usr/bin'), isPathGlobal('/usr/bin'));
	t.assert(!isPathGlobal(__filename), isPathGlobal(__filename));
	t.end();
});
