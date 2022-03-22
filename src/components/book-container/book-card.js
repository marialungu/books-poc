import React from 'react';
import PropTypes from 'prop-types';
import { connectHitInsights } from 'react-instantsearch-dom';
import aa from 'search-insights';

import './books.css';
import { createSearchParams, generatePath, Link } from 'react-router-dom';

const BookCard = ({ hit, insights }) => {
  // const url = generatePath(":url?:queryString", {
  //   url: `/products/${hit.objectID}`,
  //   queryString: createSearchParams({queryID: hit.__queryID})
  // })

  const url = `/products/${hit.objectID}/${hit.__queryID}`;

  const { title, authors, thumbnail, objectID } = hit;
  return (
    <Link
      to={{ pathname: url }}
      onClick={() => {
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Search Result Clicked',
          userToken: 'user-1',
          objectIDs: [objectID],
          queryID: `${hit.__queryID}`,
          index: 'books_poc',
        });
      }}
    >
      <div className="card-container">
        <img src={thumbnail} align="center" alt={title} />
        <div className="book-details">
          <div className="book-name">{title}</div>
          <div className="book-author">By {authors}</div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default connectHitInsights(aa)(BookCard);
