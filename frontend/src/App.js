import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import ClientListPage from "./component/clients/ClientListPage";
import CreateClientPage from "./component/clients/CreateClientPage";
import UpdateClientPage from "./component/clients/UpdateClientPage";
import ClientDetailPage from "./component/clients/ClientDetailPage";
import UserList from "./component/users/UserList";
import UserDetail from "./component/users/UserDetail";
import TestContextPage from "./component/test-context/TestContextPage";
import ClientProvider from "./component/clients/ClientContext";

// const compteur_id = 0;
const App = () => {
  {
    /*/ const [clients, setClients] = useState([]);

  // const [compteur, setCompeurs] = useState(1);

  // fonction pour ajouter (creer) un client
  // const ajouterClient = (client) => {
  //   setCompeurs(compteur + 1);
  //   client = { ...client, id: compteur };
  //   console.log(client);

  //   // ici setClients recupère tous les anciens clients et rajouter le client courant
  //   setClients([...clients, client]);
  // };

  // modifier un client (on compare tous les clients avec le client recuperer et lorsqu'on
  //  a une correspondance on change sinon on rajoute le clients tel quel)
  // const modifierClient = (_client) => {
  //   const mes_clients = clients.map((client) =>
  //     client.idClient === _client.id ? _client : client
  //   );
  //   setClients(mes_clients);
  // };

  // const supprimerClient = (id) => {
  //   const _clients = clients.filter((client) => client.idClient !== id);
  //   setClients(_clients);
  /*/
  }

  return (
    <ClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route
            path={"clients"}
            element={
              <ClientListPage
              // liste_clients={clients}
              // deleteClient={supprimerClient}
              />
            }
          />
          <Route
            path={"create_client"}
            element={<CreateClientPage />} //addClient={ajouterClient}
          />
          <Route
            path={"clients/update/:id"}
            element={
              <UpdateClientPage /> //clients={clients} updateClient={modifierClient}
            }
          />
          <Route
            path={"clients/:id"}
            element={
              <ClientDetailPage /> //clients={clients} updateClient={modifierClient}
            }
          />
          <Route path={"users"} element={<UserList />} />

          <Route path={"users/:id"} element={<UserDetail />} />
          <Route path={"test_context"} element={<TestContextPage />} />
        </Routes>
      </BrowserRouter>
    </ClientProvider>
  );
};

export default App;
