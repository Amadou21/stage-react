import { httpClient, urlBase } from "../../shared/service.utils";

const url = urlBase + "/clients";

export const create = async (client) => {
  const { data } = await httpClient.post(url, client);

  return data;
};

export const update = async (client) => {
  const { data } = await httpClient.put(url + "/" + client.idClient, client);

  return data;
};

export const destroy = async (id) => {
  // alert(id);
  const { data } = await httpClient.delete(url + "/" + id);

  return data;
};

export const findAll = async () => {
  const { data } = await httpClient.get(url);
  console.log(data);
  return data;
};

export const findById = async (id) => {
  const { data } = await httpClient.get(url + "/" + id);
  return data;
};
