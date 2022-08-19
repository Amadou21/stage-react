const { sequelize, Sequelize, defaultOptions } = require("../db/db");

const ClientModel = sequelize.define(
  "ClientModel",
  {
    idClient: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
    type: { type: Sequelize.STRING },
    prenom: { type: Sequelize.STRING },
    nom: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER },
    adresse: { type: Sequelize.STRING },
  },
  {
    ...defaultOptions,
    tableName: "clients",
  }
);

module.exports = {
  ClientModel,
};
