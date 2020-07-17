
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'resource', project_id: 1, description: "a thing" },
        { name: 'resource2', project_id: 1, description: "a thing2" },
        { name: 'resource3', project_id: 1, description: "a thing3" },
        { name: 'resource4', project_id: 3, description: "a thing4" },
        { name: 'resource5', project_id: 1, description: "a thing5" },
        { name: 'resource6', project_id: 2, description: "a thing6" },
        { name: 'resource7', project_id: 1, description: "a thing7" },
        { name: 'resource8', project_id: 2, description: "a thing8" },
        { name: 'resource9', project_id: 2, description: "a thing9" },
        { name: 'resource10', project_id: 3 },

      ]);
    });
};
