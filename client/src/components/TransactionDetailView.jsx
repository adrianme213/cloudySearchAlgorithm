import React from 'react';

const TransactionDetailView = ({transaction}) => (
  <div>
    <h3>{transaction.amount}</h3>
    <p>{transaction.date}</p>
    <p>{transaction.card_last_four}</p>
  </div>
);

export default TransactionDetailView;
