import React from 'react';
import { shallow } from 'enzyme';
import Book from '../../components/book';

test('renders without crashing', () => {
  shallow(<Book />);
});
