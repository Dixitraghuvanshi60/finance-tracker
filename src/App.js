import React, { useState, useEffect } from "react";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) setTransactions(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h2>Finance Tracker</h2>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;