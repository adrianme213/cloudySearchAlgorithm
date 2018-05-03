import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { transactions } from '../../server/db.json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import TransactionDetailView from '../src/components/TransactionDetailView';

describe('TransactionDetailView component', () => {
  test('displays the date and time converted to DD-MM-YYYY HH:MM', () => {
    const transaction = transactions[0];
    const wrapper = mount(
      <TransactionDetailView transaction={transaction} />
    );
    const p = wrapper.find('.date-time');
    expect(p.text()).toBe('27-01-2018 12:34');
  });

  test('renders the correct amount with dollar sign and two decimal places', () => {
    const { amount } = transactions[0];
    const wrapper = mount(
      <TransactionDetailView transaction={transactions[0]} />
    );
    const p = wrapper.find('.amount');
    expect(p.text()).toBe(`$${amount.toFixed(2)}`);
  });

  test('renders the last four digits', () => {
    const transaction = transactions[0];
    const wrapper = mount(
      <TransactionDetailView transaction={transaction} />
    );
    const p = wrapper.find('.card-last-four');
    expect(p.text()).toBe('2544');
  });

});
