exports.seed = function (knex) {
	return knex('resource').insert([
		{ name: 'Lambda Student', description: 'A soon to be hired developer' },
		{ name: 'MacBook Pro #1', description: 'an overly expensive laptop computer' },
	]);
};
