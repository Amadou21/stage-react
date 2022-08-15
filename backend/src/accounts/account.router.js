const { Router } = require('express');
const service = require('./account.service');


const path = '/accounts';


const create = async (req, res) => {
    let account = req.body;
    console.log({ account });
    account = await service.create(account);
    res.json(account);
}

const findAll = async (req, res) => {
    const clients = await service.findAll();
    res.json(clients);
}

const findById = async (req, res) => {
    const id = +req.params.id;
    const account = await service.findById(id);
    res.json(account);
}

const update = async (req, res) => {
    let account = req.body;
    const id = +req.params.id;
    //const _client = await service.update(id, account);
    account = await service.update(id, account);
    res.json(account);
}

const destroy = async (req, res) => {
    const id = +req.params.id;
    //const _client = await service.update(id, account);
    account = await service.destroy(id);
    res.json(account);
}

const addRoutes = (app) => {
    const router = Router();

    router.post('/', create)
    router.put('/:id', update)
    router.delete('/:id', destroy)
    router.get('/:id', findById)
    router.get('/', findAll)



    app.use(path, router);
}

module.exports = {
    addRoutes
}