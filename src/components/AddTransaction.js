import React, { useState } from "react";

export default function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}