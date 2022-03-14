import React from 'react';
import { map } from 'ramda';
import { connectHits } from 'react-instantsearch-dom';

import BookCard from './book-card';
import './books.css';
import PropTypes from 'prop-types';

const BookContainer = ({ hits }) => (
  <div className="books-container">
    {map(book => <BookCard hit={book} />)(hits)}
  </div>
);

BookContainer.propTypes = {
  hits: PropTypes.array,
};
BookContainer.defaultProps = {
  hits: [],
};

export default connectHits(BookContainer);
