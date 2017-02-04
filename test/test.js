/*
* @Author: eleven
* @E-mail: eleven.image@gmail.com
* @Date:   2016-10-25 20:35:46
* @Last Modified by:   eleven
* @Last Modified time: 2017-02-04 21:38:38
*/

'use strict';

let assert = require('assert');
let File = require('vinyl');
let getPath = require('../');

describe('get path test', function() {
	describe('in buffer mode', function() {
		it('#getpath()', function() {

			let paths = getPath('./test/');

			assert.equal(['./test/test.js']. paths);

		})
	})
});