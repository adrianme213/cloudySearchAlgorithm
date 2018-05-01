import React from 'react';
import TransactionDetailView from './TransactionDetailView';

const TransactionList = ({data}) => (
  <div>
  <table className="ui eight column centered grid celled striped table">
    <tbody>
      <tr>
        <th>Date (DD-MM-YYYY HH:MM)</th>
        <th>Amount</th>
        <th>Card Last Four</th>
      </tr>
      {data.map((entry) => <TransactionDetailView key={entry.amount+Math.random() * 100} transaction={entry}/> )}
    </tbody>
  </table>
  </div>
);

export default TransactionList;
