import React, {useContext, useEffect, useState} from 'react';
import {createContext} from "react";
import {useClients, useDelete, useUpdate,useCreate} from "../../clients/client.store";
import { useQueryClient } from 'react-query';



export const ClientContext = createContext({
    clients: [],
    addClient: (client) => {},
    updateClient: (client) => {},
    deleteClient: (id) => {},
    filter: '',
    filteredClients: [],
    setFilter: (filter) => {},
    posts: [],
});
export const useClientContext = () => useContext(ClientContext);

const match = (client, filter) => {
    const filterBase = (client.firstName + client.lastName + client.id + client.address).toLowerCase();
    return filterBase.indexOf(filter) >= 0;
}

export default function ClientProvider({children}) {
    const queryClient = useQueryClient();
    const {clients, fetchClients, ... others} = useClients();

    const {remove} = useDelete();
    const {update} = useUpdate();
    const {create} = useCreate();
    const [filter, setFilter] = useState('');
    const [filteredClients, setFilteredClients] = useState(clients);
    
    
  

    useEffect(() => {
        const _filter = filter.toLowerCase();
        const _filteredClients = clients.filter(client => match(client, _filter));
        setFilteredClients(_filteredClients);
    }, [filter, clients]);


    const addClient = (client) => {
        //client = {...client, id: clients.length+1}
        create(client);
    }

    const updateClient = (_client) => {
        update(_client);
    }

    const deleteClient = async(id) => {
        remove(id);

    }

    const clientContext = {
        clients,
        addClient,
        updateClient,
        deleteClient,
        filter,
        filteredClients,
        setFilter,
    }

    return (
        <ClientContext.Provider value={clientContext}>
            {children}
        </ClientContext.Provider>
    );
}
