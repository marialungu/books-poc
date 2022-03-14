import React from 'react';
import { map } from 'ramda';
import { connectInfiniteHits } from 'react-instantsearch-dom';

import BookCard from './book-card';
import './books.css';
import PropTypes from 'prop-types';

const BookContainer = ({ hits, hasMore, refineNext }) => (
  <>
    <div className="books-container">
      {map(book => <BookCard hit={book} />)(hits)}
    </div>
    <div className="show-more">
      <button
        className="ais-ClearRefinements-button"
        onClick={refineNext}
        disabled={!hasMore}
      >
        Show more
      </button>
    </div>
  </>
);

BookContainer.propTypes = {
  hits: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  refineNext: PropTypes.func.isRequired,
};

export default connectInfiniteHits(BookContainer);
