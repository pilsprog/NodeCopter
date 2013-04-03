"use strict";
var http = require('http'),
    url = require('url'),
    mysql = require('mysql'),
    config = require('../config');

exports.save = function (options, callback) {
    var connection = mysql.createConnection(config.mysql);
    connection.connect();
    var post = {name: options.name, email: options.email, bring: options.bring, from: options.from };
    connection.query('INSERT INTO nodecopter SET ?', post, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
    connection.end();
};