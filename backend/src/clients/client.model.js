const { sequelize, Sequelize, defaultOptions } = require('../db/db');

const ClientModel = sequelize
    .define('ClientModel', {
        idClient: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
        type: { type: Sequelize.STRING },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        age: { type: Sequelize.INTEGER },
        email: { type: Sequelize.STRING },
    }, {
        ...defaultOptions,
        tableName: 'clients',
    });

module.exports = {
    ClientModel,
};