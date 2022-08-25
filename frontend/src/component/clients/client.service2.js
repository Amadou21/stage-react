import { crudLocalhost } from "../../shared/service.utils";

const entityName = "/clients/";

export const { findAll, findById, destroy, update, create } =
  crudLocalhost(entityName);

// export const create = async (entity) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ ...entity }), 2000); //, id: new Date().getTime()
//   });
// };
