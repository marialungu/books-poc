import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';

import './books.css';

const BookCard = ({ hit }) => {
  const {
    title,
    authors,
    thumbnail,
  } = hit;
  return (
    <div className="card-container">
      <img src={thumbnail} align="center" alt={title} />
      <div className="book-details">
        <div className="book-name">{title}</div>
        <div className="book-author">By {authors}</div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default BookCard;
