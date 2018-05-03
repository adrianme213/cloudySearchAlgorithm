import React from 'react';

import {displayDateTime, displayAmount} from '../helpers/helpers';

const TransactionDetailView = ({transaction}) => (
  <tr>
    <td className="date-time">
      <i className="calendar outline icon"></i>{displayDateTime(transaction.date)}
    </td>
    <td className="amount">{`$${displayAmount(Number(transaction.amount))}`}</td>
    <td className="card-last-four">{transaction.card_last_four}</td>
  </tr>
);

export default TransactionDetailView;
