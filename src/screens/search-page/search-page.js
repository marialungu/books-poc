import React from 'react';
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';

import Metas from '../../components/metas';
import BooksFilters from '../../components/books-filters';
import BookContainer from '../../components/book-container/book-container';
import './search-page.css';
import { searchClient } from '../../constants/init-clients';
import { BOOKS_INDEX } from '../../constants/app-details';

const SearchPage = () => (
  <div className="container">
    <InstantSearch searchClient={searchClient} indexName={BOOKS_INDEX}>
      <Configure clickAnalytics />
      <SearchBox
        className="search-box"
        translations={{
          placeholder: 'Search for your favorite books...',
        }}
        showLoadingIndicator={true}
      />
      <Metas />
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
