import { useQuery } from "react-query";
import { useCreate, useDelete, useUpdate } from "../../shared/store.utils";
import { update } from "./client.service2";
import { findAll, findById, create, destroy } from "./client.service2";

const entity = "clients";

export const useClients = () => {
  const {
    data,
    refetch: fetchClients,
    ...others
  } = useQuery([entity, "findAll"], findAll, {
    refetchInterval: 2_000,
  });
  let clients = data || [];
  return { clients, fetchClients, ...others };
};

export const useClientById = (id) => {
  const { data, ...others } = useQuery([entity, "findById"], () =>
    findById(id)
  );
  let client = data || [];
  return { client, ...others };
};
//------------------------------------------------------------------------------
// export const useDeleteClient = (id) => {
//   const { data, ...others } = useQuery([entity, "destroy"], () => destroy(id));
//   let client = data || [];
//   return { client, ...others };
// };

export const useCreateClient = () => useCreate(create);
export const useDeleteClient = () => useDelete(destroy);
export const useUpdateClient = () => useUpdate(update);
