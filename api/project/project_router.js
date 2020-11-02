const express = require('express');
const PROJECT = require('./project_model');

const router = express.Router();

router.get('/', (req, res) => {
	PROJECT.find()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

router.get('/:id', (req, res) => {
	PROJECT.findById(req.params.id)
		.then((projects) => {
			if (projects) {
				res.status(200).json(projects);
			} else {
				res.status(400).json({ message: "project doesn't exist" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

router.get('/:id/tasks', (req, res) => {
	PROJECT.findTask(req.params.id)
		.then((projects) => {
			if (projects) {
				res.status(200).json(projects);
			} else {
				res.status(400).json({ message: "project doesn't exist" });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

router.post('/', (req, res) => {
	PROJECT.add(req.body)
		.then((project) => {
			res.status(201).json({ message: 'success' });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});
router.post('/:id', (req, res) => {
	PROJECT.addTask(req.body, req.params.id)
		.then((project) => {
			res.status(201).json({ message: 'success' });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

router.put('/:id', (req, res) => {
	PROJECT.update(req.body, req.params.id)
		.then((project) => {
			res.status(201).json({ message: 'success' });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

router.delete('/:id', (req, res) => {
	PROJECT.remove(req.params.id)
		.then((project) => {
			res.status(200).json({ message: 'removed' });
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

module.exports = router;
