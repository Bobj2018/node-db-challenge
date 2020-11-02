const db = require('../../data/db-config');

module.exports = {
	find,
	findTask,
	findById,
	add,
	addTask,
	update,
	remove,
};

function find() {
	return db('project');
}
function findTask(id) {
	return db('project as p').where('p.id', 't.project_id').join('task as t', { 'p.id': 't.project_id' });
}
function findById(id) {
	return db('project').where({ id }).first();
}
function add(data) {
	return db('project').insert(data);
}
function addTask(data, project_id) {
	return db('task').insert({ ...data, project_id });
}
function update(data, id) {
	return db('project').where({ id }).update(data);
}
function remove(id) {
	return db('project').where({ id }).del();
}
