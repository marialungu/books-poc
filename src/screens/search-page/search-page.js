import React from 'react';
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

import Metas from '../../components/metas';
import BooksFilters from '../../components/books-filters';
import BookContainer from '../../components/book-container/book-container';
import './search-page.css';

const searchClient = algoliasearch(
  'FP907897DQ',
  'cad92f3af97b2106eebf573b5a8492d9'
);

const SearchPage = () => (
  <div className="container">
    <InstantSearch searchClient={searchClient} indexName="books_poc">
      <Configure clickAnalytics />
      <SearchBox
        className="searchbox"
        translations={{
          placeholder: 'Search for your favorite books...',
        }}
        showLoadingIndicator={true}
      />
      <div>
        <Metas />
      </div>
      <div className="results">
        <div className="left-panel">
          <BooksFilters />
        </div>
        <div className="search-panel">
          <BookContainer />
        </div>
      </div>
    </InstantSearch>
  </div>
);

export default SearchPage;
