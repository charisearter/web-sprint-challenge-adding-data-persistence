const db = require('../data/db-config.js');

module.exports = {
  findProjects,
  findResources,
  findTasks,
  addProjects, //add to project list
  addResources,//add to resources list
  addTasks, //add to tasks list
  findProjectById //to be able to add tasks and resources to project
}

//GET list of Projects
function findProjects() {
  return db("projects")
};

//GET project by ID
//Get by ID Done
function findProjectById(id) {
  return db("projects").where({ id }).first();
};

//GET list of Resources
function findResources() {
  return db("resources")
};

//GET list of Tasks
function findTasks() {
  return db("tasks")
};

//ADD Projects
function addProjects(project){
  return db('projects').insert({...project})
};

//ADD Resources
function addResources(resource){
  return db('resources').insert({...resource})
};


//ADD Tasks
function addTasks(task){
  return db('tasks')
  .join('projects')
  .insert({...task})
};
