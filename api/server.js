const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const ProjectRouter = require('./project/project_router');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

server.use('/api/projects', ProjectRouter);

module.exports = server;
