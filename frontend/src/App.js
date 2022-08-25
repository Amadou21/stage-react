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

const App = () => {
  return (
    <ClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"clients"} element={<ClientListPage />} />
          <Route path={"create_client"} element={<CreateClientPage />} />
          <Route path={"clients/update/:id"} element={<UpdateClientPage />} />
          <Route path={"clients/:id"} element={<ClientDetailPage />} />

          <Route path={"users"} element={<UserList />} />
          <Route path={"users/:id"} element={<UserDetail />} />

          <Route path={"test_context"} element={<TestContextPage />} />
        </Routes>
      </BrowserRouter>
    </ClientProvider>
  );
};

export default App;
