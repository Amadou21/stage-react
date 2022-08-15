const { sequelize, Sequelize, defaultOptions } = require('../db/db');

const AccountModel = sequelize
    .define('AccountModel', {
        idAccount: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
        type: { type: Sequelize.STRING },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        age: { type: Sequelize.INTEGER },
        email: { type: Sequelize.STRING },
    }, {
        ...defaultOptions,
        tableName: 'accounts',
    });

module.exports = {
    AccountModel,
};