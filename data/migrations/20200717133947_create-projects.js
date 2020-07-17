
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments(); //auto id
      tbl.text('name', 255).notNullable(); //required name
      tbl.text('description', 255)// optional description
      tbl.boolean('completed').notNullable().defaultTo(false);//required completed table boolean set to false by default
    })
    .createTable('resources', tbl => {
      tbl.increments(); //auto id
      tbl.text('name', 255).unique().notNullable(); //required name that is unique
      tbl.text('description', 255)// optional description
      tbl.integer('project_id')//project id that is auto incremented foreign key
        .unsigned().notNullable().references("id").inTable('projects');//never negative.required.id from projects table
    })
    .createTable('tasks', tbl => {
      tbl.increments(); //auto id
      tbl.text('description', 255).notNullable() //required description
      tbl.text('notes')//optional notes
      tbl.integer('project_id')//project id that is auto incremented foreign key
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('projects')//never negative.required.id from projects table
        .onUpdate('CASCADE')//if project id updates the children of it should too
        .onDelete('CASCADE')//if project id is deleted the tasks should too
      tbl.boolean('completed').notNullable().defaultTo(false);//required completed table boolean set to false by default 
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
