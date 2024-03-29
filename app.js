'use strict';
/*jslint nomen:true es5:true */
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3333);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.configure('development', function () {
		app.use(express.errorHandler());
		app.locals.pretty = true;
	});
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);

	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/mail', routes.mail);

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
