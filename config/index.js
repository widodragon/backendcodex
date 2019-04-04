'use strict'
var pg=require('pg');
var config=require('./config.js');
const Sequelize = require('sequelize');

module.exports={
	name: 'rest-api',
	hostname: 'http://localhost',
	version: '0.0.1',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	uri:new Sequelize(`postgres://${config.development.username}:${config.development.password}@${config.development.host}:5432/${config.development.database}`)
}