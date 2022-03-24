import React from 'react';
import { Link } from 'react-router-dom';

import './product-card.css';
import PropTypes from 'prop-types';

const RecommendProductCard = ({ item }) => {
  const { thumbnail, title, authors, objectID, __queryID } = item;
  const url = `/products/${objectID}/${__queryID}`;

  return (
    <Link to={{ pathname: url }}>
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

RecommendProductCard.propTypes = {
  item: PropTypes.object,
};

RecommendProductCard.defaultProps = {
  item: {},
};

export default RecommendProductCard;
