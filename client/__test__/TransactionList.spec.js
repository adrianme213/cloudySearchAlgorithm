import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { transactions } from '../../server/db.json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import TransactionList from '../src/components/TransactionList';
import TransactionDetailView from '../src/components/TransactionDetailView';

describe('TransactionList component', () => {
  test('finds three titles for table headers', () => {
    const wrapper = mount(
      <TransactionList data={transactions} />
    );
    const p = wrapper.find('th');
    expect(p.length).toBe(3);
  });
  test('renders one detail view per data entry', () => {
    const wrapper = mount(
      <TransactionList data={transactions} />
    );
    const entries = wrapper.find(TransactionDetailView);
    expect(entries.length).toBe(transactions.length);
  });
});
