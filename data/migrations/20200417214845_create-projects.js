exports.up = function (knex) {
	return knex.schema
		.createTable('resource', (table) => {
			table.increments('id');
			table.string('name').notNullable();
			table.string('description');
		})
		.createTable('project', (table) => {
			table.increments('id');
			table.string('name').notNullable();
			table.string('description');
			table.boolean('completed').notNullable().defaultTo(0);
		})
		.createTable('task', (table) => {
			table.increments('id');
			table.string('description').notNullable();
			table.string('notes');
			table.boolean('completed').notNullable().defaultTo(0);
			table.integer('project_id').notNullable().references('project.id').onUpdate('CASCADE').onDelete('CASCADE');
		})
		.createTable('project_resource', (table) => {
			table
				.integer('resource_id')
				.notNullable()
				.references('resource.id')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('project_id').notNullable().references('project.id').onUpdate('CASCADE').onDelete('CASCADE');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resource')
		.dropTableIfExists('task')
		.dropTableIfExists('project')
		.dropTableIfExists('resource');
};
