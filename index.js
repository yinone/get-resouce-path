/*
* @Author: eleven
* @E-mail: eleven.image@gmail.com
* @Date:   2017-02-04 20:34:18
* @Last Modified by:   eleven
* @Last Modified time: 2017-02-04 22:00:39
*/

'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Gets the path to all the resources of the destination folder
 * @param  {String} _directory  destination folder
 * @param  {Array}  total      the path to all the resources
 * @return {Array}            the path to all the resources
 */

function getPath(_directory, total = []) {
	
	if(typeof _directory !== 'string') return false;
	_directory = _directory.search(/(\/|\\\\)$/) > -1 ? _directory : _directory + path.sep
	let sources = fs.readdirSync(_directory);
	sources.forEach(function(v) {
		if(v.indexOf('DS_Store') > -1) return false;
		if(!fs.statSync(_directory + v).isDirectory()) {
			total.push(_directory + v);
		}else{
			getZipPath(_directory + v, total);
		}
	});

	return total;
}

module.exports = getPath;