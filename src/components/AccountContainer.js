import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

//Holds the transactions function and states processes
function AccountContainer() {
  const [transactions, setTransactions] = useState([]); //Hook to update state of our component when rendered
  const [lookUp, setLookUp] = useState([]); // updates our search trail when the event is listned to
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((res) => {
        setTransactions(res);
        setLookUp(res);
      });
  }, []);

  //handles the search event by checking if what was passed as a search matches the current transaction description
  const realTimeSearch = (event) => {
    setTransactions(
      lookUp.filter((res) => //filter here returns the value(s) that match the specified text input
        res.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) //checks whether the typed phrase is present during filter
      )
    );
  }

  return (
    <div>
      <Search realTimeSearch={realTimeSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
