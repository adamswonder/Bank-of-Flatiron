import React from "react";

function Transaction(props) {
  // initializes a new array and maps each transaction to respective table field forms.
  const mappedTransactions = props.transactions.map((transaction) => {

    return (
      // table data gets displayed here
      <tr key={transaction.id}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  });
  return mappedTransactions;
}

export default Transaction;
