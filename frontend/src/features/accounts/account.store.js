import { useQuery } from "react-query";
import { findAll, findById, destroy, create, update } from "./account.service";
import { useCreate as _useCreate, useDelete as _useDelete, useUpdate as _useUpdate} from "../../shared/store";

const entity = "accounts";

export const useAccounts = () => {
    const { data, refetch, ...others } = useQuery([entity, "findAll"], findAll,
        { refetchInterval: 2_000 });
    let accounts = data || [];
    return { accounts, ...others };
}

export const useAccountById = (id) => {
    const { data, ...others } = useQuery([entity, "findById"], () => findById(id));
    let account = data || [];
    return { account, ...others };
}
export const useCreate = () => _useCreate(create)

export const useDelete = () => _useDelete(destroy)

export const useUpdate = () => _useUpdate(update)
