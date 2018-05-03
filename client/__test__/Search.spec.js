import React from 'react';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import { transactions } from '../../server/db.json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import Search from '../src/components/Search';

describe('Search component', () => {
  test('has one input field and one button with text "Clear"', () => {
    const updateSearch = sinon.spy();
    const clearSearch = sinon.spy();
    const wrapper = mount(
      <Search updateSearch={updateSearch} clearSearch={clearSearch} />
    );
    const p = wrapper.find('input');
    expect(p.length).toBe(1);
    const b = wrapper.find('button');
    expect(b.length).toBe(1);
    expect(b.text()).toBe('Clear');
  });

  test('simulates keyup events with update search', () => {
    let updateSearch = sinon.spy();
    let clearSearch = sinon.spy();
    const wrapper = mount(
      <Search updateSearch={updateSearch} clearSearch={clearSearch} />
    );
    wrapper.find('input').simulate('keyup', {key: 'a'});
    expect(updateSearch.calledOnce).toBe(true);
    expect(clearSearch.calledOnce).toBe(false);
  });

  test('simulates click events with functions', () => {
    let updateSearch = sinon.spy();
    let clearSearch = sinon.spy();
    const wrapper = mount(
      <Search updateSearch={updateSearch} clearSearch={clearSearch} />
    );
    wrapper.find('button').simulate('click');
    expect(clearSearch.calledOnce).toBe(true);
    expect(updateSearch.calledOnce).toBe(false);

  });

});
