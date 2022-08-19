// const clients = require('./client.data');
const { ClientModel } = require("./client.model");

const create = async (client) => {
  client = await ClientModel.create(client);

  return client;
};

const update = async (client, id) => {
  const _client = await ClientModel.update(client, { where: { idClient: id } });

  return _client;
};

const destroy = async (id) => {
  await ClientModel.destroy({ where: { idClient: id } });
};

const findAll = async () => {
  const clients = await ClientModel.findAll();

  return clients;
};

const findById = async (id) => {
  id = +id;
  const client = await ClientModel.findOne({ where: { id } });

  console.log({ client });

  return client;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  destroy,
};
