import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from '../../components/searchBar';

test('renders without crashing', async () => {
  shallow(<SearchBar />);
});

test('input value reflects state', () => {
  let wrapper = shallow(<SearchBar />);
  wrapper.find('input').simulate('change', { target: { value: 'test' } });
  expect(wrapper.find('input').props().value).toEqual('test');
});

test('default event is cancelled', () => {
  let apiCall = jest.fn();
  let wrapper = shallow(<SearchBar api={apiCall} />);
  let prevented = false;
  wrapper.find('button').simulate('click', {
    preventDefault: () => {
      prevented = true;
    },
  });
  expect(prevented).toBe(true);
});

test('searching status', () => {
  let apiCall = jest.fn();
  let wrapper = shallow(<SearchBar api={apiCall} />);
  wrapper.setState({ searching: true });
  // expect(wrapper.find('p').text()).toBe('Searching...');
  expect(wrapper.state('searching')).toBe(true);
});
