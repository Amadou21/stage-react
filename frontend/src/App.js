import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ClientDetails from './features/clients/components/ClientDetails';
import CreatePage from './features/clients/components/CreatePage';
import ListPage from './features/clients/components/ListPage';
import UpdatePage from './features/clients/components/UpdatePage';
import ClientProvider from './features/clients/components/ClientContext';

import AccountDetails from './features/accounts/components/AccountDetails';
import AccountCreatePage from './features/accounts/components/AccountCreatePage';
import AccountListPage from './features/accounts/components/AccountListPage';
import AccountUpdatePage from './features/accounts/components/AccountUpdatePage';
import AccountProvider from './features/accounts/components/AccountContext';
//import Nouveau from './pages/Nouveau';

const App = () => {

  return (
    <div>
      <ClientProvider>
        <AccountProvider>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Home />} />

              <Route path={'/clients'} element={<ListPage />} />
              <Route path={'/clients/:id'} element={<ClientDetails />} />
              <Route path={'/clients/new'} element={<CreatePage />} />
              <Route path={'/clients/update/:id'} element={<UpdatePage />} />
              {/* ---------------------------------------------------------------- */}
              <Route path={'/accounts'} element={<AccountListPage />} />
              <Route path={'/accounts/:id'} element={<AccountDetails />} />
              <Route path={'/accounts/new'} element={<AccountCreatePage />} />
              <Route path={'/accounts/update/:id'} element={<AccountUpdatePage />} />
            </Routes>
          </BrowserRouter>
        </AccountProvider>
      </ClientProvider>
    </div>
  );
};

export default App;