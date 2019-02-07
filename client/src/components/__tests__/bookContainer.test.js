import React from 'react';
import { shallow } from 'enzyme';
import BookContainer from '../../components/booksContainer';

test('renders without crashing', () => {
  const books = [{ wikiInfo: { pageid: 2 }, volumeInfo: { title: 'test' } }];
  const wrapper = shallow(<BookContainer info={books} />);
  expect(wrapper.exists()).toBe(true);
});
