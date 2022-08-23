import React, { createContext, useContext, useState, useEffect } from 'react';
import { useClients } from '../client.store';

export const ClientContext = createContext({
  clients: [],
  filter: '',
  filteredClients: [],
  setFilter: (filter) => { },
  posts: [],
});

export const useClientContext = () => useContext(ClientContext);

const match = (client, filter) => { //Cette fonction sert dans la recherche
  const filterBase = (client.firstName + client.lastName + client.idClient + client.address).toLowerCase(); //la rech se fait sur lstNa, frtName, add, id
  return filterBase.indexOf(filter) >= 0;
}

const ClientProvider = ({ children }) => {

  const {clients} = useClients();
  const [filter, setFilter] = useState(''); // 
  const [filteredClients, setFilteredClients] = useState(clients); // Liste des clients filtrer par rapport a la recherche

 useEffect(() => {
    const _filter = filter.toLowerCase();
    const _filteredClients = clients.filter(client => match(client, _filter));
    setFilteredClients(_filteredClients);
  },[filter, clients]);


  const clientContext = { clients, filter, filteredClients, setFilter}

  return (
    <ClientContext.Provider value={clientContext}>
      {children}
    </ClientContext.Provider>
  );
};
export default ClientProvider;