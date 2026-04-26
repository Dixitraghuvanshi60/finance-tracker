import React from "react";

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h3>Transactions</h3>
     <ul>
         {transactions.map(t => (
        <li key={t.id} className={t.amount < 0 ? "expense" : ""}>
            {t.text} ₹{t.amount}
            <button onClick={() => deleteTransaction(t.id)}>X</button>
        </li>
        ))}
     </ul>  
    </div>
  );
}