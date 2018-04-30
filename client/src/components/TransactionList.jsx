import React from 'react';
import TransactionDetailView from './TransactionDetailView';
const TransactionList = ({data}) => (
  <div>
    {data.map((entry) => <TransactionDetailView key={entry.amount+Math.random() * 100} transaction={entry}/> )}
  </div>
);

export default TransactionList;
