'use strict';
/*
 * GET home page.
 */
var mail = require('../app/mail'),
	url = require('url');

exports.index = function (req, res) {
	res.render('index', { title: 'Kompiler' });
};


exports.mail = function (req, res) {
	var param = url.parse(req.url, true).query,
		name = param.name,
		email = param.email;
	mail.save({'email': email, 'name': name});
	res.render('index', { title: 'Saved' });
};
