exports.seed = function (knex) {
	return knex('task').insert([
		{ description: 'task description', notes: 'the notes', completed: false, project_id: 1 },
		{ description: 'another task description', notes: 'the notes', completed: false, project_id: 1 },
	]);
};
