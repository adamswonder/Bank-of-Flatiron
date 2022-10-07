import React, { useState } from "react";

//handles creation of a new transaction from inputs and updates our DOM on the same
function AddTransactionForm() {
  // initialize states for the form input
  const [description, setDescription] = useState('');
  const [category, setUpdatedCategory] = useState('');
  const [amount, setNewAmount] = useState('');
  const [id, setIdentifier] = useState('');
  const [date, setNewDate] = useState('');

  function submitForm() {
    const updateTransc = { id, date, description, category, amount };

    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateTransc),
    }).then(() => {
      // setDescription("")
      // setUpdatedCategory("")
      // setNewAmount("")
      // setIdentifier("")
      // setNewDate("")
      console.log('Mmh..')
    });
  }

  // Returned values are set inside the form fields for display    
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" key={setIdentifier}>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e)=> setNewDate(e.target.value)}
          />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e)=>setUpdatedCategory(e.target.value)}
          />
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) =>setNewAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit" onClick={submitForm}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
