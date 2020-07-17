//import express
const express = require('express');
//import helmet to make express more secure
const helmet = require('helmet');

//import the router from location
const projectsRouter = require('../projects/projects-router');

//connect with database configuration file
const db =require('../data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

//set up main endpoint and router
server.use('/api/projects', projectsRouter);

//main endpoint GET

server.get('/api/projects', (req, res) => {
  db('projects')
  .then(project => {
    res.status(200).json({ data: project });
  })
  .catch(err => {
    res.status(500).json({ 
      message: "There was a problem getting the projects",
      error: err.message
    });
  });
});

//export
module.exports = server;