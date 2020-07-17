const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ 
      message: 'Failed to get projects',
    error: err.message
    });
  });
});

module.exports = router;