import React from 'react';
import PropTypes from 'prop-types';
import { connectHitInsights } from 'react-instantsearch-dom';
import aa from 'search-insights';

import './product-card.css';
import { Link } from 'react-router-dom';

const SearchProductCard = ({ hit, insights }) => {
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
      <div className="product-card-container">
        <img src={thumbnail} align="center" alt={title} />
        <div className="product-card-details">
          <div className="product-card-title">{title}</div>
          <div className="product-card-author">By {authors}</div>
        </div>
      </div>
    </Link>
  );
};

SearchProductCard.propTypes = {
  hit: PropTypes.object.isRequired,
  insights: PropTypes.func.isRequired,
};

export default connectHitInsights(aa)(SearchProductCard);
