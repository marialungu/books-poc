import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useParams } from 'react-router-dom';
import aa from 'search-insights';
import './book-page.css';

const searchClient = algoliasearch(
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
    <div className="product-container">
      <img src={thumbnail} align="center" alt={title} />
      <div className="product-details">
        <div className="product-name">{title}</div>
        <div className="product-subtitle">{subtitle}</div>
        <div className="product-author">By {authors}</div>
        <div className="product-metas">
          {/* eslint-disable-next-line camelcase */}
          <div className="product-pages">{num_pages} pages</div>
          {/* eslint-disable-next-line camelcase */}
          <div className="product-pages">Published in {published_year}</div>
        </div>
        <div className="add-to-favs">
          <button className="ais-ClearRefinements-button" onClick={addConversionEvent}>Add to favs</button>
        </div>
      </div>
      <div className="product-description">{description}</div>
    </div>
  );
};

export default BookPage;
