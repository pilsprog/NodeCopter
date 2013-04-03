"use strict";
var http = require('http'),
    url = require('url'),
    mysql = require('mysql'),
    config = require('../config'),
    connection = config.mysql;

exports.save = function (options, callback) {
    var post = {name: options.name, email: options.email, bring: options.bring, from: options.from };
    connection.connect();
    connection.query('INSERT INTO nodecopter SET ?', post, function (err, result) {
        console.log(result);
    });
};
