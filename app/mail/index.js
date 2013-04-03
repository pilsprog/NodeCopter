"use strict";
var http = require('http'),
    url = require('url'),
    mysql = require('mysql'),
    config = require('../config'),
    pool = mysql.createPool(config.mysql);

exports.save = function (options, callback) {
    pool.getConnection(function (error, connection) {
        var post = {name: options.name, email: options.email, bring: options.bring, from: options.from };
        connection.query('INSERT INTO nodecopter SET ?', post, function (err, result) {
            console.log(result);
        });
    });
};