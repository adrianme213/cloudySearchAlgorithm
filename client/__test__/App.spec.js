import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { transactions } from '../../server/db.json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import App from '../src/components/App';
import Search from '../src/components/Search';
import NoResults from '../src/components/NoResults';
import TransactionList from '../src/components/TransactionList';

describe('App component', () => {

  test('should have Cloudy Search Algorithm title', () => {
    const wrapper = mount(<App />);
    const header = wrapper.find('h1');
    expect(header.length).toBe(1);
    expect(header.text()).toBe('Cloudy Search Algorithm');
  });
  test('renders one search component', () => {
    const wrapper = mount(<App />);
    const searchField = wrapper.find(Search);
    expect(searchField.length).toBe(1);
  });
  test('renders NoResults and changes to List with state change', () => {
    const wrapper = mount(<App />);
    const noResults1 = wrapper.find(NoResults);
    const transactionList1 = wrapper.find(TransactionList);
    expect(noResults1.length).toBe(1);
    expect(transactionList1.length).toBe(0);
    wrapper.setState({
        filteredTransactions: transactions,
        loading: false,
        transactions: transactions
      }, () => {
      const noResults2 = wrapper.find(NoResults);
      const transactionList2 = wrapper.find(TransactionList);
      expect(noResults2.length).toBe(0);
      expect(transactionList2.length).toBe(1);
    });
  });
});
