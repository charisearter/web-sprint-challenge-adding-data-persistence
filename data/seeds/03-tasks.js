
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      // tasks can only belong to ONE project
      // notes are optional
      // description is required
      return knex('tasks').insert([
        { description: 'a description', project_id: 1, notes: 'some notes'},
        { description: 'a description 2', project_id: 1},
        { description: 'a description 3', project_id: 2},
        { description: 'a description 4', project_id: 1, notes: 'some notes'},
        { description: 'a description 5', project_id: 3},
        { description: 'a description 6', project_id: 3, notes: 'some notes'},
        { description: 'a description 7', project_id: 3},
        { description: 'a description 8', project_id: 2, notes: 'some notes'},
        { description: 'a description 9', project_id: 1, notes: 'some notes'},

      ]);
    });
};
