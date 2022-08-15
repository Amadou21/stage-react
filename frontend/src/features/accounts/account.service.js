import { httpAccount, urlBase } from "../../shared/service.utils";

const url = urlBase + '/Accounts';

export const create = async (account) => {
    const { data } = await httpAccount.post(url, account);

    return data;
}

export const findAll = async () => {
    const { data } = await httpAccount.get(url);
    return data;
}

export const findById = async (idAccount) => {
    const { data } = await httpAccount.get(url + "/" + idAccount);
    return data;
}

export const update = async (id, account) => {
    const url2 = url + "/" + id;
    const { data } = await httpAccount.put(url2, account);
    return data;
}

export const destroy = async (id) => {
    const url2 = url + "/" + id;
    const { data } = await httpAccount.delete(url2, id);
    return data;
}


