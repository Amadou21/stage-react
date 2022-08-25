import {useMutation, useQuery} from 'react-query';
import {findAll, findById,removeClient,updateClient, createClient} from './client.service';
import { useDelete as _useDelete, useCreate as _useCreate, useUpdate as _useUpdate } from '../../shared/store.utils';

const entity = 'clients/'

export const useClients = ()=>{
    const {data, refetch: fetchClients, ... others} = useQuery([entity, 'findAll'], findAll, {
        refetchInterval: 2000
    } );
    let clients = data || [];
    return {clients, fetchClients, ... others};
}

export const useDelete = ()=> _useDelete(removeClient);
export const useUpdate = ()=> _useUpdate(updateClient);
export const useCreate = ()=> _useCreate(createClient);

