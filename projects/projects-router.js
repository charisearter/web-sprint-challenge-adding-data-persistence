const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

//GET projects
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

//GET resources
router.get('/resources', (req, res) => {
  Projects.findResources()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ 
      message: 'Failed to get resources',
    error: err.message
    });
  });
});

//GET tasks
router.get('/tasks', (req, res) => {
  Projects.findTasks()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ 
      message: 'Failed to get tasks',
    error: err.message
    });
  });
});
module.exports = router;

