exports.seed = function (knex) {
	return knex('project').insert([
		{
			name: 'project_name_here',
			description: 'the project description',
			completed: false,
		},
	]);
};
