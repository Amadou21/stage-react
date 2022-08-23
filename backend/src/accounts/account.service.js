// const Accounts = require('./Account.data');
const { AccountModel } = require('./account.model');

const create = async (account) => {
    account = await AccountModel.create(account);
    return account;
}

const findAll = async () => {
    const accounts = await AccountModel.findAll();

    return accounts;
}

const findById = async (id) => {
    let idAccount = +id;
    const account = await AccountModel.findOne({ where: { idAccount } });
    console.log({ account });

    return account;
}

const update = async (id, account) => {
    const _account = await AccountModel.update(account, { where: { idAccount: id } });
}

const destroy = async (id) => {
    await AccountModel.destroy({ where: { idAccount: id } });
}


module.exports = {
    findAll, findById, create, update, destroy
}
