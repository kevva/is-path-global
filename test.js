'use strict';

var isPathGlobal = require('./');
var test = require('ava');

test('check if a path is in PATH', function (t) {
	t.assert(isPathGlobal('/bin/sh'));
	t.assert(isPathGlobal('/usr/bin'));
	t.assert(!isPathGlobal(__filename));
	t.end();
});
