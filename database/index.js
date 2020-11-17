const Sequelize = require("sequelize");

const dbconfig = require("./config/database");
const Turma = require("../models/Turma");

const connection = new Sequelize(dbconfig);

Turma.init(connection);

module.exports = connection;
