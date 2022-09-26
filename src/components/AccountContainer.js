import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((res) => {
        setTransactions(res);
        setSearchValue(res);
      });
  }, []);

  function change(event) {
    setTransactions(
      searchValue.filter((res) =>
        res.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  }

  return (
    <div>
      <Search change={change} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
