const db = require('../data/db-config.js');

module.exports = {
  findProjects,
  findResources,
  findTasks,
  addProjects,
  addResources,
  addTasks,
}

//GET list of Projects
function findProjects() {
  return db("projects")
};