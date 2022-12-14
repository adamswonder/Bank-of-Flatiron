import React from "react";
import Transaction from "./Transaction";

// Pass transactions as props from the parent component then render to the transactions page.
function TransactionsList({ transactions }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* sends signal to the transactions component on data format */}
        <Transaction transactions={transactions} />
      </tbody>
    </table>
  );
}

export default TransactionsList;
