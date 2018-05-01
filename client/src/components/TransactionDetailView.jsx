import React from 'react';

import {displayDateTime, displayAmount} from '../helpers/helpers';

const TransactionDetailView = ({transaction}) => (
  <tr>
    <td>
      <i className="calendar outline icon"></i>{displayDateTime(transaction.date)}
    </td>
    <td>{`$${displayAmount(transaction.amount)}`}</td>
    <td>{transaction.card_last_four}</td>
    {}
  </tr>

);

export default TransactionDetailView;
