import React, { useState } from "react";

//handles creation of a new transaction from inputs and updates our DOM on the same
function AddTransactionForm(AddTransactionHandler) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  //On form submit, formData states gets updated uniquely following the id
  function handleChange(event) {
    const key = event.target.id;
    setFormData({ ...formData, [key]: event.target.value });
  }

  //Listens to the event on click and submits the form data to our json file at the backend appending new transaction
  function click(event) {
    event.preventDefault();
    fetch(" http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((transaction) => AddTransactionHandler(transaction));
    setFormData({ date: "", description: "", category: "", amount: "" });
  }

  // Returned values are set inside the form fields for display    
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={(event) =>
              setFormData({ ...formData, amount: event.target.value })
            }
          />
        </div>
        <button className="ui button" type="submit" onClick={click}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
