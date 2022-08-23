import { crudLocalhost } from "../../shared/service.utils";

const entityName = "accounts/";

export const { findAll, findById, destroy, create, update } = crudLocalhost(entityName);