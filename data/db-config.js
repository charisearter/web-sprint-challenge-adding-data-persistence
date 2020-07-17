//import knex from knex
const knex = require('knex');

//import knex file
const config = require('../knexfile.js');

//export
module.exports = knex(config.development);

