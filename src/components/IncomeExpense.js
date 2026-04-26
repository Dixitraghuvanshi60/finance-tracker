import React from "react";

export default function IncomeExpense({ transactions }) {
  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="inc-exp">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
}