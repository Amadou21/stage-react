import React, { createContext, useContext, useState, useEffect } from 'react';
import { findAll, create, update, destroy } from "../client.service";

export const ClientContext = createContext({
  clients: [],
  addClients: (client) => { },
  updateClients: (client) => { },
  deleteClients: (id) => { },
  filter: '',
  filteredClients: [],
  setFilter: (filter) => { },
  posts: [],
  loading: () => { },
  setLoading: () => { },
});

export const useClientContext = () => useContext(ClientContext);

const match = (client, filter) => { //Cette fonction sert dans la recherche
  const filterBase = (client.firstName + client.lastName + client.idClient + client.address).toLowerCase(); //la rech se fait sur lstNa, frtName, add, id
  return filterBase.indexOf(filter) >= 0;
}

const ClientProvider = ({ children }) => {

  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState(''); // 
  const [filteredClients, setFilteredClients] = useState(clients); // Liste des clients filtrer par rapport a la recherche
  const [loading, setLoading] = useState(true);
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    findAll()
      .then(clients => setClients(clients));
    setLoading(false);
  }, [compteur]);

  useEffect(() => { //Use effect sert a reactualser la recherche apres chaque changement de filter qui est lier au textFild de la recherche
    const _filter = filter.toLowerCase();
    const _filteredClients = clients.filter(client => match(client, _filter));
    setFilteredClients(_filteredClients);
    setLoading(false);
  },
    [filter, clients]);


  const addClients = (client) => {
    client = { ...client }
    create(client);
    setCompteur(compteur + 1)
  };

  const updateClients = (_client) => {
    const _clients = clients.map((client) => client.idClient === _client.idClient ? _client : client)
    update(_client.idClient, _client)
    setCompteur(compteur + 1)
  };

  const deleteClient = (id) => {
    
    destroy(id);
    setCompteur(compteur + 1)
  }

  //------------------------------Liste page functions

  const clientContext = {
    clients,
    addClients,
    updateClients,
    deleteClient,
    filter,
    filteredClients,
    setFilter,
    loading,
    setLoading
  }

  return (
    <ClientContext.Provider value={clientContext}>
      {children}
    </ClientContext.Provider>
  );
};
export default ClientProvider;