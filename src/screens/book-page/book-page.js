import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useParams } from 'react-router-dom';
import { RelatedProducts } from '@algolia/recommend-react';
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react';
import '@algolia/ui-components-horizontal-slider-theme';
import recommend from '@algolia/recommend';

import aa from 'search-insights';
import './book-page.css';

const RelatedItem = ({ item }) => <div>{item.title}</div>;

  const Header = () => <div>Bleah</div>


const searchClient = algoliasearch(
  'FP907897DQ',
  'cad92f3af97b2106eebf573b5a8492d9'
);

const recommendClient = recommend(
  'FP907897DQ',
  'cad92f3af97b2106eebf573b5a8492d9'
);

const BookPage = () => {
  const indexName = 'books_poc';
  const index = searchClient.initIndex(indexName);
  const { productID, queryID } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    index
      .search('', { facetFilters: `objectID:${productID}` })
      .then(({ hits }) => setProduct(hits[0]));
  }, []);

  const addConversionEvent = () => {
    aa('convertedObjectIDsAfterSearch', {
      index: indexName,
      eventName: 'Product Added to Favs',
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
    <div className="container product">
      <div className="header">Book details</div>
      <div className="product-container">
        <img className="details" src={thumbnail} align="center" alt={title} />
        <div className="product-details">
          <div className="product-info">
            <div className="product-author">By {authors}</div>
            <div className="product-name">
              <div className="product-title">{title}</div>-
              <div className="product-subtitle">{subtitle}</div>
            </div>
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
              onClick={addConversionEvent}
            >
              Add to favorites
            </button>
          </div>
          <div className="action-btn">
            <button
              className="ais-ClearRefinements-button"
              onClick={addConversionEvent}
            >
              Add to shelf
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts
        recommendClient={recommendClient}
        indexName={indexName}
        objectIDs={[productID]}
        itemComponent={RelatedItem}
        view={HorizontalSlider}
        maxRecommendations={8}
        headerComponent={Header}
      />
    </div>
  );
};

export default BookPage;
