/**
 * cette page fornit toutes les dependances des composant client
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { useCreate } from "../../shared/store.utils";
// import { create, destroy, findAll, update } from "./client.service";
// import { create, destroy, update } from "./client.service";
import {
  useClients,
  useDeleteClient,
  useUpdateClient,
  useCreateClient,
} from "./client.store";

// ici c'est une initialisation des elements ou champs qu'offre le context ClientContext
export const ClientContext = createContext({
  clients: [],
  ajouterClient: (client) => {},
  modifierClient: (client) => {},
  supprimerClient: (id) => {},
  laRecherche: "",
  clientTrouverParRecherche: [],
  setLaRecherche: (laRecherche) => {},
  isLoading: true,
});

export const useClientContext = () => useContext(ClientContext);

const match = (client, laRecherche) => {
  const base_de_la_recherche = (
    client.nom +
    client.prenom +
    client.adresse +
    client.idClient
  ).toLowerCase();
  return base_de_la_recherche.indexOf(laRecherche) >= 0;
};

const ClientProvider = ({ children }) => {
  //useClient
  const { clients, isLoading } = useClients();
  const { destroy, isSuccess } = useDeleteClient();
  const { update } = useUpdateClient();
  const { create } = useCreateClient();

  // useState
  // const [clients, setClients] = useState([]);
  const [laRecherche, setLaRecherche] = useState("");
  const [clientTrouverParRecherche, setClientTrouverParRecherche] =
    useState(clients);
  const [compteur, setCompteur] = useState(1);
  // useEffect
  // useEffect(() => {
  // findAll().then((clients) => setClients(clients));
  // }, [compteur]);

  // console.log(clients);

  useEffect(() => {
    const _laRecherche = laRecherche.toLowerCase();
    const _ClientTrouverParRecherche = clients.filter((client) =>
      match(client, _laRecherche)
    );
    setClientTrouverParRecherche(_ClientTrouverParRecherche);
  }, [laRecherche, clients]);
  // const [compteur, setCompeurs] = useState(1);
  //------------------------------------------------------------------------------

  // comportement

  // fonction pour ajouter (creer) un client
  const ajouterClient = (client) => {
    //(client)
    // useCreateClient();
    //------------------------------------------------------------------------------
    create(client);
    setCompteur(compteur + 1);
    //------------------------------------------------------------------------------
    // setCompeurs(compteur + 1);
    // client = { ...client };
    // console.log(client);
    // ici setClients recupère tous les anciens clients et rajouter le client courant
    // setClients([...clients, client]);
  };

  // modifier un client (on compare tous les clients avec le client recuperer et lorsqu'on
  //  a une correspondance on change sinon on rajoute le clients tel quel)
  const modifierClient = (_client) => {
    // const mes_clients = clients.map((client) =>
    //   client.idClient === _client.id ? _client : client
    // );
    // alert("Client");
    update(_client);
    // setClients(mes_clients);
    setCompteur(compteur + 1);
  };

  const supprimerClient = (id) => {
    // const _clients = clients.filter((client) => client.idClient !== id);
    // setClients(_clients);
    destroy(id);
    if (isSuccess) {
      alert("Client deleted");
    }
    setCompteur(compteur + 1);
  };

  //------------------------------------------------------------------------------
  const clientContext = {
    clients,
    ajouterClient,
    modifierClient,
    supprimerClient,
    laRecherche,
    clientTrouverParRecherche,
    setLaRecherche,
    isLoading,
  };
  //------------------------------------------------------------------------------

  // render
  return (
    <ClientContext.Provider value={clientContext}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
