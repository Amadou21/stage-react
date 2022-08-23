import { useQuery } from "react-query";
import { findAll, findById, destroy, create, update } from "./client.service";
import { useCreate as _useCreate, useDelete as _useDelete, useUpdate as _useUpdate} from "../../shared/store";

const entity = "clients";

export const useClients = () => {
    const { data, refetch, ...others } = useQuery([entity, "findAll"], findAll,
        { refetchInterval: 2_000 });
    let clients = data || [];
    return { clients, ...others };
}

export const useClientById = (id) => {
    const { data, ...others } = useQuery([entity, "findById"], () => findById(id));
    let client = data || [];
    return { client, ...others };
}

export const useCreate = () => _useCreate(create)

export const useDelete = () => _useDelete(destroy)

export const useUpdate = () => _useUpdate(update)
