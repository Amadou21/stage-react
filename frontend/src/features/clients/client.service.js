import { crudLocalhost } from "../../shared/service.utils";

const entityName = "clients/";

export const { findAll, findById, destroy, create, update } = crudLocalhost(entityName);
