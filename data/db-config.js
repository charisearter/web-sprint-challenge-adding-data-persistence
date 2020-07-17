//import knex from knex
const knex = require('knex');

//import knex file
const config = require('../knexfile.js');

//export development object for the knex file for use in codebase
module.exports = knex(config.development);

