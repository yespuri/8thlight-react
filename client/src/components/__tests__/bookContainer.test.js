import React from 'react';
import { mount } from 'enzyme';
import BookContainer from '../../components/booksContainer';

test('renders children on input', () => {
  const books = [{ wikiInfo: { pageid: 2 }, volumeInfo: { title: 'test' } }];
  const wrapper = mount(<BookContainer info={books} />);
  expect(wrapper.find('.single-book').exists()).toBe(true);
  expect(wrapper.find('h3').text()).toEqual('test');
});
