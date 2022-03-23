import React from 'react';
import './recommend-item.css';

const RecommendItem = ({ item }) => {
  const { thumbnail, title, authors } = item;

  return (
    <div className="item-container">
      <img className="item-img" src={thumbnail} align="center" alt={title} />
      <div className="item-details">
        <div className="item-title">{title}</div>
        <div className="item-author">By {authors}</div>
      </div>
    </div>
  );
};

export default RecommendItem;
