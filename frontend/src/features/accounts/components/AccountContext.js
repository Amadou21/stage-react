import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAccounts } from '../account.store';

export const AccountContext = createContext({
  accounts: [],
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

  const { accounts } = useAccounts();
  const [filter, setFilter] = useState(''); // 
  const [filteredAccounts, setFilteredAccounts] = useState(accounts); // Liste des accounts filtrer par rapport a la recherche

  useEffect(() => { //Use effect sert a reactualser la recherche apres chaque changement de filter qui est lier au textFild de la recherche
    const _filter = filter.toLowerCase();
    const _filteredAccounts = accounts.filter(account => match(account, _filter));
    setFilteredAccounts(_filteredAccounts)
  }, [filter, accounts]);

  const accountContext = { accounts, filter, filteredAccounts, setFilter }

  return (
    <AccountContext.Provider value={accountContext}>
      {children}
    </AccountContext.Provider>
  );
};
export default AccountProvider;