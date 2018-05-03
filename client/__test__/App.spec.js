import React from 'react';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import { transactions } from '../../server/db.json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import App from '../src/components/App';
import Search from '../src/components/Search';

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

});
