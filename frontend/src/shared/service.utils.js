import axios from "axios";

export const urlBase = "http://localhost:3001";

export const httpClient = axios.create();

// ------------------------------------------------------------------------

const urlBaseJsonPH = "https://jsonplaceholder.typicode.com/";

const path =
  (urlBase) =>
  (operation = "") =>
    urlBase + operation;

const crud = (urlBase) => (entityName) => {
  const entityUrl = path(urlBase)(entityName);
  return {
    findAll: async () => await fetch(entityUrl).then((res) => res.json()),
    findById: async (id) =>
      await fetch(entityUrl + id).then((res) => res.json()),
    destroy: (id) => fetch(entityUrl + id, { method: "DELETE" }), //.then((res) => res.json())
    update: (client) =>
      fetch(entityUrl + client.idClient, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      }).then((res) => res.json()),
    create: (client) =>
      fetch(entityUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      }).then((res) => res.json()),
  };
};

export const crudJPH = crud(urlBaseJsonPH);
export const crudLocalhost = crud(urlBase);
