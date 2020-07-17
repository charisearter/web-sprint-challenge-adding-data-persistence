
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate instead of del (delete) to reset primary key each time
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description:'something here'},
        {name: 'Project 2'}, //description optional testing
        {name: 'Project 3', description:'some other description'},
      ]);
    });
};

