import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Book from '../../components/book';

afterEach(cleanup);

describe('Book', () => {
  test('should have children', async () => {
    const { getByText } = render(
      <Book
        title="title"
        img="img"
        isbn="isbn"
        authors="authors"
        publisher="publisher"
        wiki="wiki"
      />
    );

    expect;
  });
});
