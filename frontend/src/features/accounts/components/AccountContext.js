import React, { createContext, useContext, useState, useEffect } from 'react';
import { findAll, create, update, destroy } from "../account.service";

export const AccountContext = createContext({
  accounts: [],
  addAccounts: (account) => { },
  updateAccounts: (account) => { },
  deleteAccounts: (id) => { },
  filter: '',
  filteredAccounts: [],
  setFilter: (filter) => { },
  posts: [],
});

export const useAccountContext = () => useContext(AccountContext);

const match = (account, filter) => { //Cette fonction sert dans la recherche
  const filterBase = (account.firstName + account.lastName + account.idaccount + account.address).toLowerCase(); //la rech se fait sur lstNa, frtName, add, id
  return filterBase.indexOf(filter) >= 0;
}

const AccountProvider = ({ children }) => {

  const [accounts, setAccounts] = useState([]);
  const [filter, setFilter] = useState(''); // 
  const [filteredAccounts, setFilteredAccounts] = useState(accounts); // Liste des accounts filtrer par rapport a la recherche

  useEffect(() => {
    findAll()
      .then(accounts => setAccounts(accounts));
  }, [setAccounts]);

  useEffect(() => { //Use effect sert a reactualser la recherche apres chaque changement de filter qui est lier au textFild de la recherche
    const _filter = filter.toLowerCase();
    const _filteredAccounts = accounts.filter(account => match(account, _filter));
    setFilteredAccounts(_filteredAccounts)
  },
    [filter, accounts]);


  const addAccounts = (account) => {
    account = { ...account, idAccount: new Date().getTime() }
    create(account);
    setAccounts([...accounts, account])
  };

  const updateAccounts = (_account) => {
    const _accounts = accounts.map((account) => account.idAccount === _account.idAccount ? _account : account)
    update(_account.idAccount, _account)
    setAccounts(_accounts);
  };

  const deleteAccount = (id) => {
    const _accounts = accounts.filter(account => account.idAccount !== id);
    destroy(id);
    setAccounts(_accounts);
  }

  //------------------------------Liste page functions

  const accountContext = {
    accounts,
    addAccounts,
    updateAccounts,
    deleteAccount,
    filter,
    filteredAccounts,
    setFilter,
  }

  return (
    <AccountContext.Provider value={accountContext}>
      {children}
    </AccountContext.Provider>
  );
};
export default AccountProvider;