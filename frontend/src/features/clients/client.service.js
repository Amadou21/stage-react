import { httpClient, urlBase } from "../../shared/service.utils";

const url = urlBase + '/clients';

export const create = async (client) => {
    const { data } = await httpClient.post(url, client);

    return data;
}

export const findAll = async () => {
    const { data } = await httpClient.get(url);
    return data;
}

export const findById = async (idClient) => {
    const { data } = await httpClient.get(url + "/" + idClient);
    return data;
}

export const update = async (id, client) => {
    const url2 = url + "/" + id;
    const { data } = await httpClient.put(url2, client);
    return data;
}

export const destroy = async (id) => {
    const url2 = url + "/" + id;
    const { data } = await httpClient.delete(url2, id);
    return data;
}


