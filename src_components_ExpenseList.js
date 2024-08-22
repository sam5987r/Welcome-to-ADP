import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  // Example expenses data
  const expenses = [
    { id: 1, description: 'Lunch', amount: 15, category: 'Food' },
    { id: 2, description: 'Taxi', amount: 20, category: 'Transportation' },
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          <span>Description: {expense.description}</span>
          <span>Amount: ${expense.amount}</span>
          <span>Category: {expense.category}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
