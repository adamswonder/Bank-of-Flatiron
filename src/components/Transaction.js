import React from "react";

function Transaction(props) {
  
  const newTransaction = props.transactions.map((transaction) => {
    
    return (
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    );
  });
  return <>{newTransaction}</>;
}

export default Transaction;
