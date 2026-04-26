import React from "react";

export default function Balance({ transactions }) {
  const total = transactions.reduce((acc, item) => acc + item.amount, 0);

  return <h3>Balance: ₹{total}</h3>;
}