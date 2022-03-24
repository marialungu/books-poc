import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RelatedProducts } from '@algolia/recommend-react';
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react';
import '@algolia/ui-components-horizontal-slider-theme';

import aa from 'search-insights';
import './book-page.css';
import { recommendClient, searchClient } from '../../constants/init-clients';
import { BOOKS_INDEX } from '../../constants/app-details';
import { RecommendProductCard } from '../../components/product-card';

const BookPage = () => {
  const index = searchClient.initIndex(BOOKS_INDEX);
  const { productID, queryID } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    index
      .search('', { facetFilters: `objectID:${productID}` })
      .then(({ hits }) => setProduct(hits[0]));
  }, []);

  const handleAddToFavorites = () => {
    aa('convertedObjectIDsAfterSearch', {
      index: BOOKS_INDEX,
      eventName: 'Product Added to Favs',
      userToken: 'user-1',
      objectIDs: [productID],
      queryID,
    });
  };

  const handleAddToShelf = () => {
    aa('convertedObjectIDsAfterSearch', {
      index: BOOKS_INDEX,
      eventName: 'Product Added to Shelf',
      userToken: 'user-1',
      objectIDs: [productID],
      queryID,
    });
  };

  const {
    thumbnail,
    title,
    authors,
    description,
    subtitle,
    // eslint-disable-next-line camelcase
    published_year,
    // eslint-disable-next-line camelcase
    num_pages,
  } = product;

  return (
    <div className="container product-page">
      <div className="header">Book details</div>
      <div className="product-container">
        <img className="details" src={thumbnail} align="center" alt={title} />
        <div className="product-details">
          <div className="product-info">
            <div className="product-name">
              <div className="product-title">{title}</div>-
              <div className="product-subtitle">{subtitle}</div>
            </div>
            <div className="product-author">By {authors}</div>
          </div>
          <div className="product-metas">
            {/* eslint-disable-next-line camelcase */}
            <div className="product-pages">{num_pages} pages</div>
            {/* eslint-disable-next-line camelcase */}
            <div className="product-pages">Published in {published_year}</div>
          </div>
          <div className="about-section">
            <div className="about">ABOUT</div>
            <div className="product-description">{description}</div>
          </div>
        </div>
        <div className="actions">
          <div className="action-btn">
            <button
              className="ais-ClearRefinements-button"
              onClick={handleAddToFavorites}
            >
              Add to favorites
            </button>
          </div>
          <div className="action-btn">
            <button
              className="ais-ClearRefinements-button"
              onClick={handleAddToShelf}
            >
              Add to shelf
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts
        recommendClient={recommendClient}
        indexName={BOOKS_INDEX}
        objectIDs={[productID]}
        itemComponent={RecommendProductCard}
        view={HorizontalSlider}
        maxRecommendations={8}
        translations={{
          title: 'Maybe you would also like',
        }}
      />
    </div>
  );
};

export default BookPage;
