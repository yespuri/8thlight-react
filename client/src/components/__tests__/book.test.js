import React from 'react';
import { shallow } from 'enzyme';
import Book from '../../components/book';

test('renders without crashing', () => {
  const wrapper = shallow(<Book />);
  expect(wrapper.exists()).toBe(true);
});

test('renders title prop correctly', () => {
  const wrapper = shallow(<Book />);
  wrapper.setProps({ title: 'test' });
  expect(wrapper.find('h3').text()).toEqual('test');
});
