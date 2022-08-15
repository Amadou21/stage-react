// const clients = require('./client.data');
const { ClientModel } = require('./client.model');

const create = async (client) => {
    client = await ClientModel.create(client);
    return client;
}

const findAll = async () => {
    const clients = await ClientModel.findAll();
    return clients;
}

const findById = async (id) => {
    const client = await ClientModel.findOne({ where: { idClient:id } });
    console.log({ client });
    return client;
}

const update = async (id, client) => {
    await ClientModel.update(client, { where: { idClient: id } });
}

const destroy = async (id) => {
    await ClientModel.destroy({ where: { idClient: id } });
}


module.exports = {
    findAll, findById, create, update, destroy
}
