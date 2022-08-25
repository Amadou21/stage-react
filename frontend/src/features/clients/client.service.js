import { crudLocalhost } from "../../shared/service.utils"; 
import {useQuery} from 'react-query';
const entityName = 'clients/'


export const {findAll, findById,removeClient,updateClient, createClient} = crudLocalhost(entityName);


