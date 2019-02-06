import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import SearchBar from '../../components/searchBar';

afterEach(cleanup);

describe('Search Bar', () => {
  test('should have children', () => {
    const { getByTestId } = render(<SearchBar />);
    console.log(getByTestId);
  });
});
