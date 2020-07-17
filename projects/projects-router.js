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

//POST projects
router.post('/', (req,res) => {
  const projectData = req.body;

  Projects.addProjects(projectData)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(err => {
    res.status(500).json({
      message: "Failed to create new project",
      error: err.message
    });
  });
});

//POST resources
router.post('/resources', (req,res) => {
  const resourceData = req.body;

  Projects.addResources(resourceData)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(err => {
    res.status(500).json({
      message: "Failed to create new resource",
      error: err.message
    });
  });
});

//POST tasks
router.post('/tasks', (req,res) => {
  const taskData = req.body;

  Projects.addTasks(taskData)
  .then(task => {
    res.status(201).json(task)
  })
  .catch(err => {
    res.status(500).json({
      message: "Failed to create new task",
      error: err.message
    });
  });
});

