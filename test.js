import test from 'ava';
import m from './';

test('check if a path is in PATH', t => {
	t.true(m('/bin/sh'));
	t.true(m('/usr/bin'));
	t.false(m(__filename));
});

test('accepts a string', t => {
	t.throws(m.bind(null, 0), 'Expected a `string`, got `number`');
});
